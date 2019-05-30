const mongoose = require('mongoose');
const config = require('../config/database');

// Game Schema
const GameSchema = mongoose.Schema({
    // unique value is '_id'
    userid: String,
    nickname: String,
    title: String,
    content: String,
    version: String,
    game: Object,   // game data
    block: Object,  // latest shape of the block {xml: String, moves: Number, saveby: String, savedate: String}
    boardRequest: Number,   // 0: normal, 1: requested, 2: accepted, 3: rejected
    board: String,  // url of own board
    hit: Number,
    writedate: String,
    recommend: Number,
    unrecommend: Number,
    recommendby: Array, // person who recommended or unrecommended
    comment: Array,
    top: Object,
    from: Object,
    /*
        from: {
            game: String,   // '_id' of the game
            title: String,
            userid: String,
            nickname: String
        }
    */
   added: Array,
   coworker: Array
});

const Game = module.exports = mongoose.model('Game', GameSchema);

module.exports.addPost = function(newGame, callback) {
    newGame.save(callback);
}
