const TODO_KEY = "TodoArr";

const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let todos = [];

function checkBox(){
    if(todos.length > 0) {
        toDoList.classList.remove("hidden");
    }
    else {
        toDoList.classList.add("hidden");
    }
}

function saveTodoList() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    checkBox();
}

function paintTodos(todo) {
    const newTodo = document.createElement("li");
    const span = document.createElement("span");
    const butt = document.createElement("button");

    butt.innerText = "❌";
    span.innerText = todo.text;
    newTodo.id = todo.id;

    newTodo.appendChild(span);
    newTodo.appendChild(butt);
    butt.addEventListener("click",(info) => {
        const target = info.target.parentElement;
        todos = todos.filter((list) => {
            return list.id != target.id;
        });
        target.remove();
        saveTodoList();
    });
    toDoList.append(newTodo);
}

function addTodoList(todo) {
    const todoObj = {
        text : todo,
        id : Date.now()
    };
    paintTodos(todoObj);
    todos.push(todoObj);
    saveTodoList();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    addTodoList(toDoInput.value);
    toDoInput.value = "";
}
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos = JSON.parse(localStorage.getItem(TODO_KEY));
if(savedTodos !== null){
    savedTodos.forEach(todo => {
        paintTodos(todo);
    });
    todos = savedTodos;
}
checkBox();