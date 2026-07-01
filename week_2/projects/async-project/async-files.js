const fs = require("fs");

// fs.readFile('./input.txt','utf8',(err,data) => {
//     if (err) console.log(`error at read: <${err}>`)
//     else console.log(`files' data: ${data}`)
// });

// fs.writeFile('output.txt','write success by Node.js!',(err) => {
//     if (err) return console.error(`error at write <${err}>`)
//     else console.log('the file written successfully')
// });

// fs.readFile("./input.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(`error at read: <${err}>`);
//     return;
//   }
//   const upperData = data.toUpperCase();

//   fs.writeFile("output-upper.txt", upperData, (err) => {
//     if (err) console.log(err);
//     return;
//   });
//   console.log("all done successfully");
// });


// const fsPromise = require("fs").promises

// fsPromise.readFile('./input.txt','utf8')
// .then(res =>{console.log('i read with Promise\n',res)})
// .catch(err => {console.error(err.message)})


// fsPromise.readFile('./input.txt','utf8')
// .then(data => {
//     const upperData = data.toUpperCase()
//     return fsPromise.writeFile('upperWithPromise.txt',upperData)
// })
// .then(res => console.log("success"))
// .catch(err => console.error(err.message))





// answers
// 1
// ברגיל צריך להשתמש בקולבק כדי לתפוס את מה שחוזר ואז לשלוח ידנית כל אחד דרך התנאי המתאים
// וגם עם רוצים שיחזור אובייקט של פרומיס אז צריך ליצור אותו ידנית

// 2
// כי כל חלק מעביר האלה בעזרת קולבקים פנימיים ולכן זה נהיה כמו פרמידה שבנויה אחד על השניה

// 3
// זה קריא ומובן יותר וגם מאפשר לנו לתפוס דווקא אם הצליח ואם לא הצליח אפשר בקלות להחזיר שגיאה בעזרת קאצ

// 4
// אם לא שמים return אז הthan הבא לא יקבל כלום כי הוא מקבל רק אובייקט של פרומיס