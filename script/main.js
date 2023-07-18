const form = document.getElementById('novaMensagem');
const paginaMensagens = document.getElementById('lista_mensagem');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const mensagem = evento.target.elements['mensagem'];

    enviarMensagem(nome.value, mensagem.value);

    nome.value = "";
    mensagem.value = "";
});

function enviarMensagem(nome, mensagem) {
   const novaMensagemHospede = document.createElement('li');
   novaMensagemHospede.classList.add('lista_item');

   const nomeHospede = document.createElement('span');
   nomeHospede.classList.add('mensagem_nome');
   nomeHospede.innerHTML = nome;
   const mensagemHospede = document.createElement('p');
   mensagemHospede.classList.add('mensagem_texto');
   mensagemHospede.innerHTML = mensagem;

   console.log(mensagemHospede);

   novaMensagemHospede.appendChild(nomeHospede);
   novaMensagemHospede.appendChild(mensagemHospede)

   paginaMensagens.appendChild(novaMensagemHospede);
}

