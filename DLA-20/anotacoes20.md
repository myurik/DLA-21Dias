# Dia 20 — Busca Recursiva: Binária e Linear (Mensagens de WhatsApp)

## 🎯 Desafios do dia
- [ ] Desafio 1: Busca binária recursiva — Implementar a busca binária de um array de números usando **recursividade** (o curso já tinha mostrado a busca linear antes). Testar também com um array de nomes, pra ver como se comporta.
- [ ] Desafio 2: Busca linear recursiva retornando todas as ocorrências — Fazer uma busca linear recursiva que, em vez de parar no primeiro item encontrado, encontra **todos os índices** que contêm uma determinada palavra numa lista de mensagens de WhatsApp (JSON fornecido, com nome, mensagem, telefone e data). No fim, listar as mensagens encontradas mostrando nome, telefone e data de quem enviou.
    - Dica do material: usar `toLowerCase()` pra normalizar a busca (tanto a mensagem quanto o termo procurado) e `includes()` pra checar se a palavra está contida na mensagem.

## 💭 Raciocínio / Anotações
- Esse dia continua o assunto de recursão do Dia 19, só que aplicado a **busca** em vez de soma — o padrão de "função que chama a si mesma até um caso base" se repete, mudando o que a função faz em cada chamada.
- **Busca binária** só funciona em array **ordenado** — a cada chamada, eu comparo o valor do meio com o que procuro e decido se continuo procurando na metade de baixo ou na metade de cima, descartando a outra metade. O caso base é ou achar o valor, ou a "fatia" do array ficar vazia (não achou).
- Testar a busca binária com nomes é interessante porque força pensar em ordenação alfabética como "ordem" válida pro algoritmo — o array de nomes precisa estar ordenado alfabeticamente pra funcionar, do mesmo jeito que o de números precisa estar em ordem crescente.
- **Busca linear recursiva com todas as ocorrências** é diferente da busca linear "clássica" (que já vi antes, não recursiva): em vez de retornar assim que encontra o primeiro item e parar, a função precisa continuar percorrendo o resto do array mesmo depois de achar uma ocorrência, guardando cada índice onde bateu.
- Isso muda o "shape" do retorno: em vez de retornar um índice único (ou -1), a função vai retornar um **array de índices** (que pode ser vazio, se nada for encontrado).
- Depois de achar os índices, o passo final é usar esses índices pra buscar as mensagens completas no array original e exibir nome + telefone + data de cada uma.

## 📚 O que aprendi / posso aprender
- A diferença de abordagem entre busca binária (O(log n), mas exige array ordenado) e busca linear (O(n), funciona em qualquer array) — e por que recursão se encaixa bem nas duas, cada uma com seu próprio caso base.
- Reforçar (do Dia 19) que recursão não serve só pra "somar coisas aninhadas" — também serve pra percorrer e tomar decisões a cada passo, incluindo ir "acumulando" resultados ao longo das chamadas (nesse caso, os índices encontrados).
- A combinação `toLowerCase()` + `includes()` como uma dupla simples e poderosa pra busca de texto "case-insensitive" e parcial (não precisa a palavra ser exatamente igual à mensagem inteira, só estar contida nela).

## 🚧 Dificuldades
- Ainda não pensei direito em como vou "acumular" os índices encontrados ao longo das chamadas recursivas da busca linear — recursão geralmente retorna um valor por chamada, então vou ter que pensar em como ir somando/concatenando os resultados de cada chamada menor.
- Pra busca binária, vou ter que lembrar de tratar o caso do array de **nomes** não estar ordenado por padrão no JSON — se eu não ordenar antes, o algoritmo vai dar resultado errado sem necessariamente dar erro, o que é o tipo de bug mais chato de perceber (como já rolou comigo antes, tipo no Dia 17).
- Separar mentalmente o que é "índice" (posição no array) do que é o "conteúdo" (a mensagem inteira) — a busca acha os índices, mas o que eu realmente preciso mostrar no final é o objeto de mensagem inteiro correspondente a cada índice.

## 🔗 Link do PlayCode
- https://playcode.io/...