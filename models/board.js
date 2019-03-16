const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
  recommend: Number,
  recommendby: Array,
  comment: Array
  /*
    comment: {
        num: Number,
        writedate: String,
        userid: String,
        nickname: String,
        comment: String
    }
  */
  // image, tag, or others can be here
});

const Board = module.exports = mongoose.model('Board', BoardSchema);

function set2LetterFormat(num) {
    num = num >= 10 ? num : '0' + num;
    return num;
}

module.exports.addPost = function(newPost, callback) {
    let date = new Date();
    newPost.writedate = date.getFullYear() + "-" + set2LetterFormat(date.getMonth() + 1) + "-" + set2LetterFormat(date.getDate()) + " " + set2LetterFormat(date.getHours()) + ":" + set2LetterFormat(date.getMinutes()) + ":" + set2LetterFormat(date.getSeconds());
    newPost.save(callback);
}

module.exports.addComment = function(postInfo, newComment, callback) {
    // postInfo: { type: postType, num: postNum }
    Board.findOne({type: postInfo.type, num: postInfo.num}, function(err, post) {
        // if ( err ) throw err;
        let num = 0;
        if ( post.comment.length > 0 ) {
            for (let i=0; i<post.comment.length; i++) {
                if ( num < post.comment[i].num )
                    num = post.comment[i].num;
            }
            num++;
        }
        newComment.num = num;
        let date = new Date();
        newComment.writedate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
        Board.updateOne({type: postInfo.type, num: postInfo.num}, {$push: {comment: newComment}}, function(err1, output) {});
    });
}
