const mongoose = require('mongoose');

const TemperatureSchema = mongoose.Schema({
    id: Number,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Temperature', TemperatureSchema);
