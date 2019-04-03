var express = require('express');
var router = express.Router();
//=======================================<
const Game = require('../models/game');
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
    if ( regex.test(url) )
        url = "<a target='_blank' href='" + (url.toLowerCase().startsWith('http') ? url : 'https://' + url) + "'>" + url + "</a>";
    return url;
}

router.get('/', function(req, res, next) {
    res.send('/');
});

//=============================================================

router.get('/tool', function(req, res, next) {
    res.render('tool', {
        title: 'TOOL'
    });
});

router.get('/editor', function(req, res, next) {
    res.render('tool-editor', {
        title: 'TOOL-EDITOR',
        defaultText: req.query.tags
    });
});

router.post('/images', function(req, res, next) {
    var form = formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        const filePath = files.image.path;
        const ext = files.image.name.substring(files.image.name.lastIndexOf('.')).toLowerCase();
        const name = new Date().getTime() + ext;
        fs.copy(filePath, 'public/images/game/' + name, function(err) {
            if ( err ) {
                console.log(err);
                res.json({});
            } else {
                fs.copy(filePath, 'angular-src/src/images/game/' + name, function(err) {
                    if ( err ) {
                        console.log(err);
                        res.json({});
                    } else res.json({link: '../images/game/' + name});
                });
            }
        });
    });
});

function isNotValid(s) {
    return s == undefined || s == '';
}

function lucky(s) {
    const arr = [ '+', '-', '*', '/', '(', ')', ' ' ];
    for (let l of arr)
        if ( s == l ) return true;
    return false;
}

router.post('/save', function(req, res, next) {
    // title(string), stage(array), param(array), score(string)
    const data = {
        title: req.body.title,
        stage: req.body.stage,
        param: req.body.param,
        score: req.body.score
    };

    if ( isNotValid(data.title) ) {
        return res.json({success: false, msg: '제목이 비어있습니다.'});
    } else if ( data.param.length == 0 ) {
        return res.json({success: false, msg: '파라미터가 비어있습니다.'});
    } else if ( data.stage.length == 0 ) {
        return res.json({success: false, msg: '스테이지가 비어있습니다.'});
    } else if ( isNotValid(data.score) ) {
        return res.json({success: false, msg: '점수계산이 비어있습니다.'});
    } else {
        const pattern = /^[a-zA-Z0-9]*$/;
        for (let i=0; i<data.score.length; i++) {
            if ( !pattern.test(data.score.substring(i, i+1)) ) {
                if ( !lucky(data.score.substring(i, i+1)) ) {
                    return res.json({success: false, msg: '점수계산이 잘못되었습니다.'});
                }
            }
        }
        req.session.data = data;
        res.json({success: true});
    }
    
});

//=============================================================

router.post('/write', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    if ( !req.session.data ) {
        res.json({success: false, msg: '먼저 저장을 해야 합니다.'});
    } else {
        const newGame = new Game({
            userid: req.user.userid,
            nickname: req.user.nickname,
            title: req.session.data.title,
            content: req.body.content,
            game: req.session.data,
            boardRequest: 0,
            hit: 0,
            recommend: 0,
            unrecommend: 0,
            recommendby: [],
            comment: [],
            writedate: getNowDate()
        });
        Game.addPost(newGame, (err, post) => {
            if ( err ) {
                res.json({
                    success: false
                });
            } else {
                req.session.destroy();
                res.clearCookie('sid');
                res.json({
                    success: true,
                    num: post._id
                });
            }
        });
    }
});

//=============================================================

router.get('/takeOnePost', function(req, res, next) {
    var num = req.query.num;
    var loggedIn = req.query.loggedIn;
    Game.findOne({_id: num}, function(err, post) {
        if ( !post ) {
            res.json({
                fail: true
            });
        } else if ( loggedIn == 'yes' ) {
            Game.findOneAndUpdate({_id: num}, {hit: post.hit + 1}, function(err, output) {
                res.json({post: output});
            });
        } else res.json({post: post});
    });
})

router.get('/takeAllPosts', function(req, res, next) {
    Game.find({}).sort({_id: -1}).exec(function(err, posts) {
        res.json({posts: posts});
    });
})

router.post('/writeComment', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    Game.findOne({_id: req.body._id}, function(err, post) {
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
        Game.findOneAndUpdate({_id: req.body._id}, {$push: {comment: cmtData}}, function(err, output) {
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
    Game.findOneAndDelete({_id: num}, function(err, output) {
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
    Game.findOne({_id: postNum}, (err, post) => {
        if ( err || !post ) res.json({success: false});
        else {
            let c;
            for (let i=0; i<post.comment.length; i++) {
                if ( post.comment[i].num == cmtNum ) {
                    c = post.comment[i];
                    break;
                }
            }
            Game.findOneAndUpdate({_id: postNum}, {$pullAll: {comment: [c]}}, (err, output) => {
                if ( err ) res.json({success: false});
                else res.json({
                    success: true,
                    post: output
                });
            });
        }
    })
});

router.post('/recommend', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    const num = req.body.num;
    const isRecommend = req.body.isRecommend;
    Game.findOne({_id: num}, function(err, post) {
        let flag = true;
        for (let val of post.recommendby) {
            if ( val == req.user.userid ) {
                flag = false;
                break;
            }
        }
        if ( !flag ) {
            res.json({
                success: false,
                msg: '이미 추천/비추천 하셨습니다.'
            });
        } else {
            Game.findOneAndUpdate({_id: num}, {$push: {recommendby: req.user.userid}}, function(err, output) {
                if ( err ) {
                    res.json({
                        success: false,
                        msg: err
                    });
                } else {
                    if ( isRecommend ) {
                        let l = output.recommend + 1;
                        Game.findOneAndUpdate({_id: num}, {recommend: l}, function(err, output2) {
                            if ( err ) {
                                res.json({
                                    success: false,
                                    msg: err
                                });
                            } else res.json({
                                success: true,
                                recommend: output2.recommend
                            });
                        })
                    } else {
                        let l = output.unrecommend + 1;
                        Game.findOneAndUpdate({_id: num}, {unrecommend: l}, function(err, output2) {
                            if ( err ) {
                                res.json({
                                    success: false,
                                    msg: err
                                });
                            } else res.json({
                                success: true,
                                recommend: output2.unrecommend
                            });
                        })
                    }
                    
                }
            })
        }
    })
    
})

//=============================================================

module.exports = router;
