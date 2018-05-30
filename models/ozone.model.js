const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const OzoneSchema = mongoose.Schema({
    content: String
}, {
    timestamps: true
});

autoIncrement.initialize(mongoose.connection);
OzoneSchema.plugin(autoIncrement.plugin, 'Ozone');
module.exports = mongoose.model('Ozone', OzoneSchema);
