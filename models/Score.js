const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    time: { type: Number, required: true },
    name: { type: String, required: true, maxLength: 15 }
});

module.exports = mongoose.model("Score", scoreSchema);