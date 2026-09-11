const produtos = [
    ["Arroz", 25.99],
    ["Feijão", 12.50],
    ["Leite", 6.49],
    ["Óleo", 8.99],
    ["Pão", 7.00],
    ["Café", 15.30],
    ["Açúcar", 4.89],
    ["Sal", 3.25],
    ["Macarrão", 5.79],
    ["Manteiga", 9.99]
];

function ordenarPorPreco(array){
    let n = array.length;
    for(let i = 0; i < n - 1; i++){
        let indiceMenor = i;
        for(let j = i + 1; j < n; j++){
            if(array[j][1] < array[indiceMenor][1]){
                indiceMenor = j;
            }
        }
        let temp = array[i];
        array[i] = array[indiceMenor];
        array[indiceMenor] = temp;
    }
    return array;
}

console.log(ordenarPorPreco(produtos));
