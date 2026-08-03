import { deleteContact, readFile, saveFile } from "./storage.js"



export function getIndexHtml(req, res){
    res.sendFile("index.html", {root: "./"})
}



async function newId(){
    const data = await readFile()
    const max = data.reduce((max, con) =>Math.max(max, con._id),0)
    return max + 1
}





export async function createNew(req, res){
    const {name, email, subject, message} = req.body
    if (!name || !email || !subject || !message){
        return res.status(400).send("invalid request")
    }
    const oldData = await readFile()
    const createdAt= new Date().toISOString()
    const _id = await newId()
    await oldData.push({_id ,name, email, subject, message, createdAt})
    const result = await saveFile(oldData)
    if (result === true)
    return res.status(201).send("success message")
}



export async function getHtmlTable(req, res){
    const contacts = await readFile()
    const sortedContacts = contacts.sort((a,b) => a.createdAt -b.createdAt)
    console.log(await sortedContacts)
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
        fetch('/contact/'+_id, {method: "DELETE"})
            .then(() => location.reload())
        }
    </script>`)
}



export async function deleteById(req, res){
    const {id} = req.params
    if (!id) return res.status(400).send("invalid request")
    const result = await deleteContact(id)
    res.send("deleted successfully")
}




// app.get('/admin', async (req, res) => {
//   const contacts = await Contact.find().sort({ createdAt: -1 });
//   // בנה HTML עם טבלה
//   const rows = contacts.map(c => `
//     <tr>
//       <td>${c.name}</td>
//       <td>${c.email}</td>
//       <td>${c.subject}</td>
//       <td>${c.message}</td>
//       <td><button onclick="del('${c._id}')">מחק</button></td>
//     </tr>
//   `).join('');
//   res.send(`<table>...</table><script>
//     function del(id) {
//       fetch('/contact/'+id, { method: 'DELETE' })
//         .then(() => location.reload());
//     }
//   </script>`);
// });
