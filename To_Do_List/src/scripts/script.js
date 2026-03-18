const todo_list = [];
const panel_list = document.querySelector('#task_viewer');
const btn_create = document.querySelector('#btn_create');

class Task {
    // Ajustei os parâmetros para combinarem com as atribuições
    constructor(name = '', category = '', level = '', date_limit = '') {
        this.name = name;
        this.category = category;
        this.level = level;
        this.date_limit = date_limit;
    }
}

btn_create.addEventListener('click', (e) => {
    // Capturando os elementos
    const nameEl = document.querySelector('#name');
    const categoryEl = document.querySelector('#category');
    const levelEl = document.querySelector('#level');
    const dateLimitEl = document.querySelector('#limit_date');

    // Criando a instância com os valores (.value)
    const newTask = new Task(
        nameEl.value, 
        categoryEl.value, 
        levelEl.value, 
        dateLimitEl.value
    );

    todo_list.push(newTask);
    
    // Chamamos o render sem passar argumentos, pois ele lerá o array global
    render();
    
    // Dica extra: Limpar os campos após adicionar
    nameEl.value = '';
});

function render() {
    // Usamos task.propriedade para pegar os dados de cada objeto no array
    panel_list.innerHTML = todo_list.map(task => `
        <li>
            <strong>${task.name}</strong> - ${task.category} 
            (Nível: ${task.level}) | Prazo: ${task.date_limit}
        </li>
    `).join(''); // .join('') remove a vírgula chata que o map deixa no HTML
}