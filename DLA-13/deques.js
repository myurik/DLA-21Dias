let deque = [];

function insertFront(tarefa){
    deque.unshift(tarefa);
}

function insertLast(tarefa){
    deque.push(tarefa);
}

function deleteFront(){
    if(isEmpty()){
        console.log('Deque vazio, nada pra remover.');
        return null;
    }
    return deque.shift();
}

function deleteLast(){
    if(isEmpty()){
        console.log('Deque vazio, nada pra remover.');
        return null;
    }
    return deque.pop();
}

function front(){
    return deque[0];
}

function rear(){
    return deque[deque.length - 1];
}

function isEmpty(){
    return deque.length === 0;
}

function getItens(){
    return deque;
}

function aumentarPrioridade(nomeTarefa){
    const indice = deque.indexOf(nomeTarefa);
    if(indice === -1){
        console.log(`Tarefa "${nomeTarefa}" não encontrada.`);
        return;
    }
    deque.splice(indice, 1);   // remove a tarefa de onde ela estava
    insertFront(nomeTarefa);   // reinsere lá na frente
    console.log(`"${nomeTarefa}" teve a prioridade aumentada.`);
}

function diminuirPrioridade(nomeTarefa){
    const indice = deque.indexOf(nomeTarefa);
    if(indice === -1){
        console.log(`Tarefa "${nomeTarefa}" não encontrada.`);
        return;
    }
    deque.splice(indice, 1);   // remove a tarefa de onde ela estava
    insertLast(nomeTarefa);    // reinsere lá atrás
    console.log(`"${nomeTarefa}" teve a prioridade diminuída.`);
}

console.log('--- Montando a fila de tarefas do dia ---');
insertLast('Responder e-mails');
insertLast('Preparar apresentação');
insertLast('Revisar relatório mensal');
console.log(getItens());
// ['Responder e-mails', 'Preparar apresentação', 'Revisar relatório mensal']

console.log('\n--- Chega uma urgência ---');
insertFront('URGENTE: servidor caiu');
console.log(getItens());
// ['URGENTE: servidor caiu', 'Responder e-mails', 'Preparar apresentação', 'Revisar relatório mensal']

console.log('\n--- O chefe pede pra priorizar a apresentação ---');
aumentarPrioridade('Preparar apresentação');
console.log(getItens());
// ['Preparar apresentação', 'URGENTE: servidor caiu', 'Responder e-mails', 'Revisar relatório mensal']

console.log('\n--- O relatório pode esperar, joga pro final ---');
diminuirPrioridade('Revisar relatório mensal');
console.log(getItens());
// (já estava no final, então não muda a posição, mas a função roda sem erro)

console.log('\n--- Resolve o problema do servidor ---');
diminuirPrioridade('URGENTE: servidor caiu');
console.log(getItens());
// ['Preparar apresentação', 'Responder e-mails', 'Revisar relatório mensal', 'URGENTE: servidor caiu']

console.log('\n--- Atendendo a próxima tarefa da fila ---');
console.log('Atendendo:', deleteFront());
console.log(getItens());

console.log('\n--- Tentando priorizar algo que não existe ---');
aumentarPrioridade('Tarefa Fantasma'); // deve avisar "não encontrada"