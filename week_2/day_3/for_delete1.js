
// function getAndProcessUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => data.filter(user => user.id %2 == 0))
//     .then(forMap => forMap.map(user => user.name.toLowerCase().trim()))
//     .then(finallyData => console.log(finallyData))
// }
// getAndProcessUsers()


const cart = () => {
    let items = [],
    addItem = (name,price) => items.push({name,price}),
    getTotal = () =>{
    totalPrice = 0
        for (let item of items){
            totalPrice+= item.price
        }
        return totalPrice
    }
    return {addItem,getTotal}
}

const iit = cart()
iit.addItem("salt",15)
iit.addItem("sale",20)
iit.addItem("say",5)
console.log(iit.getTotal());
