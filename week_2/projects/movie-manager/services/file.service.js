import fs from "fs"


export function readFileCB(callback){
     fs.readFile('../data/movies.json','utf8',callback)
    }


export function writeFileCB(data,callback){
    fs.writeFile('../data/movies.json',data,callback)
}



export function readFile(){
    return new Promise((resolve,reject) =>{
        fs.readFile('../data/movies.json','utf8',(err,data) => {
            if (err) reject(err)
            else resolve(JSON.parse(data))
        })
    })
}


export function writeFile(data){
    return new Promise((resolve,reject) =>{
        fs.writeFile('../data/movies.json',data,(err) =>{
            if (err) reject(err.message)
            else resolve()
        })
    })
}



















































