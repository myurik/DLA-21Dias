# Dia 16 — Estruturas de Dados na Prática: Playlist (Array vs. Lista Encadeada)

## 🎯 Desafios do dia
- [x] Desafio 1: Playlist de músicas em um app — Criar uma playlist com:
    - [x] 1. Adicionar e remover músicas
    - [x] 2. Mostrar todas as músicas da playlist
    - [x] 3. Toda música adicionada entra no início da playlist
    - [x] 4. Mover a posição de uma música a qualquer momento
    - [x] 5. Tocar a playlist inteira, do início ao fim
    - [x] 6. Tocar apenas uma música específica
    - [x] 7. Cada música tem: nome, artista, número de reproduções e tempo total
    - [x] 8. Tocar uma música incrementa o número de reproduções

## 💭 Raciocínio / Anotações
- Diferente dos dias anteriores, esse desafio não veio com a estrutura de dados definida — o professor pediu pra eu escolher. Decidi por **array de objetos** (cada música é um objeto `{ nome, artista, reproducoes, duracaoSegundos }`, a playlist inteira é um array desses objetos).
- Descartei lista encadeada (Dia 15) porque o requisito 4 (mover música pra qualquer posição) precisa de acesso a posições arbitrárias — array com `splice` resolve isso direto, enquanto lista encadeada exigiria percorrer nó por nó do mesmo jeito, sem ganhar nada em troca.
- `moverMusica` acabou sendo praticamente idêntico ao `aumentarPrioridade`/`diminuirPrioridade` do Dia 13: achar a posição atual (`findIndex`), remover de lá (`splice(posicaoAtual, 1)`) e reinserir na posição nova (`splice(novaPosicao, 0, item)`) — só que agora com uma posição escolhida livremente, não fixa (início/fim).
- Reaproveitei bastante coisa de dias anteriores: `unshift` pra sempre inserir no início (regra 3), `findIndex`/`find` pra localizar por nome (parecido com o `indexOf` do Dia 9), e o padrão remove-depois-insere do Dia 13.

## 📚 O que aprendi / posso aprender
- A parte mais importante do dia não foi código, foi a **decisão de arquitetura**: escolher a estrutura certa olhando pras operações que o problema realmente pede, e não só usar a última coisa que aprendi.
- Descobri que `splice(indice, 1)` **retorna um array** com o item removido, e dá pra usar desestruturação (`const [item] = array.splice(...)`) pra já pegar esse item direto, sem precisar de uma variável extra.
- Reforcei por que a ordem importa no `moverMusica`: remover primeiro e só depois inserir, porque inserir primeiro bagunçaria os índices e o "removedor" acabaria pegando a música errada.
- Vi na prática como um mesmo padrão de lógica (achar → tirar → recolocar) se repete em contextos bem diferentes — já tinha usado isso pra prioridade de tarefa (Dia 13) e agora serviu pra reordenar música numa playlist.

## 🚧 Dificuldades
- Não lembrava de cara como fazer o mover (tinha esquecido a lógica do aumentar/diminuir prioridade do Dia 13), precisei relembrar o padrão do zero.
- Caí numa pegadinha boba no `tocarPlaylistInteira`: usei `forEach` e nomeei o parâmetro de `nomeMusica`, mas o `forEach` sempre entrega o item inteiro do array — então eu tava passando o objeto inteiro pro `tocarMusica` em vez do nome (string), e nada batia.
- Deixei passar dois casos de música "não encontrada" que quebravam ou mentiam: o `removerMusica` avisava "removida" mesmo quando não achava nada, e o `tocarMusica` tentava ler `.nome` de um `undefined` e quebrava com erro. Aprendi (de novo) que sempre que uso `find`/`findIndex`, preciso tratar os dois casos: achou e não achou.

## 🔗 Link do PlayCode
- https://playcode.io/...