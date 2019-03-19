const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Board = require('../models/board');
const User = require('../models/user');

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

router.post('/write', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    const newPost = new Board({
        type: req.body.type,
        userid: req.user.userid,
        nickname: req.user.nickname,
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

router.post('/writeComment', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    const cmtData = {
        num: new Date().getMilliseconds() + req.user.userid,
        writedate: getNowDate(),
        userid: req.user.userid,
        nickname: req.user.nickname,
        comment: req.body.comment
    };
    Board.findOneAndUpdate({_id: req.body._id}, {$push: {comment: cmtData}}, function(err, post) {
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
    Board.findOneAndDelete({_id: num}, function(err, output) {
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

router.post('/removeComment', function(req, res, next) {
    const postNum = req.body.postNum;
    const cmtNum = req.body.cmtNum;
    Board.findOne({_id: postNum}, (err, post) => {
        if ( err || !post ) res.json({success: false});
        else {
            let c;
            for (let i=0; i<post.comment.length; i++) {
                if ( post.comment[i].num == cmtNum ) {
                    c = post.comment[i];
                    break;
                }
            }
            Board.findOneAndUpdate({_id: postNum}, {$pullAll: {comment: [c]}}, (err, output) => {
                if ( err ) res.json({success: false});
                else res.json({
                    success: true,
                    post: output
                });
            });
        }
    })
})

router.post('/recommend', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    const num = req.body.num;
    Board.findOne({_id: num}, function(err, post) {
        let flag = true;
        for (let val of post.recommend) {
            if ( val == req.user.userid ) {
                flag = false;
                break;
            }
        }
        if ( !flag ) {
            res.json({
                success: false,
                msg: '이미 추천하셨습니다.'
            });
        } else {
            Board.findOneAndUpdate({_id: num}, {$push: {recommend: req.user.userid}}, function(err, output) {
                if ( err ) {
                    res.json({
                        success: false,
                        msg: err
                    });
                } else res.json({
                    success: true,
                    recommend: output.recommend.length
                });
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
