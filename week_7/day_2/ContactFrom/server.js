import express, { urlencoded } from "express"
import { createNew, getIndexHtml } from "./controller.js"

const app = express()

app.use(urlencoded({extended:true}))


app.get("/contact", getIndexHtml)

app.post("/contact", createNew)

// app.get('/admin', getHtmlTable)

// app.delete('/contact/:id', deleteContact)


app.listen(3000, ()=>{
    console.log("server listening...")
})