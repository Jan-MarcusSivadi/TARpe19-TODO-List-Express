/// Imports
const express = require('express');
const tasksController = require('../controllers/tasksController');
const error404Controller = require('../controllers/error404Controller');
const router = express.Router();

/// Routes
// main page
router.get('/', tasksController.getMainPage);
// post new task
router.post('/', tasksController.postNewTask);
// error 404
router.get('*', error404Controller.getErrorPage);

module.exports = router;
