const Ozone = require('../models/ozone.model.js');

// Create and Save a new Ozone
exports.create = (req, res) => {
  // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Ozone content can not be empty"
        });
    }

    // Create a Ozone
    const ozone = new Ozone({
        content: req.body.content
    });

    // Save Ozone in the database
    ozone.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Ozone."
        });
    });
};

// Retrieve and return all ozones from the database.
exports.findAll = (req, res) => {
  Ozone.find()
    .then(ozones => {
        res.send(ozones);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving ozones."
        });
    });
};

// Find a single ozone with a ozoneId
exports.findOne = (req, res) => {
  Ozone.findById(req.params.ozoneId)
    .then(ozone => {
        if(!note) {
            return res.status(404).send({
                message: "Ozone not found with id " + req.params.ozoneId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ozone not found with id " + req.params.ozoneId
            });
        }
        return res.status(500).send({
            message: "Error retrieving ozone with id " + req.params.ozoneId
        });
    });
};

// Update a ozone identified by the ozoneId in the request
exports.update = (req, res) => {
  //Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Ozone content can not be empty"
        });
    }

    // Find note and update it with the request body
    Ozone.findByIdAndUpdate(req.params.ozoneId, {
        title: req.body.title || "Untitled Ozone",
        content: req.body.content
    }, {new: true})
    .then(ozone => {
        if(!ozone) {
            return res.status(404).send({
                message: "Ozone not found with id " + req.params.ozoneId
            });
        }
        res.send(ozone);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Ozone not found with id " + req.params.ozoneId
            });
        }
        return res.status(500).send({
            message: "Error updating ozone with id " + req.params.ozoneId
        });
    });
};

// Delete a ozone with the specified ozoneId in the request
exports.delete = (req, res) => {
  Ozone.findByIdAndRemove(req.params.ozoneId)
    .then(ozone => {
        if(!ozone) {
            return res.status(404).send({
                message: "Ozone not found with id " + req.params.ozoneId
            });
        }
        res.send({message: "Ozone deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Ozone not found with id " + req.params.ozoneId
            });
        }
        return res.status(500).send({
            message: "Could not delete ozone with id " + req.params.ozoneId
        });
    });
};
