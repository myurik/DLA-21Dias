let playlist = [];

//BubbleSort
function ordenarPorTitulo(array){
    let n = array.length;
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(array[j].nome > array[j+1].nome){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

//SelectionSort
function ordenarPorReproducoes(array){
    let n = array.length;
    for(let i = 0; i < n - 1; i++){
        let indiceMaior = i;
        for(let j = i + 1; j < n; j++){
            if(array[j].reproducoes > array[indiceMaior].reproducoes){
                indiceMaior = j;
            }   
        }
        let temp = array[i];
        array[i] = array[indiceMaior];
        array[indiceMaior] = temp;
    }
    return array;
}


function criarMusica(nome, artista, duracaoSegundos){
    return{
        nome, artista, reproducoes: 0, duracaoSegundos
    };
}

function adicionarMusica(nome, artista, duracaoSegundos){
    const musica = criarMusica(nome, artista, duracaoSegundos);
    playlist.unshift(musica); // sempre no inicio
    console.log(`"${nome}" adicionada no início da playlist.`);
}

function removerMusica(nome){
    let posicao = playlist.findIndex(item => item.nome === nome);
    if (posicao !== -1){
        playlist.splice(posicao,1);
        console.log(`"${nome}" removida da playlist.`)
    }
    else{
        console.log(`"${nome}" não foi encontrada na playlist.`)
    }
    return playlist;
}

function tocarMusica(nome){
    let musica = playlist.find(musica => musica.nome === nome);
    if(musica){
        musica.reproducoes++;
        console.log(`Tocando Música: ${musica.nome} - Reproduções: ${musica.reproducoes}`);
    }
    else {
        console.log(`"${nome}" não encontrada na playlist.`);
    }    
}

function mostrarPlaylist(){
    playlist.forEach((musica) => {
        console.log(`Música: ${musica.nome} - Artista: ${musica.artista}`);
    });
}

adicionarMusica('Zebra', 'Artista A', 200);
adicionarMusica('Abelha', 'Artista B', 180);
tocarMusica('Zebra');
tocarMusica('Zebra');
tocarMusica('Abelha');

console.log(ordenarPorTitulo([...playlist]));
// Abelha antes de Zebra (ordem alfabética)

console.log(ordenarPorReproducoes([...playlist]));
// Zebra primeiro (2 reproduções) antes de Abelha (1 reprodução)