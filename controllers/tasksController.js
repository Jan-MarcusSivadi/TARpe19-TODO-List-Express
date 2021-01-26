/// Imports
const date = require('../getDate.js');
const Task = require('../models/task');

/// Exports
// Render main Page
exports.getMainPage = (req, res) => {
    Task.fetchTasks(tasks => {
        let today = {
            date: date.getDate(),
            weekday: date.getWeekDay()
        };

        console.log(tasks);
        res.render('index.ejs', { date: today, todoItems: tasks });
    });  
};
// POST new Task
exports.postNewTask = (req, res) => {
    let item = new Task(req.body.newTask);
    item.saveTask();
    res.redirect('/');
};
// Delete Task
exports.deleteTask = (req, res) =>{
    Task.deleteTask(req.body.checkbox);
    res.redirect('/');
};