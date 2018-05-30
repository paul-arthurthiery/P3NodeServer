const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const ParticleSchema = mongoose.Schema({
    content: String
}, {
    timestamps: true
});

autoIncrement.initialize(mongoose.connection);
ParticleSchema.plugin(autoIncrement.plugin, 'Particle');
module.exports = mongoose.model('Particle', ParticleSchema);
