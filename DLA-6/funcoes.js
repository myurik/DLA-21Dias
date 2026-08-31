// Desafio 1
// esse desafio ja fiz em dias anteriores utilizando a função

// Desafio 2
function obterDiaDaSemana(numeroDia){
    let nomeDia;
    switch(numeroDia){
        case 1:
            nomeDia = "domingo";
            break;
        case 2:
            nomeDia = "segunda";
            break;
        case 3:
            nomeDia = "terça";
            break;
        case 4:
            nomeDia = "quarta";
            break;
        case 5:
            nomeDia = "quinta";
            break;
        case 6:
            nomeDia = "sexta";
            break;
        case 7:
            nomeDia = "sábado";
            break;
        default:
            nomeDia = "Número Inválido."
    }
    return nomeDia;
}

// Desafio 3
function aplicacaoFinanc(valorInicial, rendimentoAnual, duracaoAnos){
    for(let ano = 1; ano <=duracaoAnos; ano++){
        valorInicial = valorInicial + (valorInicial*rendimentoAnual);
        console.log(`Ano ${ano}: R$ ${valorInicial.toFixed(2)}`);
    }
}
