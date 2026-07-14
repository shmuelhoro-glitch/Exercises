// import mysql from "mysql2/promise"

// // 1

// const pool = mysql.createPool({
//     host: "localhost",
//     port: 3307,
//     user: "root",
//     password: "root",
//     // database: "shop"
// })

// async function createTable(){
//     try{
//     await pool.query('use shop')
//     await pool.query(`
//     create table if not exists products(
//     id int primary key auto_increment,
//     name varchar(50) not null,
//     price decimal(10, 2) not null,
//     stock int default 0
//     )`)}
//     catch (err) {
//         console.log(err)
//     }
// }


// await createTable()

// // 2
// async function addItem(product_name, price, stock = 0){
//     try{
//     await pool.query(`insert into products(name, price, stock) values(?, ?, ?)`,[product_name, price, stock])
//     } catch (err) {
//         console.log(err)
//     }
// }
// await addItem("Laptop",2500,10)
// await addItem("Mouse",45,50)
// await addItem("Monitor", 800, 5)


// // 3
// async function getAllProducts(){
//     try{
//     const [products] = await pool.execute(`select * from products`)
//     return products
//     } catch (err) {
//         console.log(err)
//     }
// }
// console.log(await getAllProducts())

// const [overPrice] = await pool.execute(`select * from products where price > 100 `)
// console.log(await overPrice);


// const [orderByPrice] = await pool.execute(`select name, price from products order by price asc`)
// console.log(await orderByPrice);

// const [lowest] = await pool.execute(`select * from products order by price asc limit 1`)
// console.log(await lowest);

// // 4

// await pool.execute(`update products set price=? where name = "Mouse" `,[55])

// await pool.execute(`update products set stock = stock +? where name = "Mouse" `,[5])

// await pool.query(`delete from products where stock = 0`)






// await addItem("for_delete",15,0)


// await pool.end()

