// Desafio 1
// esse desafio ja fiz em dias anteriores utilizando a função

// Desafio 2
function obterDiaDaSemana(numeroDia){
    switch(numeroDia){
        case 1:
            return "domingo";
        case 2:
            return "segunda";
        case 3:
            return "terça";
        case 4:
            return "quarta";
        case 5:
            return "quinta";
        case 6:
            return "sexta";
        case 7:
            return "sábado";
        default:
            return "Número Inválido."
    }
}

// Desafio 3
function aplicacaoFinanc(valorInicial, rendimentoAnual, duracaoAnos){
    for(let ano = 1; ano <=duracaoAnos; ano++){
        valorInicial = valorInicial + (valorInicial*rendimentoAnual);
        console.log(`Ano ${ano}: R$ ${valorInicial.toFixed(2)}`);
    }
}
