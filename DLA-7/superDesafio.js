let saldoContaVanessa = 300;
let saldoContaGabriel = 400;
let limiteCompartilhado = 0; // começa em 0, só é liberado quando o total bate 1000

function calcularSaldoTotal(){
    return saldoContaVanessa + saldoContaGabriel;
}

function calcularLimiteDisponivel(){
    const saldoAtual = calcularSaldoTotal();
    if(saldoAtual >= 1000){
        limiteCompartilhado = saldoAtual * 0.10;
        return limiteCompartilhado;
    }
    return 0;
}

function exibirAlerta(){
    let alerta = '';
    if(saldoContaGabriel === 0 || saldoContaVanessa ===0){
        alerta = 'Uma das contas está sem saldo.'
    }
    else if (saldoContaGabriel < 0 || saldoContaVanessa < 0){
        if (saldoContaGabriel < 0){
            alerta += 'A conta de Gabriel está utilizando o limite. '
        }
        if (saldoContaVanessa < 0){
            alerta += 'A conta de Vanessa está utilizando o limite. '
         } 
    }
    return alerta;
}

function realizarDeposito(conta, valor){
    let nomeConta = conta.toLowerCase();
    let deposito = Number(valor.toFixed(2));

    if(nomeConta === 'gabriel'){
        if (saldoContaGabriel < 0) {
            deposito = deposito * 0.85; // taxa de 15% por estar usando o limite
        }
        saldoContaGabriel += deposito;
        return `Saldo Atual Gabriel: R$ ${saldoContaGabriel.toFixed(2)}`;
    }
    else if(nomeConta === 'vanessa'){
        if (saldoContaVanessa < 0) {
            deposito = deposito * 0.85; // taxa de 15% por estar usando o limite
        }
        saldoContaVanessa += deposito;
        return `Saldo Atual Vanessa: R$ ${saldoContaVanessa.toFixed(2)}`;
    }
    else{
        return 'Conta Inválida.'
    }
}

function efetuarDebito(conta, valor){
    let nomeConta = conta.toLowerCase();
    let debito = Number(valor.toFixed(2));
    if(nomeConta === 'gabriel'){
        saldoContaGabriel -= debito;
        return `Saldo Atual Gabriel: R$ ${saldoContaGabriel}`;
    }
    else if(nomeConta === 'vanessa'){
        saldoContaVanessa -= debito;
        return `Saldo Atual Vanessa: R$ ${saldoContaVanessa}`;
    }
    else{
        return 'Conta Inválida.'
    }
}

function conversaoDolar(valorEmReais){
    let valorDolar = 5.18
    let saldoEmDolares = (valorEmReais * valorDolar).toFixed(2);
    return `O saldo em dólares é: US$ ${saldoEmDolares};`
}

function transferir(contaOrigem, contaDestino, valor){
    let origem = contaOrigem.toLowerCase();
    let destino = contaDestino.toLowerCase();
    let saldoOrigem = origem === 'gabriel' ? saldoContaGabriel : saldoContaVanessa;

    if(saldoOrigem >= valor || limiteCompartilhado >= valor){
        if(origem === 'gabriel') saldoContaGabriel -= valor;
        else saldoContaVanessa -= valor;
        if (destino === 'gabriel') saldoContaGabriel += valor;
        else saldoContaVanessa += valor;

        return `Transferência de R$ ${valor.toFixed(2)} realizada.`;
    }
    return 'Saldo e limite insuficientes para essa transferência.';
}

console.log('--- Estado inicial ---');
console.log(`Saldo total: R$ ${calcularSaldoTotal().toFixed(2)}`);
console.log(`Limite disponível: R$ ${calcularLimiteDisponivel().toFixed(2)}`); // 0, pois total (700) < 1000
console.log(exibirAlerta() || 'Nenhum alerta.');

console.log('\n--- Depósito que faz o total ultrapassar 1000 ---');
console.log(realizarDeposito('gabriel', 400)); // Gabriel: 400 -> 800, total vira 1100
console.log(`Saldo total: R$ ${calcularSaldoTotal().toFixed(2)}`);
console.log(`Limite disponível: R$ ${calcularLimiteDisponivel().toFixed(2)}`); // agora libera 10% de 1100

console.log('\n--- Débito deixando a conta negativa ---');
console.log(efetuarDebito('gabriel', 900)); // 800 - 900 = -100
console.log(exibirAlerta()); // deve avisar que Gabriel está usando o limite

console.log('\n--- Depósito usando o limite (deve aplicar taxa de 15%) ---');
console.log(realizarDeposito('gabriel', 100)); // saldo estava negativo -> só 85 entra
console.log(exibirAlerta() || 'Nenhum alerta.');

console.log('\n--- Conta com saldo zerado ---');
console.log(efetuarDebito('vanessa', 300)); // Vanessa: 300 -> 0
console.log(exibirAlerta()); // deve avisar que Vanessa está sem saldo

console.log('\n--- Transferência válida ---');
console.log(transferir('gabriel', 'vanessa', 50));
console.log(`Saldo total: R$ ${calcularSaldoTotal().toFixed(2)}`);

console.log('\n--- Transferência inválida (sem saldo/limite suficiente) ---');
console.log(transferir('vanessa', 'gabriel', 99999));

console.log('\n--- Conversão para dólar ---');
console.log(conversaoDolar(calcularSaldoTotal()));

console.log('\n--- Conta inválida ---');
console.log(realizarDeposito('carlos', 100));