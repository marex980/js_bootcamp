/*let fahreingeitOld = 50

let celsiusOld = (fahreingeitOld-32) * 5/9
console.log(`Old value of Celsius is ${celsiusOld}`)

let kelvinOld = (fahreingeitOld + 459.67) * 5/9
console.log(`Old value of Kelvin is ${kelvinOld}`)
*/

let tempCalculation = function(fahreingeit){
    let celsiusCalc = (fahreingeit-32) * 5/9
    let kelvinCalc = (fahreingeit + 459.67) * 5/9
    return{
        celsius: `fahreingeit is equal to ${celsiusCalc} celsius`, 
        kelvin: `fahreingeit is equal to ${kelvinCalc} kelvin`
    }
}

let convertedValue = tempCalculation(50) 

console.log(convertedValue.celsius)
console.log(convertedValue.kelvin)