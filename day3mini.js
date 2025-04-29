const tasks=[
     { name: "Study", priority: 3 },
     { name: "Shop", priority: 1 }, 
     { name: "Call", priority: 2 }
    ];


const prioritizeTasks=()=>{
    let taskCounter =0
    const prioritize=(tasksArray,minpriority=1)=>{
            taskCounter++
            const filtered =tasksArray.filter((task)=>{
                return task.priority >= minpriority
            })
            filtered.sort((task_a,task_b)=>task_b.priority-task_a.priority)
            return filtered
    }
    prioritize.gettaskCounter=()=> taskCounter;
    return prioritize
}
const prioritize = prioritizeTasks();
const result = prioritize(tasks, 2);
console.log("Filtered tasks:", result);
console.log("Called prioritize", prioritize.gettaskCounter(), "time(s)");
