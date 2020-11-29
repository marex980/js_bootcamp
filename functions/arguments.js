let tipCalculation = function(paid, tipPercetn = .2){
    let total = paid * tipPercetn
    return `A ${tipPercetn * 100}% tip on $${paid} would be $${total}`
}

let total = tipCalculation(40, .25)

console.log(total)