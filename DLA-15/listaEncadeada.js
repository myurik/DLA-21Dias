// Criando o nó da lista encadeada
function criarNo(elemento) {
    return {
        data: elemento,
        next: null
    };
}
// Criando a estrutura básica da lista
let listaEncadeada = {
    head: null,
    insertFirst: function(elemento) {
        const novoNo = criarNo(elemento);
        if (!this.head) {
            this.head = novoNo;
        } else {
            novoNo.next = this.head;
            this.head = novoNo;
        }
    },
    traversal: function() {
        let atual = this.head;
        let resultado = [];
        while(atual !== null){
            resultado.push(atual.data);
            atual = atual.next;
        }
        console.log(resultado.join(' -> '));
    },
    insertLast: function(elemento){
        const novoNo = criarNo(elemento);
        if(!this.head){
            this.head = novoNo;
            return;
        }
        let atual = this.head;
        while (atual.next !== null) {
            atual = atual.next;
        }
        atual.next = novoNo;
    },
    insertAt: function(elemento, posicao) {
   
        const novoNo = criarNo(elemento);
        if (posicao === 0){
            novoNo.next = this.head;
            this.head = novoNo;
            return elemento;
        }
        let atual = this.head;
        let anterior = null;
        let contador = 0;
        while (contador < posicao && atual) {
            anterior = atual;
            atual = atual.next;
            contador++;
        if (contador === posicao) {
            anterior.next = novoNo;
            novoNo.next = atual;
            return elemento;
        } else {
            console. log("Posição inválida.");
            return null;
            }
        }
    },
    deleteAt: function(posicao) {
        
        if (!this.head) {
            console. log("A lista está vazia.");
            return null;
        }
        if (posicao === 0) {
            const elementoRemovido = this.head.data;
            this.head = this.head.next;
            return elementoRemovido;
        }
        let atual = this.head;
        let anterior = null;
        let contador = 0;
        while (contador < posicao && atual) {
            anterior = atual;
            atual = atual.next;
            contador++;
        }
        if (atual) {
            anterior. next = atual. next;
            return atual. data;
        } else {
            console. log( "Posição inválida.");
            return null;
        }
    },

    searchAt: function(posicao) {
        let atual = this.head;
        let contador = 0;
        while (contador < posicao && atual) {
            atual = atual. next;
            contador++;
        }
        if (atual) {
            return atual. data;
        } else {
            console. log( "Posição inválida.");
            return null;
        }
},

    indexOf: function(elemento) {
        let atual = this.head;
        let contador = 0;
        while (atual) {
            if (atual. data === elemento) {
                return contador;
            }
            atual = atual.next;
            contador++;
        }
        console.log( "Elemento não encontrado. ");
        return - 1;
    }
}


console. log(listaEncadeada. insertFirst( 'Locomotiva' ));

