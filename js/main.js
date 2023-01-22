import TodosAPI from "./TodoAPI.js";

TodosAPI.flush();

TodosAPI.loadSampleData();

TodosAPI.saveTask({
  task: "go get groceries 2",
});

TodosAPI.saveTask({
  task: "go get groceries 3",
});

TodosAPI.deleteTask(67099);

console.log(TodosAPI.getAllTasks());
