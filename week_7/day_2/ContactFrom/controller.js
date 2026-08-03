import { readFile, saveFile } from "./storage.js"



export function getIndexHtml(req, res){
    res.sendFile("index.html", {root: "./"})
}





export async function createNew(req, res){
    const {name, email, subject, message} = req.body
    if (!name || !email || !subject || !message){
        return res.status(400).send("invalid request")
    }
    const oldData = await readFile()
    const createdAt= new Date().toISOString()
    oldData.push({name, email, subject, message, createdAt})
    const result = await saveFile(oldData)
    if (result === true)
    return res.status(201).send("success message")
}


