import fs from "fs";


// // 1
function writeFilePromise(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// writeFilePromise("data/message.txt", "Hello world")
//   .then(() => console.log("file written"))
//   .catch((err) => console.log("failed", err));


// // 2
function readFilePromise(filePath) {
  return new Promise((res, rej) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) rej(err);
      else res(data);
    });
  });
}

// readFilePromise("data/message.txt")
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));


// // 3
function readFileAndCount(filePath){
    return new Promise((res, rej) =>{
        fs.readFile(filePath,'utf8',(err,data) =>{
            if (err) rej(err)
            else res(data.length)
        })
    })
}

// readFileAndCount('data/message.txt')
//     .then((res) => console.log(res))
//     .catch((rej) => console.log(rej))


// // 4
function appendFileAsPromise(filePath, content){
    return new Promise((res,rej) => {
        fs.appendFile(filePath,content,'utf8',(err) =>{
            if (err) rej(err)
            else res()
        })
    })
}

// appendFileAsPromise('data/step1.txt','shmuel horovitz')
// .then(() => {
//     console.log("step 1 done")
//     return appendFileAsPromise('data/step2.txt','chaya rotenberg')})
//     .then(() => console.log('step 2 done'))
// .catch((err) => console.log(err))


// // 5
// let file1,file2,file3
// readFilePromise('data/step1.txt')
// .then((data) => {
//     file1 = data
//     return readFilePromise('data/step2.txt')
// })
// .then((data) => {
//     file2 = data
//     return readFilePromise('data/step3.txt')
// })
// .then((data) => {
//     file3 = data
//     return console.log(file1,file2,file3)
// })
// .catch((err) => console.log(err))



// // 6
// fs.writeFile('data/report-title.txt',"Daily Report",(err) =>{
//     if (err) return console.log(err)})
// fs.writeFile('data/report-body.txt','Everything is working',(err) => {
//     if (err) return console.log(err)
// })
// Promise.all([
//     readFilePromise('data/report-title.txt'),
//     readFilePromise('data/report-body.txt')
// ])
// .then((results) =>{
//     const title = results[0]
//     const body = results[1]
//     const titleAndBody = title+'\n'+body
//     return writeFilePromise('data/final-report.txt',titleAndBody)
// })
// .then(() =>{
//     console.log("success");
// })
// .catch((err) => {
//     console.log("failed",err);
// })


// // 7


















