# Dia 15 — Listas Encadeadas (Linked Lists): O Trem de Vagões

## 🎯 Desafios do dia
- [ ] Desafio 1: Termine a implementação da lista encadeada de um trem — Completar as funções de uma lista encadeada (o curso já deu uma parte pronta, tipo a estrutura base do "trem"/vagões):
    - [ ] `insertLast` — inclui um nó no final da lista
    - [ ] `insertAt` — inclui um nó em uma posição específica
    - [ ] `deleteAt` — exclui um nó de uma posição específica
    - [ ] `searchAt` — encontra um nó de acordo com a posição
    - [ ] `traversal` — percorre todos os nós
    - [ ] `indexOf` — retorna a posição de acordo com o elemento do nó

## 💭 Raciocínio / Anotações
- Esse é o primeiro contato com **lista encadeada** de verdade — diferente de array, aqui cada "vagão" (nó) só sabe qual é o próximo vagão (`next`), não existe índice numérico direto como em array.
- A analogia do trem ajuda bastante: a locomotiva é o `head` (início da lista), e cada vagão aponta pro vagão de trás dele. Pra chegar no vagão 5, preciso "andar" vagão por vagão a partir da locomotiva — não dá pra pular direto.
- A própria dica do material já entrega o pulo do gato: `insertAt`, `deleteAt` e `searchAt` têm a mesma lógica de base (percorrer a lista contando posições até achar a certa) — só muda o que eu faço quando chego lá (inserir, remover ou só ler).
- `traversal` deve ser a função mais simples e também a mais reaproveitável — praticamente todo o resto (`indexOf`, `searchAt`) depende de "andar pela lista", então talvez valha a pena pensar nela como a peça central.
- `indexOf` é o espelho do `searchAt`: um recebe posição e retorna o elemento, o outro recebe o elemento e retorna a posição — parecido com a relação que já vi entre `indexOf` e acesso por índice em array, lá no Dia 9.

## 📚 O que aprendi / posso aprender
- A diferença fundamental entre array (acesso direto por índice) e lista encadeada (só dá pra chegar num nó "andando" a partir do início) — e por que isso tem implicações de desempenho diferentes.
- Perceber que várias operações de lista encadeada compartilham o mesmo "esqueleto" de percorrer nó por nó contando posições, e a única coisa que muda é a ação final — isso é meio parecido com o que reparei entre `indexOf`/`lastIndexOf` no Dia 9.
- A importância de resolver no papel antes de codar (como a própria dica sugere) — como cada nó só conhece o próximo, é fácil se perder nas referências (`atual`, `anterior`, `atual.next`) se não desenhar o fluxo antes.

## 🚧 Dificuldades
- Confesso que esse assunto (ponteiros/referências entre nós) é o mais abstrato até agora — não é tão visual quanto array, fila ou pilha, preciso pensar mais devagar.
- Separar bem os casos de borda: inserir/remover no início da lista é diferente de inserir/remover no meio ou no fim (no início não tem "nó anterior" pra reconectar).
- Ainda não sei exatamente o que já veio pronto do curso e o que preciso montar do zero — vou revisitar o que foi mostrado antes de começar a implementar as 6 funções.

## 🔗 Link do PlayCode
- https://playcode.io/...