const express = require('express');
const tasksController = require('../controllers/tasksController');
const error404Controller = require('../controllers/error404Controller');
const router = express.Router();

router.get('/', tasksController.getMainPage);
router.get('*', error404Controller.getErrorPage);

module.exports = router;
