export default class TodosAPI {
  static getAllTasks() {
    const todos = JSON.parse(localStorage.getItem("todoapp-todos") || "[]");

    if (!todos) {
      return todos;
    } else {
      return todos.sort((a, b) => {
        return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
      });
    }
  }

  static saveTask(taskToSave) {
    const todos = TodosAPI.getAllTasks();
    const existing = todos.find((task) => {
      task.id === taskToSave.id;
    });

    if (existing) {
      existing.task = taskToSave.task;
      existing.updatedOn = new Date().toISOString();
      existing.checked = taskToSave.checked;
    } else {
      taskToSave.id = Math.floor(Math.random() * 1000000);
      taskToSave.updatedOn = new Date().toISOString();
      taskToSave.checked = false;
      todos.push(taskToSave);
    }

    localStorage.setItem("todoapp-todos", JSON.stringify(todos));
  }

  static deleteTask(id) {
    const todos = TodosAPI.getAllTasks();
    const filterTasks = todos.filter((task) => task.id != id);

    localStorage.setItem("todoapp-todos", JSON.stringify(filterTasks));
  }

  static flush() {
    localStorage.setItem("todoapp-todos", "[]");
  }

  static loadSampleData() {
    const data = [
      {
        id: 67099,
        // id: Math.floor(Math.random() * 1000000),
        task: "Go get groceries",
        updatedOn: new Date().toISOString(),
        checked: false,
      },
      {
        // id: Math.floor(Math.random() * 1000000),
        id: 906639,
        task: "Dump the trash",
        updatedOn: new Date().toISOString(),
        checked: false,
      },
    ];

    localStorage.setItem("todoapp-todos", JSON.stringify(data));
  }
}
