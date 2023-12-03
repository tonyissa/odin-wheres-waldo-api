const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coordSchema = new Schema({}, { strict: false });

module.exports = mongoose.model('Coords', coordSchema);