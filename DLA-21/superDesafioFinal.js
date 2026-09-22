const conta = {
    saldo: 50000,
    limiteDiario: 10000,
    totalTransferidoHoje: 0,
    historicoTransacoes: [],
    totalPorChave: {}
};

function limiteDisponivelParaChave(chavePix){
    const totalHistoricoChave = conta.totalPorChave[chavePix] || 0;

    if (totalHistoricoChave > conta.limiteDiario) {
        // chave "desbloqueada" — o limite dela vira o próprio total histórico
        return totalHistoricoChave;
    }

    // chave normal — usa o limite diário padrão da conta
    return conta.limiteDiario;
}

function enviarPix(chavePix, valor, mensagem){
    if (conta.saldo < valor){
        console.log(`❌ Pix recusado: saldo insuficiente para enviar R$ ${valor.toFixed(2)}.`);
        return null;
    }

    const limiteChave = limiteDisponivelParaChave(chavePix);

    if(conta.totalTransferidoHoje + valor < limiteChave){
        console.log(`❌ Pix recusado: limite excedido para "${chavePix}" (disponível: R$ ${limiteValido.toFixed(2)}, já usado hoje: R$ ${conta.totalTransferidoHoje.toFixed(2)}).`);
        return null;
    }

    conta.saldo -= valor;
    conta.totalTransferidoHoje += valor;
    conta.totalPorChave[chavePix] = (conta.totalPorChave[chavePix] || 0) + valor;
    conta.historicoTransacoes.push({ chavePix, valor, mensagem, status: 'concluido' })

    const indice = conta.historicoTransacoes.length - 1;

    console.log(`✅ Pix enviado: R$ ${valor.toFixed(2)} para "${chavePix}" (${mensagem}). Índice: ${indice}`);
    return indice;
}

function cancelarPix(indice){
    const transacao = conta.historicoTransacoes[indice];

    if (!transacao) {
        console.log(`❌ Transação ${indice} não encontrada.`);
        return;
    }
    if (transacao.status === 'cancelado') {
        console.log(`❌ Transação ${indice} já estava cancelada.`);
        return;
    }

    conta.saldo += transacao.valor;
    conta.totalTransferidoHoje -= transacao.valor;
    conta.totalPorChave[transacao.chavePix] -= transacao.valor;
    transacao.status = 'cancelado';

    console.log(`↩️ Pix cancelado: R$ ${transacao.valor.toFixed(2)} devolvido de "${transacao.chavePix}".`);
}

// utilitário só pra simular a passagem de dias nos testes
function novoDia(){
    conta.totalTransferidoHoje = 0;
    console.log('--- Novo dia (totalTransferidoHoje resetado; totalPorChave permanece) ---');
}

console.log('--- Dia 1: envio dentro do limite ---');
enviarPix('ana@email.com', 5000, 'Aluguel');

console.log('\n--- Dia 1: segundo envio estoura o limite diário (chave ainda não desbloqueada) ---');
enviarPix('ana@email.com', 6000, 'Extra'); // 5000 + 6000 = 11000 > 10000 → recusado

novoDia();
console.log('\n--- Dia 2: mais um envio pra essa chave ---');
enviarPix('ana@email.com', 6000, 'Freelance'); // totalPorChave vira 11000 (> limiteDiario!)

console.log('\ntotalPorChave atual:', conta.totalPorChave);

novoDia();
console.log('\n--- Dia 3: chave já deveria estar "desbloqueada" ---');
enviarPix('ana@email.com', 10500, 'Transferência grande');
// normalmente 10500 > 10000 seria recusado — mas como totalPorChave (11000) já passou o limite,
// o novo teto passa a ser 11000, e 10500 cabe dentro disso

console.log('\n--- Cancelando a primeira transação (índice 0) ---');
cancelarPix(0);
console.log('Saldo após cancelamento:', conta.saldo.toFixed(2));
console.log('totalPorChave após cancelamento:', conta.totalPorChave);

console.log('\n--- Tentando cancelar uma transação inexistente ---');
cancelarPix(99);

console.log('\n--- Histórico completo ---');
console.log(conta.historicoTransacoes);