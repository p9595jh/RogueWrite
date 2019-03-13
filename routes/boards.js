const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const Board = require('../models/board');

router.get('/takeOnePost', function(req, res, next) {
    type = req.query.type;
    num = req.query.num;
    Board.findOne({type: type, num: num}, function(err, post) {
        if ( req.user.userid != post.userid ) {
            let hit = post.hit + 1;
            Board.findOne({type: type, num: num}, {hit: hit}, function(err, post) {});
        }
        res.json({post: post});
    });
})

router.get('/takeAllPosts', function(req, res, next) {
    type = req.query.type;
    Board.find({type: type}).sort({num:-1}).exec(function(err, posts) {
        res.json({posts: posts});
    });
})

router.post('/write', function(req, res, next) {
    const newUser = new User({
        type: req.body.type,
        // user data will be placed here
    });
})

//==================================================

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================

module.exports = router;
