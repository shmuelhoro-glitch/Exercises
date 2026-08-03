import express, { urlencoded } from "express"
import { createNew, getIndexHtml, getHtmlTable, deleteById } from "./controller.js"
import { readFile } from "./storage.js"

const app = express()

app.use(urlencoded({extended:true}))


app.get("/contact", getIndexHtml)

app.post("/contact", createNew)

app.get('/admin', async (req, res) => {
    const contacts = await readFile()
    const sortedContacts = contacts.sort(con => {createdAt: -1})
    const rows = sortedContacts.map(c => `
        <tr>
            <td>${c.name}</td>
            <td>${c.email}</td>
            <td>${c.subject}</td>
            <td>${c.message}</td>
            <td><button onClick="del(${c._id})">מחק</button></td>
        </tr>
    `).join('')
    res.send(`<table>${rows}</table><script>
        function del(id){
        fetch('/contact/'+ id, {method: "DELETE"})
            .then(() => location.reload())
        }
    </script>`)
})




app.delete('/contact/:id', deleteById)



app.listen(3000, ()=>{
    console.log("server listening...")
})