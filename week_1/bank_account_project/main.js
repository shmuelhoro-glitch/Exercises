import input from "analiza-sync"
import { createCustomer,showCustomers,Deposit,Withdraw,SearchCustomer,CloseAccount,ShowStatistics } from "./bank_manager.js"

function inputTool(prom,num = true){
    if (num) {return Number(input(prom))}
    return input(prom)
}

let to_exit = false

while (!to_exit){
    console.log("1. Create customer,\n2. Show All customers,\n3. deposit, \n4. Withdraw, \n5. Search customer, \n6. Close account, \n7.Show statistics \n8.for exit");
    let userInput = inputTool("please enter a num: ")
    switch(userInput){
    case 1:
        const userName = input("enter full name: ")
        const balance = inputTool("enter the current balance: ")
        const type = input("enter the type (Regular, Premium, Student): ")
        console.log(createCustomer(userName,balance,type));
        continue
    case 2:
         console.log((showCustomers()))
         continue
    case 3:
        let userId1 = input("enter the user id: ")
        let amount1 = input("enter the amount to add: ")
        console.log(Deposit(userId1,amount1))
        continue
    case 4:
        let userId2 = input("enter the user id: ")
        let amount2 = input("enter the amount to less: ")
        console.log(Withdraw(userId2,amount2));
        continue
    case 5:
        let qSearch = input("enter question to search: ")
        console.log(SearchCustomer(qSearch));
        continue
    case 6:
        let userId3 = input("enter the user id: ")
        console.log(CloseAccount(userId3));
        continue
    case 7:
        console.log("===== Statistics =====")
        console.log(ShowStatistics());
        continue
        
    case 8:
        to_exit = true
        break
    
    default:
        console.log("no match")
        break
}}

























































































