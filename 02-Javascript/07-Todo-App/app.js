const input = document.querySelector("#input");
const ol = document.querySelector("#list");

let allTodos = [];

function renderTodo() {
  ol.innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    ol.innerHTML += ` <li>
                <span class="todo-text">${allTodos[i]}</span>
                <div class="actions">
                    <button class="edit-btn" onclick="editTodo(${i})">Edit</button>
                    <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
                </div>
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
