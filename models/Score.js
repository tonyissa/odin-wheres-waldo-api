const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    time: { type: Number, required: true },
    name: { type: String, required: [true, 'Name field is required'], maxLength: [15, 'Name exceeds maximum allowed characters of 15'] }
});

module.exports = mongoose.model("Score", scoreSchema);