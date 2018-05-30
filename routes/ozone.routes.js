var express = require('express');
var router = express.Router();

const ozones = require('../controllers/ozone.controller.js');

// Create a new ozone
router.post('/ozones', ozones.create);

// Retrieve all ozones
router.get('/ozones', ozones.findAll);

// Retrieve a single ozone with ozoneId
router.get('/ozones/:ozoneId', ozones.findOne);

// Update a Ozone with ozoneId
router.put('/ozones/:ozoneId', ozones.update);

// Delete a Ozone with ozoneId
router.delete('/ozones/:ozoneId', ozones.delete);

module.exports = router;
