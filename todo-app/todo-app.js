const todos = [
  {
    text: "Clear room",
    completed: false,
  },
  {
    text: "Go to work",
    completed: true,
  },
  {
    text: "Wash deshes",
    completed: true,
  },
  {
    text: "Feed fishes",
    completed: false,
  },
  {
    text: "Plum flowers",
    completed: false,
  },
];

/*console.log(todos[0].completed)*/
//******************************* */
const isCompleted = todos.filter(function (todo) {
  return !todo.completed;
});

const filters = {
  searchTodos: "",
};

const filterTodos = function (todos, filters) {
  const filteredtodos = todos.filter(function (todo) {
    return (
      todo.text.toLowerCase().includes(filters.searchTodos.toLowerCase()) &&
      !todo.completed
    );
  });

  document.querySelector("#render-todo").innerHTML = "";

  let notCompletedText = document.createElement("h2");
  notCompletedText.textContent = `you have ${isCompleted.length} todos left`;
  document.querySelector("#render-todo").appendChild(notCompletedText);

  filteredtodos.forEach(function (todo) {
    const renderTodo = document.createElement("p");
    renderTodo.textContent = todo.text;
    console.log(renderTodo.textContent);
    document.querySelector("#render-todo").appendChild(renderTodo);
  });
};

filterTodos(todos, filters);

let notCompletedText = document.createElement("h2");
notCompletedText.textContent = `you have ${isCompleted.length} todos left`;
document.querySelector("body").appendChild(notCompletedText);

todos.forEach(function (todo) {
  const p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector("body").appendChild(p);
});

const inputSearch = document.querySelector("#search-todo");
inputSearch.addEventListener("input", function (e) {
  filters.searchTodos = e.target.value;
  filterTodos(todos, filters);
});

//************************************** */
document.querySelector("#create-todo").addEventListener("click", function (e) {
  e.target.textContent = "yuhuuuuu";
  e.target.style.border = "none";
  e.target.style.fontSize = "2rem";
  e.target.style.background = "#fff";
  e.target.style.color = "blue";
});

const addTodo = document.querySelector("#add-todo");
addTodo.addEventListener("input", function (e) {
  console.log(e.target.value);
});
