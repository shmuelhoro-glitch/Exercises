//1
// function doubleThree(num) {
//     return num * 3;
// }

//2
// const len = (str) => {
//     return str.length;
// }

//3
// const checkSign = (num) => {
//     if (num < 0){
//         return "negative";
//     }
//     else if (num > 0){
//         return "positive";
//     }
//     else if (num == 0){
//         return "zero"
//     }

// }

//4
// function numBigger(num1,num2){
//     if (num1 > num2){
//         return num1;
//     }
//     else {
//         return num2;
//     }
// }

//5
// const lenList = (list) => {
//     return list.length;
// }

//6
// let a = 3;

// function test() {

//   a = 7;

// }

// test();

// console.log(a); // יודפס 7 כי הפונקציה משנה את המשתנה הגלובלי

//7

// function test() {

//   let a = 5;

// }

// test();

// console.log(a);
// זה גורם לשגיאה מכיון שהמשתנה הפנימי לא מוכר במרחב הגלובלי

//8

// let x = 10;

// function change() {

//   let x = 20;

// }

// console.log(x);
//גם כאן הוא לא מכיר את השינוים שקוראים בתוך המרחב של הפונקציה ששם הוגדר משתנה חדש עם אותו שם ולכאורה זה באג

//9

// let num = 1;

// function first() {

//   num++;

// }

// function second() {

//   num = num + 2;

// }

// first();

// second();

// console.log(num);
//יודפס 4 כי הפונקציה משנה את המשתנה הגלובלי

//10

// function print() {
//   let message = "Hi";
//   console.log(message);

// }

//11
// function smallest(arr){
//     let smaller = arr[0]
//     for (const num of arr){
//         if (num < smaller){smaller = num}
//     }
//     return smaller
// }
// console.log(smallest([4,6,2,1,-1,9,-10,8]));

//12
// function isDivision(num1,num2){
//     return num1%num2 ==0
// }

//13
// function addStrings(arr){
//     let currentString = ""
//     for (let val of arr){
//         currentString += val
//     }
//     return currentString
// }
// console.log(addStrings(["sh","mu","el"]));

//14
// let x = 5;

// function test(x) {

//   x = x + 10;

//   return x;

// }

// let result = test(x);

// console.log(x); // 5

// console.log(result); //15

//15
// function printUntil(num){
//     for (let i = 1;i<num;i++){
//         console.log(i);

//     }
// }

//16
// function noDuplicates(arr){
//     const newArr = []
//     for (let item of arr){
//         if(!(newArr.includes(item))) {newArr.push(item)}
//     }
//     return newArr
// }
// console.log(noDuplicates(["a","c","l","a","k","l"]));

//17

// function add(numbers) {
//     let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {

//     sum += numbers[i];

//   }
//   return sum
// }

// console.log(add([1, 2]));
// console.log(add([3, 4]));
// לא תקין כי זה היה על משתנה גלובלי ושמר מאחד לשני

// //18
// function sumEvenValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// //19
// let x = 1;

// function a() {
//   let x = 2;

//   function b() {
//     console.log(x);
//   }

//   b();
// }

// //a(); // יודפס 2

// //20

// function getPrice(price,discount = 0.1) {
//   return price - price * discount;
// }

