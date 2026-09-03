# Dia 8 — Filas (Queues): Conceito e Implementação

## 🎯 Desafios do dia
- [ ] Desafio 1: Filas e mais filas — Identificar 4 tipos diferentes de filas do mundo real e descrever, em tópicos e com minhas palavras, como cada uma funciona.
- [ ] Desafio 2: Fila de supermercado em código — Codificar uma fila de supermercado: começar com a fila de um único caixa (entrar na fila = ser adicionado; ser atendido = sair da fila) e, depois, pensar em como expandir esse conceito para vários caixas ao mesmo tempo.

## 💭 Raciocínio / Anotações
- Esse dia muda de assunto: em vez de variáveis soltas (como no Super Desafio do Dia 7), agora entra o conceito de **fila** — uma estrutura que segue a ordem de chegada (o primeiro que entra é o primeiro que sai, o famoso FIFO).
- No desafio 2, a dica do próprio material já entrega o modelo mental: "entrar na fila" = adicionar um item no fim; "ser atendido" = remover o item do início. Isso bate direto com os métodos de array em JS (`push` pra adicionar no fim, `shift` pra remover do início).
- A fila de supermercado com um único caixa é o caso mais simples (uma fila só). O passo de "vários caixas" vem depois — aí cada caixa teria sua própria fila, e entra a pergunta de como distribuir quem chega entre elas.

## 📚 O que aprendi / posso aprender
- O conceito de fila (FIFO) como estrutura de dados, e como ele aparece em situações do dia a dia (banco, supermercado, impressora, atendimento).
- A ligação entre a ideia abstrata de fila e a implementação prática com array: `push()` pra entrar na fila, `shift()` pra ser atendido e sair.
- Perceber a diferença entre uma fila única atendendo todo mundo (banco) e várias filas paralelas independentes (supermercado com vários caixas) — o segundo caso é mais complexo porque tem decisão de "qual fila escolher".

## 🚧 Dificuldades
- No desafio 1 tive que pensar um pouco pra sair dos exemplos óbvios (banco, supermercado) e lembrar de outros tipos de fila que funcionam diferente.
- No desafio 2, a parte de "pensar em quantas operações podem existir nessa fila" me fez parar e questionar: é só entrar/sair, ou tem mais coisa envolvida (ver quem é o próximo, ver quantas pessoas tem na fila, etc)? Ainda não bati o martelo em quais operações vou implementar de fato.
- Ainda não sei exatamente como vou estruturar o "várias filas ao mesmo tempo" (múltiplos caixas) — por enquanto só coloquei no radar, vou pensar melhor na hora de codar.

## 🔗 Link do PlayCode
- https://playcode.io/...