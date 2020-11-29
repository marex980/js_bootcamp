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
    completed: true,
  },
];

/*console.log(todos[0].completed)*/

const isCompleted = todos.filter(function (todo) {
  return !todo.completed;
});
let notCompletedText = document.createElement("h2");

notCompletedText.textContent = `you have ${isCompleted.length} todos left`;
document.querySelector("body").appendChild(notCompletedText);

todos.forEach(function (todo) {
  const p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector("body").appendChild(p);
});

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
