const mongoose = require('mongoose');
const config = require('../config/database');

// Temp Schema
const TempSchema = mongoose.Schema({
    // unique value is '_id'
    user: String,   // '_id' of a user
    block: Array,    // moves of the block
    content: String,
    title: String
});

const Temp = module.exports = mongoose.model('Temp', TempSchema);

module.exports.add = function(newGame, callback) {
    newGame.save(callback);
}
