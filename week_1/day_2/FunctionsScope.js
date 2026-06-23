import input from "analiza-sync";
//1
function helloName(name) {
  console.log(`hello ${name}`);
}

//2
const sum = (num1, num2) => num1 + num2;

//3
const isEven = (num) => num % 2 == 0;

//4
const firstElement = (list) => list[0];

//5
const upper = (str) => str.toUpperCase();

// console.log(upper("asam"))

//6

// let x = 5;

// function test() {

//   let x = 10;

//   console.log(x);

// }

// test();

// console.log(x);

// מכיוון שזה משתנים שמוגדרים כלא קבועים לכן בתוך הפונקציה יכול להיווצר משתנה חדש עם שם זהה ולכן מדפיס בפנים את מה שהוגדר שם אבל בחוץ הוא לא מכיר אותו ומדפיס את הגלובלי

//7
// let y = undefined;
// function test() {
//   y = 10;
// }
// test();
// console.log(y);

//8

// let x = 1;

// function a() {

//   console.log(x);

// }

// function b() {

//   let x = 2;

//   a();

// }

// b(); // output = 2

//9

// function tryAccess() {
//   const x = 18;
//   console.log(x);
// }
// tryAccess();
// console.log(x);

//10

function createCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

//11
function sumArray(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  return totalSum;
}

//12
const squaredNumber = (num) => num ** 2;

const printSquared = (num) => console.log(squaredNumber(num));

//13

let x = 10;

function test(x) {
  return x * 2;
}

// console.log(test(5));
// מודפס 10 כי הפונקציה מקבלת ארגומנט כשקוראים לה ולא מכירה את המשתנה איקס

//14

function onlyEven(arr) {
  const evenNums = [];
  for (const num of arr) {
    if (num % 2 == 0) evenNums.push(num);
  }
  return evenNums;
}
// console.log(onlyEven([1,2,3,4,5,6,7,8]));

//15
// let total = 0;

// function addToTotal(num) {
//   total += num;

// }

// function reset() {

//   total = 0;

// }

// addToTotal(5);

// addToTotal(10);

// reset();

// console.log(total);
//הבעיה בקוד היא שהמשתנה שמחזיק את המספר נמצא בסקופ הגלובלי ואפשר בטעות למחוק או לדרוס אותו

// function createTotalCounter(num) {
//   let total = 0;
//   return {
//     addToTotal: function(num) {
//       total += num;
//     },
//     reset: function() {
//       total = 0;
//     },
//     getTotal: function () {
//       return total;
//     },
//   };
// }


// let c1 = createTotalCounter()
// console.log(c1.getTotal());
// c1.addToTotal(5);
// console.log(c1.getTotal());
// c1.addToTotal(10);
// console.log(c1.getTotal());
// c1.reset();
// console.log(c1.getTotal());


