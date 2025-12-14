const input = document.querySelector("#input");
const ol = document.querySelector("#list");

let allTodos = [];

function renderTodo() {
  ol.innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    ol.innerHTML += `<li>${allTodos[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`;
  }
}

function addTodo() {
  allTodos.push(input.value);
  renderTodo()
}

function deleteTodo(index) {
  console.log("todo deleted ", index);
  allTodos.splice(index, 1);
  console.log(allTodos);

 renderTodo()
}


function editTodo(index) {
  console.log("todo edited ", index);
}
