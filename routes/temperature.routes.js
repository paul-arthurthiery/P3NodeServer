var express = require('express');
var router = express.Router();

const temperatures = require('../controllers/temperature.controller.js');

// Create a new Note
router.post('/temperatures', temperatures.create);

// Retrieve all Notes
router.get('/temperatures', temperatures.findAll);

// Retrieve a single Note with noteId
router.get('/:temperatureId', temperatures.findOne);

// Update a Note with noteId
router.put('/:temperatureId', temperatures.update);

// Delete a Note with noteId
router.delete('/:temperatureId', temperatures.delete);

module.exports = router;
