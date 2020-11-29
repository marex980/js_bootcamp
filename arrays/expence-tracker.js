const account = {
    name: "Marko Radanovic",
    expenses: [],
    income: [],
    addExpence: function(description, amount){
        this.expenses.push({
            description: description, 
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            descrtiption: description, 
            amount: amount
        })
    },
    getAccountSummary: function(){
        let accountSummary = 0
        let expenceSummary = 0
        let incomeSummary = 0
        this.expenses.forEach(function(expence){
            expenceSummary += expence.amount
        })
        this.income.forEach(function(income){
            incomeSummary += income.amount
        })
        accountSummary = incomeSummary - expenceSummary

        return `${this.name} expenses are $${accountSummary}`
    }
}

/*const addExpence = function(description, amount){
    account.expenses.push({description: description, amount: amount})
    
}*/
/*
const getAccountSummary = function(){
    let i = 0
    for (let n of account.expenses){
       i += n.amount
    }
    return `${account.name} expenses are $${i}`
}*/


account.addExpence("Drinking a Caffee", 5)
account.addExpence("Fill a fuel", 45)
account.addExpence("Went to wakation", 4500)
account.addIncome("Work", 10000)

console.log(account)


console.log(account.getAccountSummary())