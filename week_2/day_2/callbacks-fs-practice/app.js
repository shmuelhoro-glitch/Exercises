import fs from "fs"
import { monitorEventLoopDelay } from "perf_hooks";


// // 1
// fs.writeFile('data/message.txt',"Hello from Node fs!",(err) => {
//     if (err) return console.log(err)
//     else return console.log("File was created successfully");
// })

// // 2
// fs.readFile('data/message.txt','utf8',(err,data) => {
//     if (err) return console.log(err);
//     else return console.log(data);
// })

// // 3
// console.log('Start');
// fs.readFile('data/message.txt','utf8',(err,data)=> console.log(data))
// console.log('End');


// // 4
// fs.readFile('data/not-exist.txt','utf8',(err,data)=> {
//     if (err) return console.log("Could not read file\n",err);
//     else return console.log(data);
// })

// // 5 
// function readTextFile(filePath,callback){
//     fs.readFile(filePath,'utf8',(err,data)=>{
//         if (err) return callback(err)
//         else return callback(null,data)
// })}

// readTextFile('data/message.txt', function (err, content) {
//   if (err) {
//     console.log('Error:', err);
//     return;
//   }
//   console.log(content);
// });



// // 6
// fs.appendFile('data/message.txt','\nThis line was added later.',(err)=> {
//     if (err) return console.log(err);
//     else {
//         fs.readFile('data/message.txt','utf8',(err,data) => {
//             if (err) return console.log(err);
//             else return console.log(data);
//         })
//     }
    
// })


// // 7
// fs.writeFile('data/log.txt','Log started',(err) =>{ 
//     if (err) return console.log(err);
//     else {fs.appendFile('data/Log.txt','\nFirst action completed\nSecond action completed',(err) => {
//         if (err) return console.log(err);
//         else {fs.readFile('data/Log.txt','utf8',(err,data) => {
//             if (err) return console.log(err);
//             else return console.log(data);
//         })}
//     })}
// })



// // 8
// fs.mkdir('data/users',{recursive:true},(err) =>{
//     if (err) return console.log("is already exists",err);
//     else return console.log("Users folder created");
// })

// // 9
// if (fs.existsSync('data/users/user1.txt')){
//     console.log("exists");}
// else {
//     const name = "David";
//     const age = 25;
//     fs.writeFile('data/users/user1.txt',`Name:${name} \nAge:${age}`,'utf8',(err) =>{
//         if (err) return console.log(err);
//         else return console.log("created successfully");
// })}
        

// // 10
// fs.readdir('data','utf8',(err,data) => {
//     if (err) return console.log(err);
//     else return console.log(data);
// })


// // 11
// fs.writeFile('data/step1.txt','Step 1 completed\n',(err) => {
//     fs.writeFile('data/step2.txt','Step 2 completed\n',(err) =>{
//        fs.writeFile('data/step3.txt','Step 3 completed\n',(err) => {return console.log("All steps completed")})
//     })
// })


// // 12
// fs.readFile('data/step1.txt','utf8',(err,data1) => {
//     fs.readFile('data/step2.txt','utf8',(err,data2) => {
//         fs.readFile('data/step3.txt','utf8',(err,data3) => {
//             return console.log(data1,data2,data3)
//         })
//     })
// })


// // 13
// fs.writeFile('data/report-title.txt','Daily Report\n',(err) => {
//     fs.writeFile('data/report-body.txt',"Everything is working\n",(err) =>{
//         fs.readFile('data/report-title.txt',(err,data1) => {
//             fs.readFile('data/report-body.txt',(err,data2) =>{
//                 fs.writeFile('data/final-report.txt',data1 + data2,(err) => {
//                     if (err) return console.log(err);
                    
//                 })
//             })
//         })
//     })
// })



// // 14
// fs.writeFile('data/original.txt','Original file content\n',(err) => {
//     if (err) return console.log(err);
//     fs.readFile('data/original.txt','utf8',(err,data) =>{
//         fs.writeFile('data/copy.txt',data,(err) => console.log(data))
//     })
// })












