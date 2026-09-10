let playlist = [];

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

function mostrarPlaylist(){
    playlist.forEach((musica) => {
        console.log(`Música: ${musica.nome} - Artista: ${musica.artista}`);
    });
}   

function moverMusica(nome, novaPosicao){
    // dica: é o MESMO padrão do aumentarPrioridade/diminuirPrioridade do Dia 13:
    // 1. ache o índice atual (findIndex)
    // 2. splice(indiceAtual, 1) pra tirar do lugar
    // 3. splice(novaPosicao, 0, musica) pra reinserir na posição nova
    const posicaoAtual = playlist.findIndex(item => item.nome === nome);
    if (posicaoAtual === -1) {
        console.log(`"${nome}" não encontrada na playlist.`);
        return;
    }
    const [musica] = playlist.splice(posicaoAtual, 1);
    playlist.splice(novaPosicao, 0, musica); 
    console.log(`"${nome}" movida para a posição ${novaPosicao}.`);
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

function tocarPlaylistInteira(){
    playlist.forEach((musica) => {
        tocarMusica(musica.nome);
    });
}


adicionarMusica('Como Nossos Pais', 'Elis Regina', 245);
adicionarMusica('Águas de Março', 'Elis Regina', 210);
adicionarMusica('Aquarela do Brasil', 'Gal Costa', 200);

mostrarPlaylist();
// Aquarela do Brasil -> Águas de Março -> Como Nossos Pais (ordem invertida, por causa do unshift)

tocarMusica('Águas de Março');
// Tocando Música: Águas de Março - Reproduções: 1

tocarMusica('Música Fantasma');
// "Música Fantasma" não encontrada na playlist.

tocarPlaylistInteira();
// toca as 3, cada uma incrementando reproducoes

removerMusica('Aquarela do Brasil');
mostrarPlaylist(); // só 2 restantes

removerMusica('Aquarela do Brasil'); // já foi removida
// "Aquarela do Brasil" não encontrada na playlist.


adicionarMusica('Aquarela do Brasil', 'Gal Costa', 200);

mostrarPlaylist();
// 0: Aquarela do Brasil
// 1: Águas de Março
// 2: Como Nossos Pais

moverMusica('Como Nossos Pais', 0); // manda pro início
mostrarPlaylist();
// 0: Como Nossos Pais
// 1: Aquarela do Brasil
// 2: Águas de Março

moverMusica('Música Fantasma', 1); // não existe
// "Música Fantasma" não encontrada na playlist.