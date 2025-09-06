const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};

// {
//     "userId": 8,
//     "id": 151,
//     "title": "accusamus adipisci dicta qui quo ea explicabo sed vero",
//     "completed": true
// }
const displayTodo = (todos) => {
  // get the container
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
<div class="todo-card">
 <p>${
      todo.completed == true
        ? `<i class="fa-solid fa-square-check">`
        : `<i class="fa-regular fa-square-check"></i>`
    }  
</i></p>

<h3>${todo.title}</h3>
 </div>
`;

    todoContainer.append(todoCard);
  });
};

loadTodo();
// <p>Status: ${todo.completed ? "✅ Completed" : "❌ Not Completed"}</p>