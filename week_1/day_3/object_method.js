// // Object Methods

// // 1
// function arrKeys(obj) {
//   return Object.keys(obj);
// }
// console.log(arrKeys({ aaa: "123", bbb: "456", ccc: "789" }));

// // 2
// function arrValues(obj) {
//   return Object.values(obj);
// }
// console.log(arrValues({ aaa: "123", bbb: "456", ccc: "789" }));

// // 3
// function printKeyAndVal(obj) {
//   return Object.entries(obj);
// }
// console.log(printKeyAndVal({ aaa: "123", bbb: "456", ccc: "789" }));

// // 4
// const grades = { math: 80, english: 90, science: 70, program: 100 };
// const allGrades = Object.values(grades).reduce((acc, curr) => acc + curr);
// console.log(allGrades / Object.values(grades).length);

// // 5
// const firstObjects = { aa: "11", bb: "22" };
// const secondObject = { cc: "33", dd: "44" };
// console.log(Object.assign(firstObjects, secondObject));

// // 6
// const defaultSettings = { theme: "light", lang: "en" };
// const userSettings = { lang: "he" };
// const result = Object.assign(defaultSettings, userSettings);
// console.log(result);

// // 7
// const isKeyExists = (obj, key) => Object.hasOwn(obj, key);
// console.log(isKeyExists({ theme: "light", lang: "en" }, "theme"));

// // 8
// const lockObject = Object.freeze({ aa: "bb" });

// console.log(lockObject);
// lockObject.aa = "qq";
// console.log(lockObject);

// // 9
// function arrayToObject(arr) {
//   return Object.fromEntries(arr);
// }
// console.log(
//   arrayToObject([
//     ["name", "Alice"],
//     ["age", 25],
//   ]),
// );

// // 10
// const prices = { apple: 10, banana: 5, mango: 20 };
// function changeValues(obj) {
//   let arrUpdated = Object.entries(obj).map((item) => [item[0], item[1] * 0.9]);
//   return Object.fromEntries(arrUpdated);
// }

// console.log(changeValues(prices));



// // 11

// function filterFields(obj){
//     return Object.values(obj).filter(char => Number.isFinite(char))
// }
// console.log(filterFields(["ds",54,true,"sa",1,6.4,4]));



// // 12
// function copyObject(obj){
//     return structuredClone(obj)
// }
// const obb = { apple: 10, banana: 5, mango: 20 }
// const objj = copyObject(obb)
// objj.orange = 5
// console.log(obb);
// console.log(objj);



// // 13
// function comparObjects(o1,o2){
//     const obj1 = Object.keys(o1)
//     const obj2 = Object.keys(o2)
//     console.log(obj1,obj2);
//     for (let key of obj1){
//         if (!obj2.includes(key)){return false}
//     }
//     return true   
// }

// const obb = { apple: 10, banana: 5, mango: 20 }
// const objj = { apple: 10, banana: 5, mango: 20 }
// console.log(comparObjects(obb,objj));

