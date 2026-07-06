import {readSystemFile} from "../data/dataAccess.js";
import  {readSoldierFile} from "../data/dataAccess.js";

const systemData = await readSystemFile()
const soldiersData = await readSoldierFile()

console.log(soldiersData);












































