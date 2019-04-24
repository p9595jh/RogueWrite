const mongoose = require('mongoose');
const config = require('../config/database');

// Temp Schema
const TempSchema = mongoose.Schema({
    // unique value is '_id'
    user: String,   // '_id' of the user
    block: Array,    // moves of the blocks
    title: String,
    savedate: String,
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
   coworker: Array,  // string array
   requested: Array
});

const Temp = module.exports = mongoose.model('Temp', TempSchema);

module.exports.add = function(newGame, callback) {
    newGame.save(callback);
}
