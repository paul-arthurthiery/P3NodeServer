const Particle = require('../models/particle.model.js');

// Create and Save a new Particle
exports.create = (req, res) => {
  // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Particle content can not be empty"
        });
    }

    // Create a Particle
    const particle = new Particle({
        content: req.body.content
    });

    // Save Particle in the database
    particle.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Particle."
        });
    });
};

// Retrieve and return all particles from the database.
exports.findAll = (req, res) => {
  Particle.find()
    .then(particles => {
        res.send(particles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving particles."
        });
    });
};

// Find a single particle with a particleId
exports.findOne = (req, res) => {
  Particle.findById(req.params.particleId)
    .then(particle => {
        if(!note) {
            return res.status(404).send({
                message: "Particle not found with id " + req.params.particleId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Particle not found with id " + req.params.particleId
            });
        }
        return res.status(500).send({
            message: "Error retrieving particle with id " + req.params.particleId
        });
    });
};

// Update a particle identified by the particleId in the request
exports.update = (req, res) => {
  //Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Particle content can not be empty"
        });
    }

    // Find note and update it with the request body
    Particle.findByIdAndUpdate(req.params.particleId, {
        title: req.body.title || "Untitled Particle",
        content: req.body.content
    }, {new: true})
    .then(particle => {
        if(!particle) {
            return res.status(404).send({
                message: "Particle not found with id " + req.params.particleId
            });
        }
        res.send(particle);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Particle not found with id " + req.params.particleId
            });
        }
        return res.status(500).send({
            message: "Error updating particle with id " + req.params.particleId
        });
    });
};

// Delete a particle with the specified particleId in the request
exports.delete = (req, res) => {
  Particle.findByIdAndRemove(req.params.particleId)
    .then(particle => {
        if(!particle) {
            return res.status(404).send({
                message: "Particle not found with id " + req.params.particleId
            });
        }
        res.send({message: "Particle deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Particle not found with id " + req.params.particleId
            });
        }
        return res.status(500).send({
            message: "Could not delete particle with id " + req.params.particleId
        });
    });
};
