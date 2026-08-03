import express, { urlencoded } from "express"
import { createNew, getIndexHtml, getHtmlTable, deleteById, adminPage } from "./controller.js"
import { readFile } from "./storage.js"

const app = express()

app.use(urlencoded({extended:true}))


app.get("/", getIndexHtml)

app.post("/contact", createNew)

app.get('/admin', adminPage)

app.delete('/contact/:id', deleteById)



app.listen(3000, ()=>{
    console.log("server listening...")
})