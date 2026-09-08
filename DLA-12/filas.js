// Desafio 1
let filaCallCenter = [];

function receberChamada(novaChamada){
    filaCallCenter.push(novaChamada);
    console.log(`Chamada recebida do número: ${novaChamada}. Total de chamadas na fila: ${filaCallCenter.length}`);
}

function atenderChamada(){
    if (filaCallCenter.length === 0){
        console.log("Não há chamadas para atender.")
    }
    else{
        const chamadaAtendida = filaCallCenter.shift();
        console.log(`Atendendo chamada do número: ${chamadaAtendida}.`);
    }
}

function statusDaFila(){
    console.log(`Total de chamadas na fila: ${filaCallCenter.length}`);
    if (filaCallCenter.length > 0){
        console.log(`Chamadas Esperando: ${filaCallCenter.join(", ")}`);
    }
}

// Desafio 2
let filaDriveThru = [];

const receberPedido = (placaCarro, novoPedido) => {
    filaDriveThru.push([placaCarro, novoPedido]);
    console.log(`Carro: ${placaCarro}; Pedido: ${novoPedido}`);
}

const atenderCarro = () => {
    if (filaDriveThru.length === 0){
        console.log("Não há carros na fila.")
    }
    else{
        const carroAtendido = filaDriveThru.shift();
        console.log(`Atendendo carro: ${carroAtendido[0]}. Pedido: ${carroAtendido[1]}`);
    }
}

const statusFilaDriveThru = () => {
    console.log(`Total de carros na fila: ${filaDriveThru.length}`);
    if (filaDriveThru.length > 0){
        console.log(`Carros Esperando:` + filaDriveThru.map(carro => carro[0]).join(", "));
    }
}

