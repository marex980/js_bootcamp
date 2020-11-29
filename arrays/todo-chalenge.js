const notes = [{
    title: 'First note',
    body: 'Tekst oko necega'
}, {
    title: 'Second note',
    body: 'Tekst oko necega drugi deo'
}, {
    title: 'Third note',
    body: 'Tekst oko necega treci deo'
}]

// const searchResult = function(note, noteTitle){
//     return note.find(function (note){
//         return note.title.toLowerCase () === noteTitle.toLowerCase()
//     })
// }

const findNotes = function(notes, query){
    return notes.filter(function (x){
        const isTitle = x.title.toLowerCase().includes(query.toLowerCase())
        const isBody = x.body.toLowerCase().includes(query.toLowerCase())
        return isTitle || isBody
     })
}

const result = findNotes(notes, 'DEO')
console.log(result)

















// const searchBar = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// const result = searchBar(notes, "first note")
// console.log(result.body)
