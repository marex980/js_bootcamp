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



const findNote = function(note, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function(note, noteTitle){
//     const noteIndex = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[noteIndex]
// }

const index =  findNote(notes, 'first note')
console.log(index.body)