// Obtém referências para elementos DOM
const inputTarefa = document.getElementById("tarefa");
const btnAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// Adiciona evento de clique ao botão "Adicionar"
btnAdicionar.addEventListener("click", adicionarTarefa);

// Adiciona evento de pressionar Enter no campo de entrada
inputTarefa.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const tarefaTexto = inputTarefa.value.trim();
    if (tarefaTexto !== "") {
        const li = document.createElement("li");
        li.textContent = tarefaTexto;
        li.addEventListener("click", completarTarefa);
        listaTarefas.appendChild(li);
        inputTarefa.value = "";
    }
}

// Função para marcar uma tarefa como concluída ou não concluída
function completarTarefa(event) {
    const li = event.target;
    li.classList.toggle("completed");
}

