const mongoose = require('mongoose');
const config = require('../config/database');

// Board Schema
const BoardSchema = mongoose.Schema({
    // unique value is '_id'
    type: String,
    userid: String,
    nickname: String,
    title: String,
    content: String,
    hit: Number,
    writedate: String,
    recommend: Array,
    comment: Array
    /*
        each comment: {
            num: String,    // millisecond + userid
            writedate: String,
            userid: String,
            nickname: String,
            comment: String,
            cmtTo: {
                userid: String,
                nickname: String
            }
        }
    */
    // image, tag, or others can be here
});

const Board = module.exports = mongoose.model('Board', BoardSchema);

module.exports.addPost = function(newPost, callback) {
    newPost.save(callback);
}
