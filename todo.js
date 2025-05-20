let todos = [];

function addTodo() {
    const todoItem = document.getElementById('todoItem').value;
    const todoDate = document.getElementById('todoDate').value;

    if (todoItem) {
        const todo = { item: todoItem, date: todoDate };
        todos.push(todo);
        displayTodos();
        clearInputs();
    } else {
        alert("Please provide a task.");
    }
}

function displayTodos() {
    const container = document.getElementById('todoContainer');
    container.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <p>${todo.item} - ${todo.date}</p>
            <button onclick="deleteTodo(${index})">Done</button>
        `;
        container.appendChild(todoDiv);
    });
}
function clearInputs() {
    document.getElementById('todoItem').value = '';
    document.getElementById('todoDate').value = '';
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}