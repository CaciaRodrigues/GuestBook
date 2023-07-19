const form = document.getElementById('novaMensagem');
const paginaMensagens = document.getElementById('lista_mensagem');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const mensagem = evento.target.elements['mensagem'];

    const itensMensagem = {
        nome: nome.value,
        mensagem: mensagem.value,
    }

    enviarMensagem(itensMensagem);

    nome.value = "";
    mensagem.value = "";
});

function enviarMensagem(item) {
   const novaMensagemHospede = document.createElement('li');
   novaMensagemHospede.classList.add('lista_item');

   const nomeHospede = document.createElement('span');
   nomeHospede.classList.add('mensagem_nome');
   nomeHospede.innerHTML = item.nome;
   const mensagemHospede = document.createElement('p');
   mensagemHospede.classList.add('mensagem_texto');
   mensagemHospede.innerHTML = item.mensagem;

   novaMensagemHospede.appendChild(nomeHospede);
   novaMensagemHospede.appendChild(mensagemHospede)

   paginaMensagens.appendChild(novaMensagemHospede);
}