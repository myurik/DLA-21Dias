let filaCaixa = []; // array representando a fila do caixa único

// Operação 1: cliente entra na fila (adicionado no fim)
function entrarNaFila(nomeCliente) {
    filaCaixa.push(nomeCliente);
    console.log(`${nomeCliente} entrou na fila. Posição: ${filaCaixa.length}`);
}

// Operação 2: cliente é atendido (removido do início — quem chegou primeiro sai primeiro)
function atenderCliente() {
    if (filaCaixa.length === 0) {
        console.log('Fila vazia. Nenhum cliente para atender.');
        return null;
    }
    const clienteAtendido = filaCaixa.shift();
    console.log(`${clienteAtendido} foi atendido.`);
    return clienteAtendido;
}

// Operação 3: ver quem é o próximo da fila, sem removê-lo
function verProximoCliente() {
    if (filaCaixa.length === 0) {
        console.log('Não há clientes na fila.');
        return null;
    }
    console.log(`Próximo da fila: ${filaCaixa[0]}`);
    return filaCaixa[0];
}

// Operação 4: ver quantas pessoas estão esperando
function tamanhoDaFila() {
    console.log(`Pessoas na fila: ${filaCaixa.length}`);
    return filaCaixa.length;
}

// Operação 5: checar se a fila está vazia
function filaVazia() {
    return filaCaixa.length === 0;
}

entrarNaFila('Ana');
entrarNaFila('Bruno');
entrarNaFila('Carla');

tamanhoDaFila();       // 3
verProximoCliente();   // Ana (primeira a entrar)

atenderCliente();      // Ana sai
tamanhoDaFila();       // 2
verProximoCliente();   // Bruno agora é o próximo

atenderCliente();      // Bruno sai
atenderCliente();      // Carla sai
atenderCliente();      // fila vazia, mostra aviso