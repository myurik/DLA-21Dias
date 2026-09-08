# Dia 12 — Filas Aplicadas: Call Center e Drive-Through (revisão de FIFO)

## 🎯 Desafios do dia
- [ ] Desafio 1: Fila de atendimento em call center — Gerenciar uma fila de chamadas com funções simples pra adicionar chamada à fila e pra atender chamada. (o próprio material avisa que esse é basicamente uma revisão de algo que já foi ensinado junto no curso).
- [ ] Desafio 2: Fila de atendimento em um drive-through — Simular uma fila de carros numa cafeteria drive-through: carros entram no estacionamento, fazem pedido num totem eletrônico, e são atendidos seguindo FIFO. Pra simplificar, cada cliente pede só um produto.

## 💭 Raciocínio / Anotações
- Esse dia é basicamente consolidação do conceito de fila (Dia 8), só que aplicado a dois cenários diferentes — reforçar o mesmo padrão (`push` pra entrar, `shift` pra atender) em contextos novos.
- O call center é o caso mais "cru": só chamada entrando e saindo, sem informação extra além de talvez um identificador da chamada.
- O drive-through já tem uma camada a mais: cada item da fila não é só "um carro", é um carro **com um pedido** associado — então cada posição da fila provavelmente vai ser um objeto (`{ carro: '...', pedido: '...' }`) em vez de só uma string solta.
- A ordem de atendimento nos dois casos segue FIFO — quem chega primeiro (liga primeiro / entra no estacionamento primeiro) é atendido primeiro.

## 📚 O que aprendi / posso aprender
- Perceber como a mesma estrutura (fila) se repete em contextos bem diferentes — call center e drive-through parecem problemas distintos, mas a solução por trás é idêntica.
- No drive-through, a necessidade de guardar "carro + pedido" junto reforça a ideia de que os itens de uma fila não precisam ser só valores simples (string/número) — podem ser objetos com várias informações.
- Reforçar `push`/`shift` como a dupla padrão pra fila, já sem precisar pensar tanto (diferente do Dia 8, que foi a primeira vez).

## 🚧 Dificuldades
- No desafio 1 nem senti tanta dificuldade, já que é revisão direta do que vimos antes — mais rápido de resolver.
- No drive-through, fiquei pensando se vale a pena guardar o pedido junto com o carro na mesma fila, ou se seria mais simples ter duas informações separadas (uma fila só de carros + um jeito de "linkar" com o pedido) — acabei optando por juntar tudo num objeto só, parece mais organizado.
- Ainda não pensei em como vou exibir o que está sendo atendido no totem (só um `console.log` mesmo, ou algo mais elaborado) — vou decidir isso na hora de codar.

## 🔗 Link do PlayCode
- https://playcode.io/...