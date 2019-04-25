const mongoose = require('mongoose');
const config = require('../config/database');

// Game Schema
const CorveeSchema = mongoose.Schema({
    // unique value is '_id'
    userid: String,
    nickname: String,
    title: String,
    content: String,
    block: Object,  // {xml: string, from: any, added: array, coworker: array}
    hit: Number,
    writedate: String,
    recommend: Array,
    comment: Array
});

const Corvee = module.exports = mongoose.model('Corvee', CorveeSchema);

module.exports.addPost = function(corvee, callback) {
    corvee.save(callback);
}
