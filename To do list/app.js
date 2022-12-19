const form = document.getElementById('form');
const taskInput = document.getElementById('task');
const tasks = document.getElementById('tasks');

form.addEventListener('submit', addTask);

function addTask(e){
    e.preventDefault();

    if (taskInput.value == '') {
        return;
    }


    const task = document.createElement('li');
    task.innerHTML =`
        <input type="checkbox">
        <p>${taskInput.value}</p>
        <button type="button">Delete</button>
    `;

    task.querySelector('input[type="checkbox"]').
    addEventListener('change', toogleDone);


    task.querySelector('button').addEventListener
    ('click', removeTask);

    tasks.appendChild(task);

    taskInput.value = '';

}

function toogleDone(e){
    const task = e.target.parentNode;
    task.querySelector('p').classList.toogle
    ('done');
}

function removeTask(e){
    const task = e.target.parentNode;
    tasks.removeChild(task);
}

