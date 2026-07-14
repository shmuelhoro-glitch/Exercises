import mysql from "mysql2/promise"


const pool = mysql.createPool({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "shop"
})

// async function createTables(){
//     try{
//     await pool.query(`use shop`)
//     await pool.query(`CREATE TABLE if not exists users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, city_id INTEGER )`)
//     await pool.query(`CREATE TABLE if not exists orders (id INTEGER PRIMARY KEY, user_id INTEGER, product TEXT, amount INTEGER)`)
//     await pool.query(`CREATE TABLE if not exists cities (id INTEGER PRIMARY KEY, city TEXT, country TEXT)`)
//     } catch (err) {
//         console.log(err)        
//     }
// }

// await createTables()

// await pool.execute(`INSERT INTO users VALUES (1,'Alice',10),(2,'David',11),(3,'Sarah',10),(4,'Noa',12)`)
// await pool.execute(`INSERT INTO orders VALUES (1,1,'MacBook',2500),(2,1,'Phone',900),(3,3,'Tablet',600),(4,3,'Keyboard',150)`)
// await pool.execute(`INSERT INTO cities VALUES (10,'Tel Aviv','IL'),(11,'Jerusalem','IL'),(12,'Haifa','IL')`)


// // 1
// const [innerJoin1] = await pool.execute(`SELECT u.name, o.product, o.amount FROM users u INNER JOIN orders o ON u.id = o.user_id`)
// console.table(innerJoin1)

// // 2
// const [leftJoin] = await pool.execute('select u.name, o.product from users u left join orders o on u.id = o.user_id')
// console.table(leftJoin)

// // 3
// const [filterLeftJoin] = await pool.execute('select u.name from users u left join orders o on u.id = o.user_id where o.product is null')
// console.table(filterLeftJoin)

// // 4
// const [amountOver500] = await pool.execute('select u.name, o.product, o.amount from users u inner join orders o on u.id = o.user_id where o.amount > 500')
// console.table(amountOver500)

// // 5
// const [withCity] = await pool.execute('select u.name, o.product, c.city from orders o join users u on o.user_id = u.id join cities c on u.city_id = c.id')
// console.table(withCity)





// const [x] = await pool.execute(`select * from users`)
// const [y] = await pool.execute(`select * from orders`)
// const [z] = await pool.execute(`select * from cities`)
// console.table(x)
// console.table(y)
// console.table(z)

await pool.end()