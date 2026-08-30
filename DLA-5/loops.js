// Desafio 1 - Aplicação Financ.
let valorInvestido = 1000;
let rendimentoAno = 0.12;
let retornoAnual;
for(let ano = 1; ano <=10; ano++){
    valorInvestido = valorInvestido + (valorInvestido*rendimentoAno);
    retornoAnual = valorInvestido.toFixed(2);
    console.log(`Ano ${ano}: R$ ${retornoAnual}`);
}

// Desafio 2 - Contagem Regressiva
let segundos = 10;
while(segundos >= 0){
    if(segundos<=3){
        console.log(`Atenção! ${segundos}`);
    }
    else{
        console.log(segundos);
    }
    segundos--;
    
}
console.log("Lançamento do Foguete!");

// Desafio 3 - Cálculo Juros
let investimentoInicial = 1000;
let contagemAnos = 0;
while(investimentoInicial < 2000){
    investimentoInicial = investimentoInicial * 1.05
    contagemAnos++;
}
console.log(`Levou ${contagemAnos} anos para o investimento inicial dobrar!`);

// Desafio 4 - Compra Parcelada
function parcelarCompra(valorProduto, numParcelas){
    let valorParcela = Number((valorProduto / numParcelas).toFixed(2));
    let valorRestante = valorProduto;

    for(let p = 1; p<=numParcelas; p++){ 
        console.log(`Parcela ${p}x: R$ ${valorParcela}`);
        valorProduto = (valorProduto - valorParcela).toFixed(2);
        valorRestante = valorProduto;
        console.log(`Resta pagar: R$ ${valorRestante}`);
    }
}   

parcelarCompra(1200,12);