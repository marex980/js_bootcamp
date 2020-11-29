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


const filter = todos.filter(function(note, index){
    return note.text.toLowerCase() === "o"
})

console.log(filter)