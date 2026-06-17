const campoSenha = document.getElementById("senha");
const campoConfirmarSenha = document.getElementById("confirmar-senha");
const campoEmail = document.getElementById("email");

const mensagem = document.createElement('label'); //criar campo de mensagem no js
const mensagemConfirmarSenha = document.createElement('label');
const mensagemEmail = document.createElement('label');

campoEmail.addEventListener("input", function () {
    validaEmail();
});

if (document.title == 'Cadastro') {
    setEventosCadastro();
} else if(document.title == 'Contato'){
    setEventosContato();
}

function setEventosContato(){

}

function setEventosCadastro() {

    campoSenha.addEventListener("input", function () {
        limpaMensagens();
        validaSenha();
    });
    campoConfirmarSenha.addEventListener("input", function () {
        limpaMensagens();
        validaConfirmarSenha();
    });





}

function validaSenha() {
    campoSenha.insertAdjacentElement('afterend', mensagem);
    if (campoSenha.value.length < 8) {
        campoSenha.style.outline = "none";
        msgSenha("2px solid red", "Sua senha deve ter pelo menos 8 caracteres.", 'red');
    } else {
        msgSenha("1px solid black", "Senha válida!", "green");
    }
}

function validaConfirmarSenha() {
    let senha = campoSenha.value;
    let confirmaSenha = campoConfirmarSenha.value;
    campoConfirmarSenha.insertAdjacentElement('afterend', mensagemConfirmarSenha);

    if (campoSenha.value.length < 8) {
        msgConfirmaSenha("Digite uma senha válida, no campo anterior!", "red");
        campoSenha.style.border = "2px solid red";
    } else {
        if (senha != confirmaSenha) {
            msgConfirmaSenha("As senhas digitadas são diferentes..", "red");
        } else {
            msgConfirmaSenha("Confirmação correta!", "green");
        }
    }
}

function msgConfirmaSenha(conteudo, cor) {
    mensagemConfirmarSenha.textContent = conteudo;
    mensagemConfirmarSenha.style.color = cor;
};
function msgSenha(bordaCampo, conteudo, cor) {
    campoSenha.style.border = bordaCampo;
    mensagem.textContent = conteudo;
    mensagem.style.color = cor;
}

function validaEmail() {
    campoEmail.insertAdjacentElement('afterend', mensagemEmail);
    const valorEmail = campoEmail.value;
    const email = valorEmail.split('@');
    const parte1email = email[0];
    const part2email = email[1];

    if (valorEmail.includes('@')) {
        if (parte1email.length == 0 || part2email.length == 0)
            mensagemEmail.textContent = 'Digite um email válido!';
        mensagemEmail.style.color = 'red';
        campoEmail.style.border = '1px solid red';
    }
    else {
        mensagemEmail.textContent = 'Inclua um @ no seu email';
        mensagemEmail.style.color = 'red';
        campoEmail.style.border = '1px solid red';
    }
}

function limpaMensagens() {
    campoSenha.style.border = "1px solid black";
    campoEmail.style.border = "1px solid black";
    mensagem.textContent = "";
    mensagemConfirmarSenha.textContent = "";
}




