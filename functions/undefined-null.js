let name


if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log(name)
}

let square = function(num = 10){
    console.log(num)
}

square(15)