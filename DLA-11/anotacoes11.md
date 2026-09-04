# Dia 11 — Pilhas Aplicadas: Histórico de Navegação (Voltar/Avançar)

## 🎯 Desafios do dia
- [ ] Desafio 1: Controle de navegação em navegadores web — Simular a navegação entre páginas de um navegador, implementando "voltar" e "avançar" usando pilhas. Criar 3 funções (`voltar`, `avançar`, `navegarPara`), controlando tudo a partir de 2 pilhas + 1 variável com o endereço da página atual, usando `push`/`pop`.

## 💭 Raciocínio / Anotações
- Essa é a aplicação mais "clássica" de pilha que existe — literalmente o botão voltar/avançar do navegador que uso todo dia.
- O modelo que faz sentido: uma pilha `pilhaVoltar` (páginas visitadas antes da atual) e uma pilha `pilhaAvancar` (páginas que dava pra reavançar), mais a variável `paginaAtual`.
- `navegarPara(novoEndereco)`: empilha a página atual em `pilhaVoltar`, atualiza `paginaAtual` pro novo endereço, e **zera** `pilhaAvancar` (faz sentido: se eu navego pra um lugar novo, o "avançar" antigo deixa de existir — é assim que os navegadores reais funcionam).
- `voltar()`: só faz sentido se `pilhaVoltar` não estiver vazia. Empilha a página atual em `pilhaAvancar` (pra poder reavançar depois) e "desempilha" (`pop`) o topo de `pilhaVoltar`, que vira a nova `paginaAtual`.
- `avancar()`: o espelho do voltar — empilha a atual em `pilhaVoltar` e tira (`pop`) o topo de `pilhaAvancar`.

## 📚 O que aprendi / posso aprender
- Perceber que "pilha" (LIFO — o último que entra é o primeiro que sai) encaixa perfeitamente aqui: a última página visitada é a primeira pra onde eu volto.
- A ideia de usar **duas pilhas trabalhando junto** pra resolver um problema (uma pra cada direção) é um padrão que acho que vou ver de novo em outros contextos.
- Entender por que navegar pra um endereço novo precisa limpar o "avançar" — é uma regra de negócio que só faz sentido quando penso no comportamento real do navegador, não é algo óbvio só olhando pra estrutura de dados.
- `push`/`pop` sendo usados nos dois lados (tanto pra guardar quanto pra "resgatar" o item mais recente) mostra como a mesma dupla de métodos resolve entrada e saída numa pilha.

## 🚧 Dificuldades
- Levei um tempo pra visualizar o fluxo completo antes de codar — principalmente entender que cada ação (voltar, avançar, navegar) sempre mexe nas DUAS pilhas, não só numa.
- Fiquei em dúvida se `pilhaAvancar` deveria ser limpa em TODO `navegarPara`, ou só quando ela realmente tinha algo — mas acho que faz sentido limpar sempre, mesmo vazia (não deveria dar erro nem mudar o resultado).
- Preciso pensar no caso de borda de clicar em "voltar" quando não tem nada na `pilhaVoltar` (nem sempre lembro de tratar isso antes de rodar e ver o erro na cara).

## 🔗 Link do PlayCode
- https://playcode.io/...