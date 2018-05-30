var express = require('express');
var router = express.Router();

const temperatures = require('../controllers/temperature.controller.js');

// Create a new temperature
router.post('/temperatures', temperatures.create);

// Retrieve all temperatures
router.get('/temperatures', temperatures.findAll);

// Retrieve a single temperature with temperatureId
router.get('/temperatures/:temperatureId', temperatures.findOne);

// Update a Temperature with temperatureId
router.put('/temperatures/:temperatureId', temperatures.update);

// Delete a Temperature with temperatureId
router.delete('/temperatures/:temperatureId', temperatures.delete);

module.exports = router;
