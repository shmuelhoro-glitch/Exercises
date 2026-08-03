import express, { urlencoded } from "express"
import { createNew } from "./controller.js"

const app = express()

app.use(urlencoded({extended:true}))
app.use(express.json())
// app.use(express.static(""))


app.get("/", (req, res) =>{
    res.sendFile("./index.html")
})

app.post("/contact", createNew)

// app.get('/admin', getHtmlTable)

// app.delete('/contact/:id', deleteContact)


app.listen(3000, ()=>{
    console.log("server listening...")
})