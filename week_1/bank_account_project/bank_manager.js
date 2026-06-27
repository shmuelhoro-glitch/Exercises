




export function counterId(){
    let count = 1;
    return () => count++
}


/**
 * 
 * @param {string} fullName
 * @param {Number} balance 
 * @param {string} accountType 
 */

const CUSTOMERS = [];
const ACCOUNT_TYPES = ['Regular','Premium','Student']
const getNextId = counterId()

export function createCustomer(fullName,Balance,accountType){
    if (fullName.trim().length < 2){return "have to enter name"}
    if (Number.isNaN(Number(Balance))){return "balance is not number"}
    if (Balance < 0 ){return "can't add with negative balance"}
    if (!ACCOUNT_TYPES.includes(accountType)) {return "type not available"}
    const id = getNextId()
    const isActive = true
    const balance = Number(Balance)
    const customerObj = {id,fullName,accountType,balance,isActive}
    CUSTOMERS.push(customerObj)
    return "Customer created successfully"
    }

export function showCustomers() {return CUSTOMERS.map((customer) => {
    return{
    "ID" : customer.id,
    "Name" : customer.fullName,
    "AccountType" : customer.accountType,
    "Balance" : customer.balance,
    "Status" : customer.isActive
    }
})
}



export function Deposit(customerId,amount) {
    if (Number(amount) < 0){return "negative amount!"}
    for (let customer of CUSTOMERS){
        if (customer.id == customerId){
            if (!customer.isActive){return "customer inactive"}
            customer.balance += Number(amount)
            return "Deposit completed successfully"
        }
        return "customer not found"
    }
}

export function Withdraw(customerId,amount){
    if (Number(amount) < 0){return "negative amount!"}
    for (let customer of CUSTOMERS){
        if (customer.id == customerId){
            if (!customer.isActive){return "customer inactive"}
            if (customer.balance < Number(amount)){return "Withdraw failed: insufficient balance"}
            customer.balance -= Number(amount)
            return "Withdraw completed successfully".to
        }
        return "customer not found"
    }

}


export function SearchCustomer(q){
    if (!isNaN(q)){
        const result = CUSTOMERS.find(customer => customer.id == q)
            if (result){return result}
            else{ return "id not found"}
        }
    else{
        const result = CUSTOMERS.find(customer => customer.fullName.toLowerCase == q.toLowerCase)
            if (result) {return result}
            else {return "customer not found"}
        }
        
}
    




export function CloseAccount(customerId){
    const customer = CUSTOMERS.find(customer => customer.id == customerId)
    if (customer){customer.isActive = false; return "Account closed successfully"}
    else {return "id not found"}

}



export function ShowStatistics(){
    const totalCustomer = CUSTOMERS.length
    const activeAccount = CUSTOMERS.filter(customer => customer.isActive).length
    const totalMoney = CUSTOMERS.map(customer => customer.balance).reduce((acc,curr) => {acc+=curr; return acc})
    const averageBalance = totalMoney/totalCustomer
    const HighestBalance = CUSTOMERS.map(customer => customer.balance).reduce(function Max(max,curr){if (curr>max) max = curr; return max})
    return {totalCustomer,activeAccount,totalMoney,averageBalance,HighestBalance}
}














































































