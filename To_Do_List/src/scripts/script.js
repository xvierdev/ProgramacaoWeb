const todo_list = [];
const panel_list = document.querySelector('#task_viewer');
const btn_create = document.querySelector('#btn_create');
const btn_cancel = document.querySelector('#btn_cancel');
const form = document.querySelector('form');
let last_id = 0;

/**  Definição da classe para o elemento Task*/
class Task {
    constructor(id, name, category, level, date_limit) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.level = level;
        this.date_limit = date_limit;
    }
}

/** Limpeza do formulário de criação da tarefa */
btn_cancel.addEventListener('click', () => {
    form.reset();
});

/** Evento criado de tarefas */
btn_create.addEventListener('click', () => {
    const nameEl = document.querySelector('#name');
    const categoryEl = document.querySelector('#category');
    const levelEl = document.querySelector('#level');
    const dateLimitEl = document.querySelector('#limit_date');

    if (!nameEl.value) {
        alert("Digite o nome da tarefa!");
        return;
    }

    last_id++;

    const newTask = new Task(
        last_id,
        nameEl.value,
        categoryEl.value,
        levelEl.value,
        dateLimitEl.value
    );

    todo_list.push(newTask);
    render();

    form.reset();
});

/** Faz o 'desenho' das tarefas no painel */
function render() {
    if (!panel_list) return; // Segurança caso o container não exista

    panel_list.innerHTML = todo_list.map(task => `
        <div class="task">
            <strong>${task.id}</strong> - 
            <strong>${task.name}</strong> | ${task.category} | ${task.level}
            <button class="btn-delete" data-id="${task.id}">remover</button>
        </div>
    `).join('');
}


/** Adicionei um evento no painel para atribuir a ação ao botão no momento do clique */
panel_list.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const idParaRemover = Number(e.target.getAttribute('data-id'));
        
        const index = todo_list.findIndex(t => t.id === idParaRemover);
        if (index !== -1) {
            todo_list.splice(index, 1);
            render(); // Só re-renderiza após remover
        }
    }
});