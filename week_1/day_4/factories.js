//חלק א 
// // 1 
function createObj(name){
    return {"name":name}
}
const user1 = createObj("שמואל");


// // 2 
function addMethod(obj){
    return obj.greet = () => `היי, אני ${obj.name}`
}
addMethod(user1);
// console.log(user1.greet());

const user2 = createObj("חיה")
addMethod(user2)
// console.log(user2.greet());


// // 3
// user2.name = "hayush"
// console.log(user1.name);
// console.log(user2.name);


// // 4
function addAge(obj,age){
    obj.age=age
    return obj
}

// console.log(addAge(user1,22));


// // 5
function addIsAdult(obj){
    return obj.age>18
}

// console.log(addIsAdult(user1));

/////// חלק ב
// // 6
function timesCalled() {
    let times = 0
    return function(){
        times ++
        return times
    }
}
// const count = timesCalled()
// console.log(count());
// console.log(count());
// console.log(count());

// // 7
function counter(){
    let count = 0;
    return ()=> count++
}

const c2 = counter()
// console.log(c2());
// console.log(c2());
// console.log(c2());

// // 8 - 9 - 10
function counterFrom(num){
    let count = num;
    const action = function(){
        count ++
        return count
    }
    action.down = function(){
        count --
        return count
    }
    action.current = () => count
    return action
}

const c3 = counterFrom(10)
// console.log(c3());
// console.log(c3.down());
// console.log(c3.current());
// console.log(c3());


//////// חלק ג
// // 11 , 13
function createCounter(){
    let count = 0;
    return{
    increment:function(){
        count ++
        return count
    },
    reset:function(){
        count = 0
        return count 
    }
}}

const c4 = createCounter()
// console.log(c4.increment());
// console.log(c4.increment());
// console.log(c4.increment());

// // 12
// console.log(c4.count);

// // 13
// 👆⬆️ 


// // 14
// const c5 = createCounter()
// const c6 = createCounter()

// console.log(c5.increment());
// console.log(c5.increment());
// console.log(c5.increment());

// console.log(c6.increment())
// console.log(c6.increment())

// console.log(c5.reset());
// console.log(c6.increment());



////////////// חלק ד
// // 15 - 18
// function createItem(name,price,stock=0){
//     if (price < 0) {console.log("don't create item with negative price"); return false;}
//     const item = {name,price,stock}
//     return{
//     name,
//     price,
//     stock,
//     isStock : function() {return stock > 0}
// }}
// const cup = createItem("cup",20,50)
// console.log(cup);
// console.log(cup.isStock());


////////// חלק ה
// // 19
function createMultiplier(constantNum){
    const ConstantNum = constantNum;
    return (num) => ConstantNum * num
}
// const multiTwo = createMultiplier(2)
// console.log(multiTwo(15));
// const multiThree = createMultiplier(3)
// console.log(multiThree(5));


// // 20
function addHello(name){
    return "Hello ".concat(name)
}
// console.log(addHello("shmuel"));

// // 21 - 23
function secretMessages(){
    const messages = [];
    return {
        addNew: function(message){messages.push(message)},
        getAll: function(){return messages},
        deleteByIndex: function(index){messages.splice(index,1); return "the message deleted"}
    }
}
// const secret1 = secretMessages()
// secret1.addNew("hyy")
// secret1.addNew("Hello")
// console.log(secret1.getAll());
// console.log(secret1.deleteByIndex(0));
// console.log(secret1.getAll());


////////// חלק ו
// // 24
function countLogin(name){
    const userName = name;
    let count = 0;
    return {
        userName,
        login: function(){count++ ; return count}
    }
}

// const u1 = countLogin("shmuel")
// console.log(u1,u1.login());
// console.log(u1,u1.login());
// console.log(u1,u1.login());


// // 25



















































