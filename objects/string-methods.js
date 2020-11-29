let isValidPassword = function(password){
    if (password.length > 8 && (!password.includes("password"))){
        return `pasword is OK`
    } else {return `input correct password`}
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123~@#$%$'))
console.log(isValidPassword('asdfpasdfpoljpassword'))