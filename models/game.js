const mongoose = require('mongoose');
const config = require('../config/database');

// Game Schema
const GameSchema = mongoose.Schema({
    // unique value is '_id'
    userid: String,
    nickname: String,
    title: String,
    content: String,
    game: Object,   // game data
    boardRequest: Number,   // 0: normal, 1: requested, 2: accepted
    hit: Number,
    writedate: String,
    recommend: Number,
    unrecommend: Number,
    recommendby: Array, // person who recommended or unrecommended
    comment: Array
});

const Game = module.exports = mongoose.model('Game', GameSchema);

module.exports.addPost = function(newPost, callback) {
    newPost.save(callback);
}
