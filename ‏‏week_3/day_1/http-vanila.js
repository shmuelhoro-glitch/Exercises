// import http from "http"
// // 1

// const server = http.createServer((req,res) =>{
//     let currentTime = new Date
//     if (currentTime.getHours() < 18){
//         res.end("Good Morning from my server")}
//     else {res.end("Good Evening from my server")}
// })

// server.listen(3000, () =>{
//     console.log("the server running on port 3000 ")
// })



// // 2

// const server = http.createServer((req, res) =>{
//     if (req.url === "/"){res.end('Home page')}
//     else if (req.url === "/about"){res.end("About Page")}
//     else if (req.url === "/contact"){res.end("Contact Page")}
//     else res.end(`${res.statusCode = 404} Page Not Found`)
// })

// server.listen(3000, () =>{
//     console.log("the server running on port 3000 ")
// })



// // 3
// const server = http.createServer((req, res) =>{
//     if (req.url === '/users' && req.method === "GET"){
//         res.end("Users list")
//     } else if (req.url === '/users' && req.method === "POST"){
//         res.end("User created")
//     } else if (req.url === '/users'){
//         res.end("Method Not Allowed")
//     } else {res.end(`${res.statusCode = 404}`)}
// })

// server.listen(3000, () =>{
//     console.log("the server running on port 3000 ")
// })