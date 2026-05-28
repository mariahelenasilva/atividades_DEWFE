/*
 * @document: script.js
 * @author: Maria Helena
 * @data: 27/05/2026
 * @description: Atividade Formulário com input, botão, inserção em lista e mensagem. 
 * 
*/


    

function adicionarTarefa() {
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById('mensagem');
    const listaTarefas = document.getElementById('lista_tarefas');
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
    //funcao para contar a quantidade de tarefas conforme sao adicionadas na lista e a exibir no texto mensagem_saudacao
    const mensagemSaudacao = document.getElementById('mensagem_saudacao');
    let qtdeTarefas = listaTarefas.children.length;
    mensagemSaudacao.textContent = 'Adicione Tarefas! (Quantidade: ' + qtdeTarefas + ')';
}