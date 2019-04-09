const express = require('express');
const router = express.Router();
//=======================================<
const Board = require('../models/board');
const Sub = require('../models/sub');
const passport = require('passport');
const fs = require('fs-extra');
const formidable = require('formidable');

const regex = /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/;

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

function taggingUrl(url) {
    if ( regex.test(url) ) {
        url = "<a target='_blank' href='" + (url.toLowerCase().startsWith('http') ? url : 'https://' + url) + "'>" + url + "</a>";
    }
    return url;
}

router.get('/takeOnePost', function(req, res, next) {
    var num = req.query.num;
    var loggedIn = req.query.loggedIn;
    Board.findOne({_id: num}, function(err, post) {
        if ( !post ) {
            res.json({
                fail: true
            });
        } else if ( loggedIn == 'yes' ) {
            Board.findOneAndUpdate({_id: num}, {hit: post.hit + 1}, function(err, output) {
                res.json({post: output});
            });
        } else res.json({post: post});
    });
})

router.get('/takeAllPosts', function(req, res, next) {
    var type = req.query.type;
    Board.find({type: type}).sort({_id: -1}).exec(function(err, posts) {
        res.json({posts: posts});
    });
});

router.get('/takeAllBoards', function(req, res, next) {
    Sub.find({}, function(err, subs) {
        res.json({subs: subs});
    });
});

router.post('/images', function(req, res) {
    var form = formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        const filePath = files.image.path;
        const ext = files.image.name.substring(files.image.name.lastIndexOf('.')).toLowerCase();
        const name = new Date().getTime() + ext;
        fs.copy(filePath, 'public/images/board/' + name, function(err) {
            if ( err ) {
                console.log(err);
                res.json({});
            } else {
                fs.copy(filePath, 'angular-src/src/images/board/' + name, function(err) {
                    if ( err ) {
                        console.log(err);
                        res.json({});
                    } else res.json({link: 'images/board/' + name});
                });
            }
        });
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
    Board.findOne({_id: req.body._id}, function(err, post) {
        let num = 0;
        if ( post.comment.length > 0 )
            num = post.comment[post.comment.length-1].num + 1;

        // encoding html chars to entity
        let comment = req.body.comment.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
            return '&#' + i.charCodeAt(0) + ';';
        });

        let split = comment.split(' ');
        comment = '';
        for (let i=0; i<split.length-1; i++) {
            comment += taggingUrl(split[i]) + ' ';
        }
        comment += taggingUrl(split[split.length-1]);
        
        const cmtData = {
            num: num,
            writedate: getNowDate(),
            userid: req.user.userid,
            nickname: req.user.nickname,
            comment: comment
        };
        Board.findOneAndUpdate({_id: req.body._id}, {$push: {comment: cmtData}}, function(err, output) {
            if ( err ) {
                res.json({
                    success: false
                });
            } else {
                res.json({
                    success: true,
                    // post: output
                });
            }
        })
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
    
});

router.get('/checkBoardExists', function(req, res, next) {
    const type = req.query.type;
    if ( type == 'free' ) {
        res.json({exist: true});
    } else {
        Sub.findOne({url: type}, function(err, post) {
            if ( err | !post ) {
                res.json({exist: false});
            } else {
                res.json({exist: true});
            }
        });
    }
});

router.get('/sub', function(req, res, next) {
    const url = req.query.url;
    Sub.findOne({url: url}, function(err, sub) {
        res.json({sub: sub});
    });
});

//==================================================

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================

module.exports = router;
