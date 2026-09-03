# Dia 9 — Arrays: Reimplementando Métodos Nativos

## 🎯 Desafios do dia
- [ ] Desafio 1: Recrie funções úteis em Arrays — A partir de um array com o Top 5 carros mais vendidos, reimplementar na mão o que fazem `indexOf` (retorna a posição do primeiro elemento encontrado, ou -1 se não existir), `includes` (retorna `true`/`false` se o elemento existe) e `lastIndexOf` (retorna a posição da última ocorrência, ou -1 se não existir).
- [ ] Desafio 2: Um novo Slice — Recriar o `slice` do zero. Se nenhum parâmetro for passado, deve copiar o array original inteiro. O índice de início e fim devem ter valores padrão.

## 💭 Raciocínio / Anotações
- O fio condutor do dia é "abrir a caixa preta" dos métodos de array que eu já uso prontos — entender como `indexOf`, `includes`, `lastIndexOf` e `slice` funcionam por dentro, percorrendo o array manualmente (provavelmente com `for`).
- `indexOf` e `lastIndexOf` são bem parecidos — a diferença é a direção da busca: um percorre do início pro fim e para na primeira ocorrência, o outro percorre (ou guarda a última posição encontrada) até o fim pra achar a última ocorrência.
- `includes` é basicamente meu próprio `indexOf` reaproveitado: se a posição encontrada for diferente de -1, retorno `true`, senão `false`.
- No `slice`, o pulo do gato é lidar com os parâmetros opcionais — a função precisa funcionar tanto chamada sem argumento nenhum (copia tudo) quanto com início/fim customizados.

## 📚 O que aprendi / posso aprender
- Métodos "prontos" do JS não são mágica — são só loops e condicionais organizados por trás de um nome bonito. Reimplementar isso ajuda a perder o medo de "métodos avançados".
- Reforçar a lógica de retornar -1 como convenção pra "não encontrado", em vez de `null` ou `undefined` — entender por que essa convenção existe (dá pra comparar com número direto).
- No `slice`, aprender a dar valores padrão pros parâmetros (ex: `inicio = 0`, `fim = array.length`) pra função funcionar mesmo sem argumentos, que é basicamente o mesmo princípio de valores default em funções.
- Perceber que `lastIndexOf` não precisa necessariamente percorrer o array de trás pra frente — dá pra percorrer normal e só ir guardando a última posição em que o valor bateu.

## 🚧 Dificuldades
- No começo fiquei tentado a fazer o `lastIndexOf` percorrendo o array de trás pra frente (índice decrescente), mas percebi que ia complicar mais a lógica do que precisava — ainda tô decidindo qual abordagem fica mais limpa.
- Pensar nos valores padrão do `slice` me deixou um tempo quebrando a cabeça, principalmente pra cobrir o caso de fim negativo ou fora do tamanho do array (o slice original aceita índice negativo, não sei se vou implementar isso ou deixar só pro caso "normal").
- Testar se minha versão bate exatamente com o comportamento do método nativo original, incluindo os casos de borda (array vazio, elemento repetido, elemento que não existe).

## 🔗 Link do PlayCode
- https://playcode.io/...