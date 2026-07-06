import http from "http"

let movies = [{"id": 1,"title": "Inception","director": "Christopher Nolan"}];
let maxId = 0;


const server = http.createServer((req,res) =>{
    res.setHeader("Content-Type","application/json")
    if (req.url === "/movies"){
       if (req.method === "GET"){
        res.statusCode = 200
        res.end(JSON.stringify(movies))
        return;
    }  if (req.method === "POST"){
        let body = ""
        res.on("data",(chunk) => {
            body += chunk
        })
        res.on("end", () => {
            const newMovie = JSON.parse(body)
            maxId ++
            newMovie.id = maxId

            movies.push(newMovie)
            
            res.statusCode = 201
            res.end(JSON.stringify(newMovie))
        })
        return
        }
    res.statusCode = 405
    res.end(JSON.stringify({"error": "method not allowed"}))
    return
}
 
res.statusCod = 404
res.end(JSON.stringify({error : "not found"}))
})



server.listen(3000, () =>{
    
    console.log("The server is running")
})





















