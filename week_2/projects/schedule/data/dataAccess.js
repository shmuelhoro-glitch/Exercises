import fs from "fs/promises";

export async function readSoldierFile() {
  try {
    const data = await fs.readFile('./soldiers.json', "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return;
  }
}

export async function readSystemFile(){
  try{
    const data = await fs.readFile('./system.json','utf8')
    return JSON.parse(data)
  }
  catch (err) {console.log(err)}
  return
}



export async function saveSoldiers(updateData){
  try {
    await fs.writeFile('./soldiers.json',JSON.stringify(updateData,null,2))
    console.log('saved successfully')
  }
  catch (err) {
    console.log('error ' + err)
  }
}
