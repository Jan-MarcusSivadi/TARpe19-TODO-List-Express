/// Imports
const fs = require('fs');
const path = require('path');
const { callbackify } = require('util');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'tasks.json');

/// Export Task class
module.exports = class Task {

    // constrtuctor
    constructor(task){
        this.description = task;
    }

    // saveTask method
    saveTask(){
        fs.readFile(filePath, (error, fileContent)=>{
            let tasks = [];

            if(!error){
                tasks = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            tasks.push(this);
            fs.writeFile(filePath, JSON.stringify(tasks), (error)=>{
                if(!error) console.log('File Write success.');
                else console.log(error);
            });
        });
    }

    static fetchTasks(callBack){
        fs.readFile(filePath, (error, fileContent) => {
            if(error){
                console.log('Tasks fetch failed.');
                callBack([]);
            }

            console.log('Tasks fetch success.');
            callBack(JSON.parse(fileContent));
        });
    }
};

//{description: "Task 1"} - json
//{"description": "Task 1"} - js object