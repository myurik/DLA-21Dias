const CAPACIDADE_MAXIMA = 10;
let caixaAtual = [];        // a pilha que está sendo montada agora
let caixasDespachadas = []; // guarda cada caixa já fechada e enviada

function verificarCapacidade(){
    return caixaAtual.length < CAPACIDADE_MAXIMA;
}

function empilhar(produto){
    if(!verificarCapacidade()){
        criarNovaPilha();
    }

    caixaAtual.push(produto);
    return caixaAtual;
}

function criarNovaPilha(){
    caixasDespachadas.push(caixaAtual);
    caixaAtual = [];
}

for (let i = 1; i <= 25; i++) {
    empilhar(`Produto ${i}`);
}

console.log('Caixas despachadas:', caixasDespachadas.length);
console.log('Produtos na caixa atual (incompleta):', caixaAtual);