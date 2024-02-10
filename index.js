function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "take the 💩 out");
const task2 = newTask("Do Laundry", "🧺");
const tasks = [task1, task2];


task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);

