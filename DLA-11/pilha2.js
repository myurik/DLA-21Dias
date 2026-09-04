let pilhaVoltar = [];
let pilhaAvancar = [];
let paginaAtual = 'inicio.com'; // página onde "o navegador" começa

function navegarPara(novoEndereco){
    pilhaVoltar.push(paginaAtual);
    paginaAtual = novoEndereco;
    pilhaAvancar = [];
    console.log(`Navegou para: ${paginaAtual}`);
}

function voltar(){
    if(pilhaVoltar.length > 0){
        pilhaAvancar.push(paginaAtual);
        paginaAtual = pilhaVoltar.pop();
    }
    else {
        console.log('Não há páginas anteriores para voltar.');
    }
    
}

function avancar(){
    if(pilhaAvancar.length > 0){
        pilhaVoltar.push(paginaAtual);
        paginaAtual = pilhaAvancar.pop();
    }
    else{
        console.log('Não há páginas seguintes para avançar.');
    }
}


navegarPara('google.com');
navegarPara('youtube.com');
navegarPara('github.com');

console.log('Atual:', paginaAtual); // github.com

voltar();
console.log('Atual:', paginaAtual); // esperado: youtube.com

voltar();
console.log('Atual:', paginaAtual); // esperado: google.com

avancar();
console.log('Atual:', paginaAtual); // esperado: youtube.com