# Dia 18 — Ordenação da Playlist (Bubble Sort e Selection Sort)

## 🎯 Desafios do dia
- [ ] Desafio 1: Ordenação da playlist (por título e por número de reproduções) — Voltar na playlist do Dia 16 e criar 2 funções de ordenação: uma por **título da música** usando **Bubble Sort**, e outra por **número de reproduções** usando **Selection Sort** (só pra praticar os dois algoritmos).

## 💭 Raciocínio / Anotações
- Diferente do Dia 17 (array de arrays com preço numérico), aqui os dados são objetos (`{ nome, artista, reproducoes, duracaoSegundos }`), então as comparações vão acessar propriedades (`musica.nome`, `musica.reproducoes`) em vez de posições de array (`item[1]`).
- Ordenar por **título** (string) é diferente de ordenar por **reproduções** (número): comparação de string usa `<`/`>` que compara alfabeticamente, então dá pra reaproveitar a mesma lógica de comparação, só trocando o campo.
- Bubble Sort por título: dois loops aninhados comparando pares vizinhos (`playlist[j].nome > playlist[j+1].nome`) e trocando quando fora de ordem.
- Selection Sort por reproduções: mesmo padrão que já fiz no Dia 17 — acha o índice de menor (ou maior, dependendo se eu quiser crescente ou decrescente) `reproducoes` no trecho restante e troca uma vez por passada.
- Como as músicas são objetos (não arrays), a troca de posição no array é a mesma técnica de sempre (`[array[i], array[j]] = [array[j], array[i]]`), só que cada elemento trocado é um objeto inteiro, não um valor solto.

## 📚 O que aprendi / posso aprender
- Perceber que os mesmos dois algoritmos (Bubble e Selection) se aplicam tanto a números quanto a strings — o algoritmo não muda, só o critério de comparação.
- Ordenar por número de reproduções levanta uma pergunta que não tinha antes: crescente (quem tocou menos primeiro) ou decrescente (as mais tocadas primeiro, tipo um "top músicas")? Faz mais sentido decrescente pra esse caso de uso.
- Reforçar (de novo) o cuidado que quase errei no Dia 17: comparar o campo certo do objeto/array, não o item inteiro.

## 🚧 Dificuldades
- Vou ter que ter cuidado pra não repetir o erro do `let` no loop interno que já aconteceu duas vezes (Dia 9 e Dia 17) — já é um padrão de erro meu, preciso revisar isso toda vez que escrever um loop aninhado.
- Ainda não decidi se as duas novas funções de ordenação vão alterar a `playlist` original (mutar o array) ou devolver uma cópia ordenada separada — isso importa porque a playlist já é usada em várias outras funções do Dia 16 (mostrar, tocar, mover).
- Preciso lembrar de testar com nomes de música que tenham acentuação ou capitalização diferente, já que comparação de string com `<`/`>` pode se comportar de um jeito não muito óbvio nesses casos.

## 🔗 Link do PlayCode
- https://playcode.io/...