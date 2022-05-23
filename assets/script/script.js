let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

//nome.style.width = '100%'

function validaNome() {

    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3)  {
        txt.innerHTML='Nome Inválido'
        txt.style.color = 'red'
    }
    else {
        txt.innerHTML="Nome válido"
        txt.style.color = 'green'
    }
}