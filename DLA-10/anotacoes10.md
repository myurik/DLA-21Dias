# Dia 10 — Pilhas (Stacks) com Capacidade Limite

## 🎯 Desafios do dia
- [ ] Desafio 1: Braço mecânico para empilhar produtos — Simular um braço mecânico que empilha produtos vindos de uma esteira em caixas. Cada caixa comporta no máximo 10 produtos; ao encher, é enviada e uma nova caixa/pilha começa. Operações sugeridas: **Empilhar**, **Verificar a Capacidade** e **Criar uma Nova Pilha**. Simular a esteira com um loop trazendo mais de 20 produtos.

## 💭 Raciocínio / Anotações
- Depois da fila (FIFO) do Dia 8, esse desafio parece introduzir o conceito complementar de **pilha (stack)** — só que aqui a ordem de entrada/saída importa menos do que o **limite de capacidade** (10 produtos por caixa).
- A lógica principal: um array representa a "pilha atual". A cada produto que chega da esteira, eu tento empilhar; se a pilha já tem 10 itens, preciso primeiro "despachar" essa caixa (guardar ou zerar) e começar uma pilha nova antes de empilhar o produto que chegou.
- Como o enunciado dá a dica de simular com 20+ produtos, o resultado esperado é que existam pelo menos 2 caixas cheias e o resto sobrando numa terceira caixa parcial.
- Isso puxa bastante o que já vi antes: array (pilha em si), loop (esteira trazendo produtos) e função (pra cada operação: empilhar, verificar capacidade, criar nova pilha).

## 📚 O que aprendi / posso aprender
- A diferença entre pensar em "uma fila que nunca acaba" (Dia 8) e "uma estrutura que tem um limite e precisa ser reiniciada/trocada quando enche" — aqui entra a ideia de controlar um recurso finito.
- Separar responsabilidades em funções pequenas (empilhar, verificar capacidade, criar nova pilha) deixa a lógica principal do loop da esteira bem mais legível — cada função cuida de uma coisa só.
- A dica do próprio enunciado ("não complicar, simplicidade é o caminho") reforça algo que já vinha sentindo nos desafios anteriores: dá pra resolver isso só com array + loop + função, sem precisar de nada mais sofisticado.

## 🚧 Dificuldades
- Ainda tô pensando em como guardar as caixas já "despachadas" — se vou só contar quantas caixas fecharam ou se vou guardar o conteúdo de cada uma (tipo um array de arrays).
- A parte de "verificar a capacidade" antes de empilhar me fez parar pra pensar na ordem certa das checagens: primeiro vejo se cabe, e só depois decido se empilho ali ou abro caixa nova — se inverter isso a lógica quebra.
- Vou precisar simular a chegada de mais de 20 produtos com nomes/IDs diferentes, então preciso pensar numa forma fácil de gerar esses produtos fictícios sem digitar um por um.

## 🔗 Link do PlayCode
- https://playcode.io/...