

export function createTaskManager(){
    const tasks = []
    const addTask = (taskName) => tasks.push(taskName)
    const getTasks = () => tasks
    return {addTask,getTasks}
}

