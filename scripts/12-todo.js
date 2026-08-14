const todoList = [{name:'make dinner', dueDate:''}, {name:'wash dishes', dueDate:''}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const HTML = `
    <div>
      ${name}</div>
     <div>(${dueDate})</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="delete">Delete</button>
    `;
    todoListHTML += HTML;
  }

  document.querySelector('.js-a').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-todo');
  const name = inputElement.value;

  const dateInput = document.querySelector('.js-due-date');
const dueDate = dateInput.value;
  todoList.push({name:name, 
    dueDate:dueDate});
  

  inputElement.value = '';
  renderTodoList();
}



   
  
