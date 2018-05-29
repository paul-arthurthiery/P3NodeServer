var express = require('express');
var router = express.Router();

const temperatures = require('../controllers/temperature.controller.js');

// Create a new Note
router.post('/temperatures', temperatures.create);

// Retrieve all Notes
router.get('/temperatures', temperatures.findAll);

// Retrieve a single Note with noteId
router.get('/temperatures/:temperatureId', temperatures.findOne);

// Update a Note with noteId
router.put('/temperatures/:temperatureId', temperatures.update);

// Delete a Note with noteId
router.delete('/temperatures/:temperatureId', temperatures.delete);

module.exports = router;
