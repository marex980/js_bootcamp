let convertedValue = (fer) => {
    let cel = (fer - 32) * 5/9
    return cel
}

let celsius = convertedValue(68)
console.log(celsius)