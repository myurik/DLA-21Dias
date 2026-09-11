# Dia 17 — Algoritmos de Ordenação: Selection Sort

## 🎯 Desafios do dia
- [x] Desafio 1: Ordenação — organizando a bagunça — Ordenar um array de produtos (cada item é um array `["Nome", preço]`) por preço, usando um algoritmo de ordenação à escolha. Optei pelo **Selection Sort**.

## 💭 Raciocínio / Anotações
- Antes de codar, comparei Bubble Sort vs. Selection Sort: os dois são O(n²), mas o Bubble pode fazer muitas trocas (uma a cada comparação fora de ordem), enquanto o Selection só troca **uma vez por passada** (depois de já saber qual é o menor de todo o trecho restante). Preferi o Selection por causa disso.
- A lógica: loop externo (`i`) marca a partir de qual posição o array ainda precisa ser ordenado; loop interno (`j`) procura o menor elemento desse trecho restante, guardando a posição em `indiceMenor`; só troco `array[i]` com `array[indiceMenor]` depois que o loop interno termina.
- Como cada item do array é `["Nome", preço]`, a comparação precisa acessar especificamente `[1]` (o preço) — comparar os arrays inteiros não funciona.

## 📚 O que aprendi / posso aprender
- A diferença prática entre Bubble Sort e Selection Sort: não é só "outro jeito de fazer a mesma coisa", o número de trocas realmente muda dependendo do algoritmo escolhido — o que importa quando trocar é uma operação cara.
- Reforcei (de novo) o cuidado de comparar o valor certo dentro de uma estrutura aninhada (array dentro de array) — comparar `array[j]` inteiro em vez de `array[j][1]` dá um resultado totalmente diferente do esperado, sem erro nenhum aparecer, só o resultado errado.
- Vi a técnica de troca por desestruturação (`[a, b] = [b, a]`) como alternativa ao jeito clássico com variável temporária — as duas funcionam, é só estilo.

## 🚧 Dificuldades
- Errei a comparação: comparei `array[j] < array[indiceMenor]` (os itens inteiros) em vez de `array[j][1] < array[indiceMenor][1]` (só o preço) — não deu erro, só ordenou errado, o que é mais chato de perceber do que um erro que quebra na hora.
- Esqueci o `let` no `j` do loop interno de novo (mesma pegadinha do Dia 9 com variável global sem querer) — preciso prestar mais atenção nisso, parece que é um erro que se repete comigo.

## 🔗 Link do PlayCode
- https://playcode.io/...