const todos = [{
    text: 'Clear room',
    completed: false
}, {
    text: 'Go to work',
    completed: true
}, {
    text: 'Wash deshes',
    completed: true
}, {
    text: 'Feed fishes',
    completed: false
}, {
    text: 'Plum flowers',
    completed: true
}]


/*ARRAYS FIND INDEX */
// const deleteTodo = function (todos, todoItem){
//     const index = todos.findIndex (function (todos){
//         return todos.text.toLowerCase() === todoItem.toLowerCase()
//     })
//     if (index > -1){
//         todos.splice(index, 1)
//     }
// }
//deleteTodo(todos, 'rrrplumcfdflowers')
//console.log(todos)

// const isCompleted = function(todos){
//     return todos.filter(function(todo, index){
//         return !todo.completed
//     })
// }

// //const todoCompleted = isCompleted(todos, true)
// console.log(isCompleted(todos))
 console.log(true > false)

const sortTodos = function (todos){
    todos.sort (function (a, b) {
        if (!a.completed && b.completed){
             return -1
        } else {
            return 1 }
    })
}

sortTodos(todos)
console.log(todos)
