const mongoose = require('mongoose');
const config = require('../config/database');

// Sub Schema
const SubSchema = mongoose.Schema({
    url: String,
    title: String,
    gameid: String, // _id of game
    createdate: String
});

const Sub = module.exports = mongoose.model('Sub', SubSchema);

module.exports.add = function(newSub, callback) {
    newSub.save(callback);
}
