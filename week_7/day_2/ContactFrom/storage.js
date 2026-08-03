import fs from "fs/promises"

export async function readFile(){
    const data = await fs.readFile('./db.json','utf8')
    const answer = JSON.parse(data)
    return answer
}


export async function saveFile(data){
    try{
    const result = await fs.writeFile('./db.json',JSON.stringify(data, null, 2))
    return true
    }
    catch (err) {
        return err.message
    }
}

export async function deleteContact(id){
    const data = await readFile()
    const conForDel = data.findIndex(con => con._id === Number(id))
    if (conForDel === -1) {throw new Error("not found")}
    data.splice(conForDel, 1)
    const result = await saveFile(data)
    return result
}

