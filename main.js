const fs = require("fs");

class TodoAPI {
  static addTask(text) {
    this.task = text;
    this.id = Date.now();
    this.checked = false;
  }

  static updateTask(id, newText) {
    let allTasks = JSON.parse(
      fs.readFileSync("data.json", "utf-8", (err, data) => {
        if (err) {
          throw Error(err);
        } else {
          return data;
        }
      })
    );

    const taskIndex = allTasks.findIndex((item) => item.id === id);
    allTasks[taskIndex].task = newText;
  }
}

TodoAPI.updateTask(567896548376, "Do epic shit");

// fs.writeFileSync("data.txt", "hello world", "utf8", (err) => {
//   if (err) {
//     throw Error(err);
//   } else console.log("File has been saved");
// });

// fs.readFile("data.json", "utf8", async (err, data) => {
//   if (err) {
//     throw Error(err);
//   } else {
//     const result = await JSON.parse(data);
//     console.log(result);
//   }
// });
