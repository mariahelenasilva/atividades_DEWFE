/*
 * @document: script.js
 * @author: Maria Helena
 * @data: 27/05/2026
 * @description: Atividade Formulário com input, botão, inserção em lista e mensagem. 
 * 
*/

const listaTarefas = document.getElementById('lista_tarefas');
const mensagemElement = document.getElementById('mensagem');

function adicionarTarefa() {
    console.log('Adicionar Tarefa');
    const inputElement = document.getElementById('nova_tarefa');
    //receber o valor digitado no input
    let tarefa = inputElement.value; //string 
    let mensagem, cor;
    /*
        * exibir a tarefa na tela
        * mensagemElement.innerHTML = tarefa;
        * mensagemElement.innerText = tarefa;
    */

    if (tarefaValida(tarefa)) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        mensagem = 'Adicionado com sucesso!';
        cor = 'green';

        //contador++;
        //mensagemSaudacao.textContent = 'Adicione Tarefas! (Quantidade: ' + listaTarefas.children.length + ')';

        contaTarefas(listaTarefas);
    } else {
        mensagem = 'Tarefa inválida, digite um conteúdo!';
        cor = 'red';
    }

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;

    inputElement.value = '';
    inputElement.focus();

}

function tarefaValida(tarefa) {
    return tarefa.trim().length >= 5;
}

function contaTarefas(listaTarefas) {
    const mensagemSaudacao = document.getElementById('mensagem_saudacao');
    let qtdeTarefas = listaTarefas.children.length;

    //listaTarefas.children.length
    if (qtdeTarefas === 0) {
        mensagemSaudacao.textContent = 'Adicione Tarefas!';
    } else {
        
        mensagemSaudacao.textContent = 'Adicione Tarefas! (Quantidade: ' + qtdeTarefas + ')';
    }
}

function limparTarefas() {
    console.log('Limpar Tarefas');
    let mensagem, cor;
    //funcao para limpar a lista de tarefas
    if (limpa()) {
        console.log('if Limpar Tarefas');
        listaTarefas.textContent = '';
        mensagem = 'Tarefas limpas com sucesso!';
        cor = 'green';
        contaTarefas(listaTarefas);
    } else {
        console.log('else Limpar Tarefas');
        mensagem = 'Não há tarefas para limpar!';
        cor = 'red';
    }

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;
}

function limpa() {
    console.log('Limpa');
    return listaTarefas.children.length > 0;
}
