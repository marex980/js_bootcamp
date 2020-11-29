let myAccount = {
    name: 'Marko Radanovic',
    expensses: 0,
    income: 0
}

let addExpense = function (account, amount){
    account.expensses += amount
}

let addIncome = function (account, amount){
    account.income += amount
}

let resetAccount = function (account){
    account.expensses = 0
    account.income = 0
}

let getAccountSummary = function(account){
    return `Account fo ${account.name} has $${account.income - account.expensses}. $${account.income} is income. $${account.expensses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 50)
addExpense(myAccount, 50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))