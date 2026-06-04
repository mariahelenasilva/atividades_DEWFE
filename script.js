const campoSenha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const botaoViewSenha = document.getElementById("viewSenha");
const checkSouEstudante = document.getElementById("souEstudante");
const caixaSouEstudante = document.getElementById("caixaSouEstudante");


setEventos();

function setEventos() {
    campoSenha.addEventListener("input", validaSenha);

    checkSouEstudante.addEventListener("change", function () {
        viewSouEstudante();
    });

    botaoViewSenha.addEventListener("click", function () {
        viewSenha();
    });
}

function viewSenha() {
    if (campoSenha.type === "password") {
        campoSenha.type = "text";
    } else {
        campoSenha.type = "password";
    }
}
function viewSouEstudante() {
    let check = checkSouEstudante.checked;
    
    if (check === true) {
        caixaSouEstudante.style.display = "block";
    } else {
        caixaSouEstudante.style.display = "none";
    }
}

function validaSenha() {
    if (campoSenha.value.length < 8) {
        mensagem.style.color = "red";
        campoSenha.style.outline = "none";
        campoSenha.style.border = "2px solid red";
        mensagem.textContent = "Senha deve ter pelo menos 8 caracteres.";
    } else {
        mensagem.style.color = "green";
        campoSenha.style.border = "1px solid black";
        mensagem.textContent = "Senha válida!";
    }
}
