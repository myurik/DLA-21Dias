# Dia 13 — Deques (Double-Ended Queues): Tarefas com Prioridade Dinâmica

## 🎯 Desafios do dia
- [ ] Desafio 1: Controle de tarefas dinâmicas com prioridades — Criar um controle de tarefas onde urgências podem surgir a qualquer momento, exigindo reorganizar a fila rapidamente. Objetivos:
    - [ ] 1. Implementar um **Deque** para tarefas, com inserção e remoção tanto no início quanto no final.
    - [ ] 2. Implementar 2 funções pra manipular prioridade: aumentar (mover a tarefa pra mais perto do início) e diminuir (mover pra mais perto do final).
    - [ ] 3. Testar com cenários realistas, simulando tarefas de urgências diferentes chegando a qualquer momento.

## 💭 Raciocínio / Anotações
- Esse dia introduz um conceito novo: **deque** (fila de duas pontas) — diferente da fila "pura" do Dia 8/12 (só entra no fim, sai no início), aqui dá pra inserir e remover dos DOIS lados.
- Isso resolve exatamente o problema de prioridade: uma tarefa urgente pode ser inserida direto no início (pra ser a próxima a ser feita), sem precisar passar por todas as outras.
- As funções de "aumentar"/"diminuir" prioridade não são só inserir no início/fim — parecem pedir para mover uma tarefa que **já está no meio do deque** pra mais perto de uma das pontas. Isso é mais sutil do que só `push`/`unshift`, porque primeiro preciso achar a tarefa (tipo um `indexOf` do Dia 9) antes de poder movê-la.
- Dá pra implementar o deque com um array comum: `push`/`pop` pro final, `unshift`/`shift` pro início — só que `unshift`/`shift` são um pouco mais caros computacionalmente (todos os outros itens precisam "deslocar" de posição), o que não deve importar pro tamanho desse desafio.

## 📚 O que aprendi / posso aprender
- A diferença entre fila (só uma direção) e deque (as duas direções) — e por que deque é a estrutura certa quando "prioridade" está envolvida.
- Reaproveitar a lógica de busca (achar a posição de um item) que já pratiquei no Dia 9, agora aplicada a um problema diferente (mover, não só encontrar).
- Pensar em "mover pra mais perto de uma ponta" como duas operações separadas: (1) remover a tarefa da posição atual e (2) inserir de novo mais perto do início ou do fim — não precisa ser uma mágica só, dá pra compor com o que já sei.

## 🚧 Dificuldades
- Ainda tô pensando no que "aumentar prioridade" significa na prática: é mandar a tarefa direto pro início, ou só andar uma posição de cada vez? O enunciado não deixa 100% claro, então vou ter que decidir uma interpretação.
- Cada tarefa provavelmente precisa ter um identificador (nome ou id), porque pra mover uma tarefa específica eu preciso primeiro achar ela no meio do deque — não basta só mexer nas pontas.
- Testar "cenários realistas" é meio vago — vou ter que inventar uma sequência de tarefas chegando com urgências diferentes pra ver se a reorganização funciona direito, e não tenho certeza ainda de quantos casos são suficientes pra validar.

## 🔗 Link do PlayCode
- https://playcode.io/...