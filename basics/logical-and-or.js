let isGuestOneVegan = false
let isGuesTwoVegan = true

if (isGuestOneVegan && isGuesTwoVegan){
    console.log("Boath are vegans")
} else if (isGuestOneVegan || isGuesTwoVegan) {
    console.log("One of them is vegan")
} else console.log ("there is no vegans here")