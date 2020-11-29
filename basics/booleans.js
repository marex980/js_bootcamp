let age = 151

let isChild = age <= 7
let isSenior = age >= 65

if (age <= 7 || age >=150) {
    console.log(`${age} is to small`)
} else if (age >= 65) {
    console.log(`${age} is to big`)
} else console.log("it is ok")

console.dir(age)