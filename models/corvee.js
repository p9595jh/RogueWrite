const mongoose = require('mongoose');
const config = require('../config/database');

// Game Schema
const CorveeSchema = mongoose.Schema({
    // unique value is '_id'
    userid: String,
    nickname: String,
    title: String,
    content: String,
    hit: Number,
    writedate: String,
    recommend: Array,
    comment: Array
});

const Corvee = module.exports = mongoose.model('Corvee', CorveeSchema);

module.exports.addPost = function(corvee, callback) {
    corvee.save(callback);
}
