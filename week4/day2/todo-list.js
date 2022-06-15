// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, txt) {
  const task = {
    task: title,
    discription :txt,
    comp: false,
    markCompleted :function() {
      task.comp = true
    },
    logState :function() {
      console.log(`${this.task} has${this.comp ? ' ' : ' not '}been completed`);
    },
  };
  // taskTitles.push(task)
  return task
}
// const task0 = newTask('Clean Cat Litter')


// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskIndex.task;
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? ' ' : ' not '}been completed`);
// }

// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box'); // task 0
const task2 = newTask('Do Laundry','😨' ); // task 1
const tasks = [task1, task2]

// console.log(taskTitles);
// console.log(taskComplete);

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed


task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
console.log(tasks);