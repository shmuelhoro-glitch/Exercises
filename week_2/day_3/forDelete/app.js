

import {createTaskManager} from "./taskManager.js";
const task = createTaskManager()
task.addTask('ssd')
task.addTask('hfg')
console.log(task.getTasks())

// console.log(task.tasks)






console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");
