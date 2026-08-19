/* =========================== Livro-Caixa: service worker (offline) ===========================
 * Estratégia:
 *  - Ao instalar, guarda em cache a própria página do app (o "app shell").
 *  - Para pedidos de navegação (abrir o app), tenta a rede primeiro; se não houver internet,
 *    devolve a página salva em cache — assim o app abre normalmente offline.
 *  - Para os demais arquivos (manifest, ícones, bibliotecas como Chart.js/Firebase carregadas
 *    por CDN), usa "cache primeiro, com atualização em segundo plano": se já tiver em cache,
 *    responde na hora; ao mesmo tempo busca uma versão nova na rede (quando houver) para a
 *    próxima vez.
 *  - Pedidos que não sejam GET (ex: chamadas ao Firestore) não são interceptados — passam
 *    direto pela rede, como de costume.
 *
 * IMPORTANTE: sempre que a versão do app (APP_VERSION, no HTML) mudar, mude também o valor de
 * CACHE_VERSION abaixo. Isso força o service worker a descartar o cache antigo e buscar tudo de
 * novo, evitando que o usuário fique preso numa versão desatualizada do app.
 */

const CACHE_VERSION = 'lc-cache-v1.34.11';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // Guarda a própria página do app assim que o service worker é instalado,
      // para já existir algo em cache mesmo antes do primeiro "fetch" bem-sucedido.
      return cache.addAll(['./', './manifest.json']).catch(() => {
        // Se algum desses arquivos não existir/falhar, não impede a instalação do SW.
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Só intercepta pedidos de leitura (GET). Chamadas ao Firestore (POST/PUT) e afins
  // seguem direto pela rede, sem passar pelo cache.
  if (req.method !== 'GET') return;

  // Pedido de navegação (abrir/recarregar o app): tenta rede, cai para o cache se offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put('./', copy));
          return res;
        })
        .catch(() => caches.match('./').then((cached) => cached || caches.match(req)))
    );
    return;
  }

  // Demais arquivos (manifest, ícones, Chart.js, Firebase, fontes, etc.):
  // responde do cache imediatamente se existir, e atualiza o cache em segundo plano.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          // "opaque" = resposta de outra origem (CDN do Chart.js/Firebase) pedida em modo
          // no-cors: o navegador não deixa ler status/conteúdo, mas ainda pode ser cacheada
          // e servida normalmente depois — por isso também é aceita aqui, não só status 200.
          if (res && (res.status === 200 || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
