//1
// const arr = [5,4,3,2,1];
// const multi = arr.map((num) => num*2 )
// console.log(multi);


//2
// const str = ["hello","world"];
// const upperStr = str.map((char) => char.toUpperCase())
// console.log(upperStr);


//3
// const prices = [20,45,85,16,27]
// const priceWithTax = prices.map((price) => Number((price*1.17).toFixed(2)))
// console.log(priceWithTax);



//4
// const nums = [6,5,4,3,2,1]
// const filterEven = nums.filter((num) => num%2 == 0)
// console.log(filterEven);



//8 
// const prices = [20,105,85,16,27,450,210]
// const filterAndMap = prices.map((price) => Number((price * 1.10).toFixed(2))).filter((price) => price > 100)
// console.log(filterAndMap);


//10
// const arr = [2,6,2]
// const multiply = arr.reduce((acc,val) => acc*val)
// console.log(multiply);


//12
// const users = [
//    { name: "Yossi", age: 25 },
//    { name: "Avi", age: 30 },
//    { name: "Dan", age: 20 }
// ]
// const sumAges = users.reduce((acc, curr) => {
//     return acc+ curr.age;
// },0)
// const averageAge = sumAges/users.length;
// console.log(averageAge);


//25
// const numbers = [1,5,2,7,3,4,6];
// const sortNumbers = numbers.sort().reverse()
// console.log(sortNumbers);


//29
// const numbers = [1,2,3,4,5,6,7];
// numbers.splice(1,2)
// console.log(numbers);


//32
// const arr = [[1,2,3],[4,5,6],[7,8,9]]
// const flatArray = arr.flat()
// console.log(flatArray);


//36
// const numbers = [1,2,8,7,3,6];
// const chain = numbers.filter((num) => num%2 == 0).map((num) => num*2).reduce((acc,num)=> acc+num)
// console.log(chain);


//38
// const items = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }]
// const groupBy = items.reduce((acc,currentVal) =>{
//     if (!acc[currentVal.type]){
//         acc[currentVal.type] = [];
//     }
//     acc[currentVal.type].push(currentVal)
//     return acc

// },{})

// console.log(groupBy);

//39
// const numbers = [2,5,2,4,6,8,1,2,2,4,6,7];
// const withOut = numbers.reduce((acc,currentVal) =>{
//     if (!acc.includes(currentVal)){
//         acc.push(currentVal)
//     }
//     return acc
// },[])
// console.log(withOut);


//41
// const products = [

//   { name: "Laptop", price: 800, inStock: true,  category: "tech"    },

//   { name: "Phone",  price: 400, inStock: false, category: "tech"    },

//   { name: "Shirt",  price: 50,  inStock: true,  category: "fashion" }

// ];
// const chaining = products.filter((item) => item.inStock && item.price> 100).sort((a,b) => a.price - b.price).flatMap((item) => item.name).toString()
// console.log(chaining);

