/// Imports
const fs = require('fs');
const path = require('path');
const { callbackify } = require('util');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'tasks.json');

/// Export Task class
module.exports = class Task {

    // constrtuctor
    constructor(task) {
        this.description = task;
    }

    // saveTask method
    saveTask() {
        fs.readFile(filePath, (error, fileContent) => {
            let tasks = [];

            if (!error) {
                tasks = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            tasks.push(this);
            fs.writeFile(filePath, JSON.stringify(tasks), (error) => {
                if (!error) console.log('CREATE: ' + 'File Write success.');
                else console.log(error);
            });
        });
    }

    static fetchTasks(callBack) {
        fs.readFile(filePath, (error, fileContent) => {
            if (error) {
                console.log('READ: ' + 'Tasks fetch failed.');
                callBack([]);
            }

            console.log('READ: ' + 'Tasks fetch success.');
            callBack(JSON.parse(fileContent));
        });
    }

    static deleteTask(taskDescription) {
        fs.readFile(filePath, (error, fileContent) => {
            let tasks = [];
            if (!error) {
                tasks = JSON.parse(fileContent);
            }

            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].description === taskDescription) {
                    tasks.splice(i, 1);
                    break;
                }
            }

            fs.writeFile(filePath, JSON.stringify(tasks), (error) => {
                if (!error) console.log('DELETE: ' + "\'" + taskDescription + "\'" + ' deleted successfully.');
                else console.log(error);
            });
        });
    }
};

//{description: "Task 1"} - json
//{"description": "Task 1"} - js object