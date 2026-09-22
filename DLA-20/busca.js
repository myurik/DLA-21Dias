const numeros = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
// já ordenado — pré-requisito da busca binária

const nomes = ['Ana', 'Bruno', 'Carla', 'Daniela', 'Eduardo', 'Fábio'];
// também precisa estar ordenado (alfabeticamente, nesse caso)

function buscaBinaria(array, alvo, inicio = 0, fim = array.length - 1){
    if (inicio > fim) {
        return -1; // caso base: não encontrou
    }

    const meio = Math.floor((inicio + fim) / 2);
    console.log(`Buscando entre índices ${inicio} e ${fim}, meio = ${meio} (valor ${array[meio]})`);

    if (array[meio] === alvo) {
        return meio; // caso base: encontrou
    }

    if (alvo < array[meio]) {
        return buscaBinaria(array, alvo, inicio, meio - 1);
    } else {
        return buscaBinaria(array, alvo, meio + 1, fim);
    }
}

console.log(buscaBinaria(numeros, 23));  // deve achar a posição 5
console.log(buscaBinaria(numeros, 100)); // deve retornar -1

console.log(buscaBinaria(nomes, 'Daniela')); // testa com strings também