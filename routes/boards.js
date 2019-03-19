const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const Board = require('../models/board');

function set2LetterFormat(num) {
    num = num >= 10 ? num : '0' + num;
    return num;
}

function getNowDate() {
    let date = new Date();
    return date.getFullYear() + "-"
    + set2LetterFormat(date.getMonth() + 1) + "-"
    + set2LetterFormat(date.getDate()) + " "
    + set2LetterFormat(date.getHours()) + ":"
    + set2LetterFormat(date.getMinutes()) + ":"
    + set2LetterFormat(date.getSeconds());
}

router.get('/takeOnePost', function(req, res, next) {
    var num = req.query.num;
    Board.findOne({_id: num}, function(err, post) {
        if ( req.user && req.user.userid != post.userid ) {
            let hit = post.hit + 1;
            Board.findOneAndUpdate({_id: num}, {hit: hit}, function(err, post) {});
        }
        res.json({post: post});
    });
})

router.get('/takeAllPosts', function(req, res, next) {
    var type = req.query.type;
    Board.find({type: type}).sort({_id: -1}).exec(function(err, posts) {
        res.json({posts: posts});
    });
})

router.post('/write', function(req, res, next) {
    const newPost = new Board({
        type: req.body.type,
        userid: req.body.userid,
        nickname: req.body.nickname,
        title: req.body.title,
        content: req.body.content,
        hit: 0,
        recommend: [],
        comment: [],
        writedate: getNowDate()
    });
    Board.addPost(newPost, (err, post) => {
        if ( err ) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                num: post._id
            });
        }
    });
})

router.post('/writeComment', function(req, res, next) {
    let cmtData = {
        num: new Date().getMilliseconds() + req.user.userid,
        writedate: getNowDate(),
        userid: req.user.userid,
        nickname: req.user.nickname,
        comment: req.body.comment,
    };
    if ( req.body.cmtTo ) {
        cmtData.cmtTo = {
            userid: req.body.cmtToUserid,
            nickname: req.body.cmtToNickname
        };
    }
    Board.updateOne({_id: req.body.num}, {$push: {comment: cmtData}}, function(err, post) {
        if ( err ) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                post: post
            });
        }
    })

})

router.post('/removePost', function(req, res, next) {
    const num = req.body.num;
    Board.findOneAndRemove({_id: num}, function(err, output) {
        if ( err ) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true
            })
        }
    })
})

//==================================================

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================

module.exports = router;
