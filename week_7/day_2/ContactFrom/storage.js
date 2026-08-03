import fs from "fs/promises"


export async function readFile(){
    const data = await fs.readFile('./db.json','utf8')
    const answer = await JSON.parse(data)
    return answer
}

// console.log(await readFile());


export async function saveFile(data){
    try{
    const result = await fs.writeFile('./db.json',JSON.stringify(data, null, 2))
    return true
    }
    catch (err) {
        return err.message
    }
}

