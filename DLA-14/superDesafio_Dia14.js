const NUMERO_CAIXAS = 10;
let filas = [];

for(let i = 0; i<NUMERO_CAIXAS; i++){
    filas.push([]);
}

function entrarNaFila(numeroCaixa, nomeCliente){
    filas[numeroCaixa].push(nomeCliente);
    console.log(`${nomeCliente} entrou na fila do caixa ${numeroCaixa + 1}. Posição: ${filas[numeroCaixa].length}`);
}

function atenderCliente(numeroCaixa){
    if(filas[numeroCaixa].length === 0){
        console.log('Fila vazia. Nenhum cliente para atender.');
        return null; // importante: sai da função aqui, senão continua e quebra embaixo
    }
    const clienteAtendido = filas[numeroCaixa].shift();
    console.log(`${clienteAtendido} foi atendido.`);
    return clienteAtendido;
}

function verProximoCliente(numeroCaixa){
    if(filas[numeroCaixa].length === 0){
        console.log('Fila vazia. Nenhum cliente para ver.');
        return null;
    }
    console.log(`Próximo Cliente: ${filas[numeroCaixa][0]}`);
    return filas[numeroCaixa][0];
}

function filaVazia(numeroCaixa){
    return filas[numeroCaixa].length === 0;
}

function tamanhoDaFila(numeroCaixa){
    // dica: .length da fila certa
    console.log(`Tamanho da fila do Caixa ${numeroCaixa}: ${filas[numeroCaixa].length}`)
}

function mostrarTodasAsFilas(){
    for (let i = 0; i < filas.length; i++) {
        console.log(`Caixa ${i + 1}: ${filas[i].length} pessoa(s) na fila`);
    }
}


entrarNaFila(0, 'Ana');
entrarNaFila(0, 'Bruno');
entrarNaFila(1, 'Carla');

verProximoCliente(0);      // Ana
tamanhoDaFila(0);          // 2
atenderCliente(0);         // Ana foi atendida
tamanhoDaFila(0);          // 1
verProximoCliente(0);      // Bruno agora

atenderCliente(2);         // fila vazia, mostra aviso (sem quebrar)
console.log(filaVazia(2)); // true

mostrarTodasAsFilas();