module.exports = (app) => {
    const temperatures = require('../controllers/temperature.controller.js');

    // Create a new Note
    app.post('/temperatures', temperatures.create);

    // Retrieve all Notes
    app.get('/temperatures', temperatures.findAll);

    // Retrieve a single Note with noteId
    app.get('/temperatures/:temperatureId', temperatures.findOne);

    // Update a Note with noteId
    app.put('/temperatures/:temperatureId', temperatures.update);

    // Delete a Note with noteId
    app.delete('/temperatures/:temperatureId', temperatures.delete);
}
