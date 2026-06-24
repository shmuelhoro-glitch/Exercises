// // 1
// function createLogger(){
//     return () => console.log("hello");
// }

// // // 2
// function createGreeting(name){
//     const userName = name
//     return () => console.log(`hello ${name}`);
// }

// // 3
// function createCounter(){
//     let counter = 0;
//     function increment(){
//         return counter++
//     }
//     return increment
// }

// // 4
// function outer() {

//   let x = 10;

//   return function () {

//     console.log(x);

//   };

// }

// const fn = outer();

// fn(); // 10


// // 5

// function  createMultiplier(x){
//     return (num) => num * x

// }

// const double = createMultiplier(2);
// console.log(double(5));


// // 6
// function createAdder(num){
//     return (newNum) => num +newNum
// }
// const add5 = createAdder(5);
// console.log(add5(3));


// // 7
// function createSecret() {
//     let secret = "123456"
//     const getSecret = () => secret
//     const setSecret = (newSecret) => secret = newSecret
    // return {getSecret,setSecret}
// }

// const cc = createSecret()
// console.log(cc.getSecret());
// cc.setSecret("45441");
// console.log(cc.getSecret());



// // 8
// function once(fn){
//     return () => fn
// }
// const fun = (num) => num * 2
// const test = once(fun(5));
// console.log(test());


// // 12
// function createStack() {
//     const items =[]

//     return{
//     push:function(item){items.push(item)},
//     pop: function() {return items.pop()},
//     peek:function(){return items[items.length -1]}
//     }

// }


// // 13
// function createIdGenerator() {
//     let counter = 0
//     return () => counter++
// }
// const gen = createIdGenerator();
// console.log(gen());


// // 15
// function createBankAccount(initialBalance){
//     let balance = 0;
//     return{
//         deposit:function(amount){return balance+=amount},
//         withdraw: function(amount){
//             if (amount>balance){return "There is not enough balance."}
//             return balance-=amount
//         },
//         getBalance:function(){return balance}
//     }
// }













