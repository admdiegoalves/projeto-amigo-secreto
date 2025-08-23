//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Passo 1: Criar um lugar para armazenar os nomes.

let amigos = [];

// Passo 2: Criar a função que adiciona um novo amigo.

function adicionarAmigo() {
    let campoAmigo= document.getElementById ('amigo');
    let nomeAmigo = campoAmigo.value;
    if (nomeAmigo == '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
   amigos.push(nomeAmigo);
    let lista = document.getElementById ('listaAmigos');
    lista.textContent = amigos.join(', ');
    campoAmigo.value = '';
    campoAmigo.focus();
}

// Passo 3: Criar a função que realiza o sorteio.

function sortearAmigo() {

    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }
    let indiceSorteio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById ('resultado');
    let amigoSecreto = amigos[indiceSorteio];
    resultado.textContent = 'O amigo secreto é ' + amigoSecreto;
}