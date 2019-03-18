const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const Board = require('../models/board');

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
        writedate: ''
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

//==================================================

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================

module.exports = router;
