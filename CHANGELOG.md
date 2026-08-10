# Changelog — Livro-Caixa

Todas as mudanças relevantes do app são registradas aqui, por versão.
O número da versão também aparece dentro do app (topo da tela) e no menu "Dados do app" (ícone ⬇).

## [1.19.0] — 2026-08-09
- Confirmação "Deseja confirmar essa alteração?" em toda ação que grava ou muda dados (contas, transações, contas a pagar, ativar/inativar, marcar como paga)
- Corrigido: mudanças feitas nos primeiros segundos após abrir o app podiam não ser enviadas para a nuvem — agora toda escrita espera a conexão terminar de se estabelecer
- Corrigido: gráficos podiam ficar travados em "indisponíveis" mesmo com tudo certo (condição de corrida no carregamento) — agora tenta de novo automaticamente, com botão "Tentar novamente"
- Corrigido: notificações de vencimento agora usam o método correto para aparecer no celular (Android); botão "Testar notificação agora" adicionado para conferir
- Transações de dias diferentes agora aparecem com tons de azul claro alternados, para facilitar a leitura

## [1.18.0] — 2026-08-09
- Importar um arquivo .json agora também envia os dados para a nuvem automaticamente (quando conectado), mantendo todos os aparelhos iguais
- Coluna de contas na aba Transações agora mostra a lista inteira, sem cortar com rolagem interna
- Confirmação obrigatória ao marcar uma transação como "já consolidada" pela lista
- Notificações de vencimento: 1 dia antes (11h e 15h) e no dia (a cada 2h, das 10h às 22h), até a conta ser marcada como paga

## [1.17.1] — 2026-08-09
- Corrigido: o envio de dados para a nuvem podia ser interrompido (ex: tela travar) e mesmo assim mostrar "concluído" — agora ele confere o que realmente chegou lá e avisa se algo falhou
- Status de sincronização agora mostra "Conectando...", "Sincronizado" ou "Erro de sincronização" no topo do app e no menu Dados do app
- Menu Dados do app agora mostra quantas contas/transações/contas a pagar existem neste aparelho, para comparar com a nuvem

## [1.17.0] — 2026-08-08
- Sincronização em nuvem com Firebase: várias pessoas usando o app conseguem salvar e excluir contas, transações e contas a pagar com os dados sincronizados em tempo real
- Novo painel "Sincronização em nuvem" no menu Dados do app, para conectar, desconectar e enviar os dados locais para a nuvem
- Indicador "☁ Sincronizado" no topo do app quando a conexão está ativa

## [1.16.0] — 2026-08-08
- Aba Contas: ícone de ativar/inativar conta, empilhado abaixo do lápis no cartão
- Cartões de conta mais compactos (menor espaçamento e fontes reduzidas)
- Corrigido: botão de excluir conta a pagar não ficava mais posicionado incorretamente

## [1.15.0] — 2026-08-08
- Aba Contas: ícone de lápis em cada cartão (abaixo da lixeira) para editar nome, banco, tipo e saldo inicial da conta

## [1.14.0] — 2026-08-08
- Aba Contas a pagar: nova seção com as transações lançadas que ainda não foram consolidadas, separadas em Passadas e Futuras

## [1.13.0] — 2026-08-08
- Aba Contas: contas inativas agora aparecem sempre abaixo das ativas
- Campos de valor (transações, contas a pagar, saldo inicial) formatados em R$ enquanto você digita

## [1.12.0] — 2026-08-08
- Excluir uma conta agora também pede confirmação, informando que as transações dela serão apagadas junto
- Contas em ordem alfabética na aba Contas, com alternância de cores entre os cartões
- Tela de edição de transação em modo reduzido, ocupando menos espaço na tela

## [1.11.0] — 2026-08-08
- Excluir uma transação de transferência agora remove as duas pontas (nas duas contas envolvidas)
- Edição de transação com as três opções (Entrada, Saída, Transferência) e botão "Sair (sem salvar)"
- Lançamentos recorrentes: repita uma transação semanal, mensal, trimestral, quadrimestral, semestral ou anualmente, gerando automaticamente as datas futuras

## [1.10.1] — 2026-08-08
- Coluna de contas na aba Transações mais larga, para os nomes ficarem mais legíveis

## [1.10.0] — 2026-08-08
- Aba Transações reformulada: barra lateral com as contas ativas e, abaixo, as inativas (sombreadas) — toque numa conta para filtrar só as transações dela
- Filtro de período no topo: "Últimos 7 dias" (padrão) ou um mês/ano específico
- Ao abrir uma transação de transferência, mostra qual conta enviou e qual recebeu

## [1.9.0] — 2026-08-08
- Extrato da conta (aba Contas) ganhou o botão "+ Nova transação nesta conta"
- Novo tipo "Transferência" no lançamento de transações, para mover dinheiro entre duas contas de uma vez
- Ticket "Consolidado" em cada transação, para marcar se ela já foi efetivada no banco (toque para alternar direto na lista)

## [1.8.0] — 2026-08-08
- Transações dentro de cada conta agora aparecem em ordem crescente (mais antigas no topo, mais recentes embaixo)
- Saldo do dia exibido ao final de cada dia, dentro da conta e no extrato
- Tocar em uma transação agora abre a edição completa dela
- Botão de remover movido para dentro da edição da transação, com mensagem de confirmação antes de excluir

## [1.7.0] — 2026-08-08
- Aba Contas: tocar em uma conta agora abre o extrato de transações daquela conta
- Extrato com filtro de mês e ano, já aberto no mês/ano atual por padrão
- Resumo de entradas, saídas e saldo do mês dentro do extrato

## [1.6.0] — 2026-08-08
- Aba Transações reorganizada: cada transação agora aparece agrupada dentro da sua respectiva conta, com o total de cada conta e opção de expandir/recolher
- Carregamento incremental por conta (evita travar o app com contas com milhares de transações)

## [1.5.0] — 2026-08-06
- Botão "Localizar" na Visão geral: busca transações por descrição, categoria ou conta
- Botão para ativar/inativar contas (contas inativas saem das opções de nova transação e do saldo total, mas mantêm o histórico)
- Botão "Salvar na nuvem" na Visão geral: gera backup em `.json` e usa o menu de compartilhar do celular quando disponível (Google Drive, iCloud, etc.)

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
