const numeros = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
// já ordenado — pré-requisito da busca binária

const nomes = ['Ana', 'Bruno', 'Carla', 'Daniela', 'Eduardo', 'Fábio'];
// também precisa estar ordenado (alfabeticamente, nesse caso)

function buscaBinaria(array, alvo, inicio = 0, fim = array.length - 1){
    if (inicio > fim) {
        return -1; // caso base: não encontrou
    }

    const meio = Math.floor((inicio + fim) / 2);
    console.log(`Buscando entre índices ${inicio} e ${fim}, meio = ${meio} (valor ${array[meio]})`);

    if (array[meio] === alvo) {
        return meio; // caso base: encontrou
    }

    if (alvo < array[meio]) {
        return buscaBinaria(array, alvo, inicio, meio - 1);
    } else {
        return buscaBinaria(array, alvo, meio + 1, fim);
    }
}

console.log(buscaBinaria(numeros, 23));  // deve achar a posição 5
console.log(buscaBinaria(numeros, 100)); // deve retornar -1

console.log(buscaBinaria(nomes, 'Daniela')); // testa com strings também


const mensagens = [
    { nome: "Ana", mensagem: "Oi, você viu o relatório que mandei ontem?", telefone: "11999999999", data: "2025-04-01" },
    { nome: "Bruno", mensagem: "Vamos almoçar juntos amanhã?", telefone: "11988888888", data: "2025-04-15" },
    { nome: "Carlos", mensagem: "Segue o relatório atualizado.", telefone: "11977777777", data: "2025-04-20" },
    { nome: "Daniela", mensagem: "Relatório final enviado. Verifique!", telefone: "11966666666", data: "2025-04-20" },
    { nome: "Vanessa Weber", mensagem: "Está chegando ao fim do Desafio do Código Fonte TV", telefone: "12977445588", data: "2025-04-21" }
];

function buscarTodasOcorrencias(mensagens, termo, indiceAtual = 0){
    if (indiceAtual >= mensagens.length) {
        return []; // caso base: chegou ao fim da lista
    }

    const mensagemAtual = mensagens[indiceAtual].mensagem.toLowerCase();
    const termoBuscado = termo.toLowerCase();

    const resultadoResto = buscarTodasOcorrencias(mensagens, termo, indiceAtual + 1);

    if (mensagemAtual.includes(termoBuscado)) {
        return [indiceAtual, ...resultadoResto];
    } else {
        return resultadoResto;
    }
}

function exibirMensagensEncontradas(mensagens, termo){
    const indices = buscarTodasOcorrencias(mensagens, termo);

    console.log(`${indices.length} mensagem(ns) encontrada(s) com "${termo}":`);
    indices.forEach(i => {
        const msg = mensagens[i];
        console.log(`- ${msg.nome} | ${msg.telefone} | ${msg.data}`);
    });
}

exibirMensagensEncontradas(mensagens, 'relatório');