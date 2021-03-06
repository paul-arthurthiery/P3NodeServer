const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const TemperatureSchema = mongoose.Schema({
    content: String
}, {
    timestamps: true
});

autoIncrement.initialize(mongoose.connection);
TemperatureSchema.plugin(autoIncrement.plugin, 'Temperature');
module.exports = mongoose.model('Temperature', TemperatureSchema);
