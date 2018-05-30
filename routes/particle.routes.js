var express = require('express');
var router = express.Router();

const particles = require('../controllers/particle.controller.js');

// Create a new particle
router.post('/particles', particles.create);

// Retrieve all particles
router.get('/particles', particles.findAll);

// Retrieve a single particle with particleId
router.get('/:particleId', particles.findOne);

// Update a Particle with particleId
router.put('/:particleId', particles.update);

// Delete a Particle with particleId
router.delete('/:particleId', particles.delete);

module.exports = router;
