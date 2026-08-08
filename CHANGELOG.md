# Changelog — Livro-Caixa

Todas as mudanças relevantes do app são registradas aqui, por versão.
O número da versão também aparece dentro do app (topo da tela) e no menu "Dados do app" (ícone ⬇).

## [1.4.0] — 2026-08-06
- Controle de versão do app: número da versão visível no topo e histórico de mudanças no menu "Dados do app"
- Cache do service worker agora é renovado automaticamente a cada nova versão publicada

## [1.3.0] — 2026-08-06
- Armazenamento migrado de `localStorage` para `IndexedDB` (suporta bases de dados bem maiores)
- Importação e exportação de dados via arquivo `.json` (backup manual)
- Correção do carregamento dos gráficos: tenta 3 CDNs alternativos e não trava o app caso nenhum funcione

## [1.2.0] — 2026-08-06
- App transformado em PWA instalável: `manifest.json`, `service-worker.js`, ícones e funcionamento offline

## [1.1.0] — 2026-08-06
- Conversão para arquivo HTML único otimizado para celular: navegação inferior, botão flutuante e formulários em bottom sheet

## [1.0.0] — 2026-08-06
- Primeira versão do app: contas bancárias, transações (entradas/saídas), contas a pagar com lembretes de vencimento, e gráficos de entradas x saídas e gastos por categoria
