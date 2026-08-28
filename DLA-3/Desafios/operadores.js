// Desafio 2
function ParOuImpar(numero){
    if(numero % 2 === 0){
        console.log(`O ${numero} é par.`);
    }
    else{
        console.log(`O ${numero} é ímpar.`);
    }
}
ParOuImpar(5);
ParOuImpar(2);
ParOuImpar(10);
ParOuImpar(15);

// Desafio 3

const IMC = (altura, peso) => {
    let calculoIMC = peso / (altura**2);
    if(calculoIMC <= 18.5){
        console.log("Esta abaixo do peso.");
    } else if(calculoIMC >= 18.5 && calculoIMC < 24.9){
        console.log("Peso Ideal.");
    }
    else if(calculoIMC >= 24.9 && calculoIMC < 29.9){
        console.log("Sobrepeso.");
    }
    else{
        console.log("Obesidade.");
    }
};

IMC(1.71, 85);

// Desafio 4
const Viagem = (distanciaTotal, precoLitro) => {
    let litrosNecessarios = distanciaTotal / 12;
    let custoViagem = litrosNecessarios * precoLitro;

    console.log(`Serão necessários ${litrosNecessarios}L para realizar a viagem`);
    console.log(`O custo total de gasolina será R$: ${custoViagem}`);
}

Viagem(402, 6.85);
