// Desafio 1 - CNH
const validadeCNH = (primeiraVia, idade) => {
    if(primeiraVia === true){
        console.log("1 ano.");
    }
    else if (idade < 50){
        console.log("10 anos.");
    }
    else if (idade < 70){
        console.log("5 anos.");
    }
    else {
        console.log("3 anos.");
    }
}

// Desafio 2 - Perfomance Aluno
function avaliarAluno(nota){
    if(nota < 5){
        console.log("Insuficiente.");
    }
    else if(nota < 6){
        console.log("Regular");
    }
    else if(nota < 7.5){
        console.log("Bom");
    }
    else if(nota < 9){
        console.log("Muito bom");
    }
    else {
        console.log("Excelente");
    }
}

// Desafio 3 - Ternário
function mostrarStatus(nota){
    let status;
    nota >= 70 ? status = "aprovado": status = "reprovado";
    console.log(status);
}

// Desafio 4 - Ternário Complexo
const comprasDisponivel = (statusConta, saldo) => {
    let podeComprar;
    statusConta === true && saldo > 500 ? podeComprar = true: podeComprar = false;
    return podeComprar;
}

// Desafio 5 - Cancela de Estacionamento
function avisarMotorista(estadoCancela){
    switch(estadoCancela.toLowerCase()){
        case 'aberta':
            console.log("Pode Prosseguir");
            break;
        case 'fechada':
            console.log("Cancela Fechada. Espere.")
            break;
        case 'manutenção':
            console.log("Cancela em Manutenção. Mude para a cancela ao lado.");
            break;
        default:
            console.log("Sem informações, consulte nosso suporte...");
            break;
    }
}

// Desafio 6 - PDV
function descontoPDV(valorProduto, tipoProduto){
    let valorFinal;
    switch(tipoProduto.toLowerCase()){
        case 'alimentos':
            valorFinal = (valorProduto * 0.95).toFixed(2);
            console.log(`O valor final do produto será: R$ ${valorFinal}`);
            break;
        case 'eletrônicos':
            valorFinal = (valorProduto * 0.90).toFixed(2);
            console.log(`O valor final do produto será: R$ ${valorFinal}`);
            break;
        case 'roupas':
            valorFinal = (valorProduto * 0.80).toFixed(2);
            console.log(`O valor final do produto será: R$ ${valorFinal}`);
            break;
        case 'livros':
            valorFinal = (valorProduto * 0.50).toFixed(2);
            console.log(`O valor final do produto será: R$ ${valorFinal}`);
            break;
        default:
            valorFinal = valorProduto.toFixed(2);
            console.log(`O produto não possui Desconto.
                Valor Final: R$ ${valorFinal}`);
    }
}
validadeCNH(true, 20);   // "1 ano." (primeira via sempre vence)
validadeCNH(false, 49);  // "10 anos." (limite de baixo)
validadeCNH(false, 50);  // "5 anos."  (limite de cima da faixa <50)
validadeCNH(false, 69);  // "5 anos."  (limite de baixo da faixa <70)
validadeCNH(false, 70);  // "3 anos."  (limite de cima)

avaliarAluno(4.9);  // "Insuficiente."
avaliarAluno(5);    // "Regular"    (limite <6)
avaliarAluno(5.9);  // "Regular"
avaliarAluno(6);    // "Bom"        (limite <7.5)
avaliarAluno(7.4);  // "Bom"
avaliarAluno(7.5);  // "Muito bom"  (limite <9)
avaliarAluno(8.9);  // "Muito bom"
avaliarAluno(9);    // "Excelente"

mostrarStatus(69);   // "reprovado"
mostrarStatus(70);   // "aprovado" (limite exato)
mostrarStatus(100);  // "aprovado"

console.log(comprasDisponivel(true, 501));   // true
console.log(comprasDisponivel(true, 500));   // false (não é "maior que 500", é igual)
console.log(comprasDisponivel(false, 9999)); // false (conta inativa)

avisarMotorista("aberta");       // "Pode Prosseguir"
avisarMotorista("FECHADA");      // "Cancela Fechada. Espere." (testa o toLowerCase)
avisarMotorista("Manutenção");   // "Cancela em Manutenção. Mude para a cancela ao lado."
avisarMotorista("quebrada");     // cai no default

descontoPDV(100, "alimentos");     // 95.00
descontoPDV(100, "ELETRÔNICOS");   // 90.00 (testa maiúscula + acento)
descontoPDV(100, "roupas");        // 80.00
descontoPDV(100, "livros");        // 50.00
descontoPDV(100, "brinquedos");    // cai no default, sem desconto