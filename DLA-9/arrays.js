const carrosMaisVendidos =[
    'Fiat Strada', 
    'Fiat Argo',
    'HB20',
    'Onix',
    'Gol',
    'Kwid',
    'Mobi',
    'Renegade',
    'T-Cross',
    'Corolla'
];

function indexOfManual(array, nomeCarro){
    const nomeBuscado = nomeCarro.toLowerCase();
    for(let i = 0; i<array.length; i++){
        if(nomeBuscado === array[i].toLowerCase()){
            return i+1;
        }
    }
    return -1;
}

function includesManual(array, procurarItem){
    const itemProcurado = procurarItem.toLowerCase();
    for(const item of array){
        if(itemProcurado === item.toLowerCase()) return true;
    }
    return false;
}

function lastIndexOfManual(array, procurarItem){
    const itemProcurado = procurarItem.toLowerCase();
    let tamanho = array.length
    for(let i = tamanho - 1; i>=0; i--){
        if(itemProcurado === array[i].toLowerCase()){
            return i;
        }
    }
    return -1;
}
const listaComRepetido = ['Gol', 'HB20', 'Onix', 'Gol', 'Kwid'];

const top5 = carrosMaisVendidos.slice(0, 5);

function sliceManual(array, inicio = 0, fim = array.length){
    const resultado = [];
    for(let i = inicio; i < fim; i++){
        resultado.push(array[i]);
    }
    return resultado;
}

console.log(indexOfManual(carrosMaisVendidos, 'hb20'));

console.log(includesManual(carrosMaisVendidos, 'HB20'));   // true
console.log(includesManual(carrosMaisVendidos, 'hb20'));   // true (case-insensitive)
console.log(includesManual(carrosMaisVendidos, 'Uno'));    // false

console.log(lastIndexOfManual(listaComRepetido, 'Gol'));  // 3 (a última ocorrência, não a 0)
console.log(lastIndexOfManual(listaComRepetido, 'Onix')); // 2
console.log(lastIndexOfManual(listaComRepetido, 'Uno'));  // -1




console.log(sliceManual(carrosMaisVendidos, 0, 5));
// Top 5: ['Fiat Strada', 'Fiat Argo', 'HB20', 'Onix', 'Gol']

console.log(sliceManual(carrosMaisVendidos, 5));
// do índice 5 até o fim: ['Kwid', 'Mobi', 'Renegade', 'T-Cross', 'Corolla']

console.log(sliceManual(carrosMaisVendidos, 2, 4));