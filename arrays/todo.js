const todos = ['Clear room', 'Go to work', 'Wash deshes', 'Feed fishes', 'Plum flowers', 'Marko']

const lastItem = todos.pop()
console.log(`You have ${todos.length} todos`)

const allTodos = (todos) => {
    for (let n in todos) {
        if (parseInt(n) === todos.length - 1){
        console.log(`Todo ${parseInt(n) + 1}: ${todos[n]}!`)
    } else {
        console.log(`Todo ${parseInt(n) + 1}: ${todos[n]},`)
    }
    }
}

allTodos(todos)
console.log(`Removed item is ${lastItem}`)

console.log(todos.splice(todos.length/2, 0, "Read something"))
console.log(`You have ${todos.length} todos`)

allTodos(todos)
console.log("**************************************")
todos.splice(2,1)
todos.push(lastItem)
todos.shift()

console.log(`You have ${todos.length} todos!`)
todos.forEach(function(item, index){
    console.log(`Todo ${index+1}: ${item}`)
})
let name = 'Marko'
if(todos.indexOf(name) === -1){
    todos.push(name)
} else {console.log(`Name $(name) already exits`)}
console.log(`New list is ${todos}`)





