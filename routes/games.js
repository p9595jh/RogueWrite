var express = require('express');
var router = express.Router();
//=======================================<
const Game = require('../models/game');
const Temp = require('../models/temp');
const Sub = require('../models/sub');
const User = require('../models/user');
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

// for pug =============================================================

router.get('/tool', function(req, res, next) {
    if ( req.session.code && req.session.code == req.query.c && req.session.uid == req.query.uid ) {
        const blockId = req.query._id;
        const uid = req.query.uid;
        if ( blockId ) {
            Temp.findOne({_id: blockId}, {block: 1, _id: 1}, (err, output) => {
                if ( err | !output ) {
                    res.render('tool', {
                        title: 'TOOL',
                        uid: uid,
                        block: false,
                        c: req.session.code
                    });
                } else {    // load temp data
                    Temp.find({$or: [{user: uid}, {coworker: {$in: [uid]}}]}, {block: 0, coworker: 0}, (err, outputs) => {
                        res.render('tool', {
                            title: 'TOOL',
                            temp: output._id,
                            uid: uid,
                            temps: outputs,
                            block: output.block[output.block.length-1].xml,
                            c: req.session.code
                        });
                    });
                }
            });
        } else {
            Temp.find({$or: [{user: uid}, {coworker: {$in: [uid]}}]}, {block: 0}, (err, outputs) => {
                res.render('tool', {
                    title: 'TOOL',
                    temps: outputs,
                    uid: uid,
                    block: false,
                    c: req.session.code
                });
            });
        }
    } else res.redirect('https://www.youtube.com/');
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

router.post('/tempSave', (req, res, next) => {
    if ( req.body._id ) {
        const blockData = {
            xml: req.body.block,
            moves: req.body.moves,
            saveby: req.body.uid,
            savedate: getNowDate()
        };
        Temp.findOneAndUpdate({_id: req.body._id}, {$push: {block: blockData}, savedate: getNowDate()}, (err, output) => {
            if ( err | !output ) res.json({success: false});
            else res.json({success: true});
        });
    } else {
        const newTemp = new Temp({
            user: req.body.uid,
            block: [{
                xml: req.body.block,
                moves: req.body.moves,
                saveby: req.body.uid,
                savedate: getNowDate()
            }],
            title: req.body.title,
            savedate: getNowDate(),
            coworker: [],
            requested: []
        });
        Temp.add(newTemp, (err, output) => {
            if ( err ) res.json({success: false});
            else res.json({success: true, _id: output._id.toString()});
        });
    }
});

router.post('/addBlock', (req, res, next) => {
    Temp.findOne({_id: req.body.addId}, {block: 1}, (err, temp) => {
        if ( err || !temp ) res.json({fail: true});
        else res.json({block: temp.block[temp.block.length-1].xml});
    });
});

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
        req.session.data = data;
        req.session.temp = req.body._id;
        res.json({success: true});
    }
});

router.get('/getSessionGame', function(req, res, next) {
    if ( !req.session.data ) {
        res.json({
            success: false,
            msg: '먼저 저장을 해야 합니다.'
        });
    } else {
        res.json({
            success: true,
            data: req.session.data
        });
    }
});

// writing =============================================================

router.post('/write', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    if ( !req.session.data ) {
        return res.json({success: false, msg: '먼저 저장을 해야 합니다.'});
    } else {
        Temp.findOne({_id: req.session.temp}, (err, output) => {
            if ( output.user != req.user._id.toString() ) {
                return res.json({success: false, msg: '메인 제작자가 작성해야 합니다.'});
            } else {
                const newGame = new Game({
                    userid: req.user.userid,
                    nickname: req.user.nickname,
                    title: req.session.data.title,
                    content: req.body.content,
                    version: req.body.version,
                    game: req.session.data,
                    block: output.block[output.block.length-1],
                    boardRequest: 0,
                    board: '',
                    hit: 0,
                    recommend: 0,
                    unrecommend: 0,
                    recommendby: [],
                    comment: [],
                    writedate: getNowDate()
                });
                Game.addPost(newGame, (err, post) => {
                    if ( err ) {
                        res.json({success: false});
                    } else {
                        if ( req.session.temp ) {
                            if ( output.from && output.coworker.length > 0 ) {
                                User.find({_id: {$in: output.coworker}}, {userid: 1, nickname: 1}, (err, users) => {
                                    Game.findOneAndUpdate({_id: post._id}, {coworker: users, from: output.from}, (err, game) => {
                                        req.session.destroy();
                                        res.clearCookie('sid');
                                        res.json({
                                            success: true,
                                            num: post._id
                                        });
                                    });
                                });
                            } else if ( output.from ) {
                                Game.findOneAndUpdate({_id: post._id}, {from: output.from}, (err, game) => {
                                    req.session.destroy();
                                    res.clearCookie('sid');
                                    res.json({
                                        success: true,
                                        num: post._id
                                    });
                                });
                            } else if ( output.coworker.length > 0 ) {
                                User.find({_id: {$in: output.coworker}}, {userid: 1, nickname: 1}, (err, users) => {
                                    Game.findOneAndUpdate({_id: post._id}, {coworker: users}, (err, game) => {
                                        req.session.destroy();
                                        res.clearCookie('sid');
                                        res.json({
                                            success: true,
                                            num: post._id
                                        });
                                    });
                                });
                            } else {
                                req.session.destroy();
                                res.clearCookie('sid');
                                res.json({
                                    success: true,
                                    num: post._id
                                });
                            }
                        } else {
                            req.session.destroy();
                            res.clearCookie('sid');
                            res.json({
                                success: true,
                                num: post._id
                            });
                        }
                    }
                });
            }
        });
    }
});

// take =============================================================

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
    Game.find({}, {content: 0, game: 0, block: 0, recommendby: 0}).sort({_id: -1}).exec(function(err, posts) {
        res.json({posts: posts});
    });
});

router.get('/takeRequestedPosts', function(req, res, next) {
    Game.find({boardRequest: 1}, {content: 0, game: 0, block: 0, comment: 0, hit: 0, recommendby: 0}, function(err, posts) {
        res.json({posts: posts});
    });
});

router.post('/takeOneTemp', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    Temp.findOne({_id: req.body.num}, {block: 0}, (err, output) => {
        if ( err | !output | req.user._id != output.user ) res.json({success: false});
        else res.json({success: true, temp: output});
    });
});

router.post('/takeMyOneTemp', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    Temp.findOne({_id: req.body.num}, (err, temp) => {
        if ( temp.user == req.user._id || temp.coworker.includes(req.user._id.toString()) ) {
            User.find({_id: {$in: temp.coworker}}, {nickname: 1, userid: 1, _id: 1}, (err, users) => {
                User.findOne({_id: temp.user}, {nickname: 1, userid: 1, _id: 1}, (err, user) => {
                    res.json({
                        temp: temp,
                        coworkers: users,
                        creator: user
                    });
                });
            });
        } else res.json({deny: true});
    })
});

router.post('/toMyTempList', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    const num = req.body.num;
    const nowDate = getNowDate();
    Game.findOne({_id: num}, {title: 1, block: 1, userid: 1, nickname: 1}, (err, game) => {
        const newTemp = new Temp({
            user: req.user._id,
            block: [{
                xml: game.block.xml,
                moves: 0,
                saveby: req.user._id.toString(),
                savedate: nowDate
            }],
            title: game.title,
            savedate: nowDate,
            from: {
                game: num,
                title: game.title,
                userid: game.userid,
                nickname: game.nickname
            }
        });
        Temp.add(newTemp, (err, output) => {
            if ( err ) res.json({success: false, msg: err});
            else res.json({success: true});
        });
    });
});

router.post('/takeMyTemps', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    Temp.find({user: req.user._id}, {_id: 1, title: 1, savedate: 1}, (err, temps) => {
        Temp.find({coworker: {$in: [req.user._id.toString()]}}, {_id: 1, title: 1, savedate: 1}, (err, outputs) => {
            res.json({
                temps: temps,
                coworking: outputs
            });
        });
    });
});

router.post('/versionRollBack', function(req, res, next) {
    const num = req.body.num;
    Temp.findOne({_id: num}, {block: 1}, (err, temp) => {
        temp.block.length = req.body.length;
        Temp.findOneAndUpdate({_id: num}, {block: temp.block}, (err, output) => {
            if ( err ) res.json({success: false, msg: err});
            else res.json({success: true});
        });
    });
});

router.post('/acceptCoWorkReq', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    const accept = req.body.accept;
    const coworkRequest = req.body.coworkRequest;
    User.findOneAndUpdate({_id: req.user._id}, {$pullAll: {coworkRequest: [coworkRequest]}}, (err, user) => {
        if ( accept ) {
            Temp.findOneAndUpdate({_id: coworkRequest.temp}, {$pullAll: {requested: [req.user._id.toString()]}, $push: {coworker: req.user._id.toString()}}, (err, temp) => {
                if ( err ) res.json({success: false, msg: err});
                else res.json({success: true});
            });
        } else {
            Temp.findOneAndUpdate({_id: coworkRequest.temp}, {$pullAll: {requested: [req.user._id]}}, (err, temp) => {
                if ( err ) res.json({success: false, msg: err});
                else res.json({success: true});
            });
        }
    });
});

// about posting =============================================================

router.post('/writeComment', passport.authenticate('jwt', {session: false}), function(req, res, next) {
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
        num: new Date().getTime(),
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
    });

});

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
    Game.findOne({_id: postNum}, {comment: 1}, (err, post) => {
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
    Game.findOne({_id: num}, {recommendby: 1, recommend: 1, unrecommend: 1}, function(err, post) {
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
            if ( isRecommend ) {
                let l = post.recommend + 1;
                Game.findOneAndUpdate({_id: num}, {$push: {recommendby: req.user.userid}, recommend: l}, function(err, output) {
                    if ( err ) {
                        res.json({
                            success: false,
                            msg: err
                        });
                    } else {
                        res.json({
                            success: true,
                            recommend: output.recommend
                        });
                    }
                });
            } else {
                let l = output.unrecommend + 1;
                Game.findOneAndUpdate({_id: num}, {$push: {recommendby: req.user.userid}, unrecommend: l}, function(err, output) {
                    if ( err ) {
                        res.json({
                            success: false,
                            msg: err
                        });
                    } else {
                        res.json({
                            success: true,
                            recommend: output.recommend
                        });
                    }
                });
            }
        }
    })
    
});

router.post('/removeTemp', (req, res, next) => {
    Temp.findOneAndDelete({_id: req.body._id}, (err, temp) => {
        if ( err ) res.json({success: false, msg: err});
        else res.json({success: true});
    });
});

// requesting a board =============================================================

router.post('/requestBoard', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    const num = req.body.num;
    Game.findOne({_id: num}, {userid: 1}, function(err, post) {
        if ( err ) {
            res.json({
                success: false,
                msg: err
            });
        } else if ( req.user.userid != post.userid ) {
            res.json({
                success: false,
                msg: 'the HIATUS - Catch You Later'
            });
        } else {
            Game.findOneAndUpdate({_id: num}, {boardRequest: 1}, function(err, output) {
                if ( err ) {
                    res.json({
                        success: false,
                        msg: err
                    });
                } else {
                    res.json({
                        success: true
                    });
                }
            });
        }
    })
});

function makeURL(title) {
    title = title.split(' ');
    let text = '';
    const regex = /^[a-zA-Z0-9]$/;
    for (let t of title) {
        for (let i=0; i<t.length; i++) {
            let l = t.substring(i, i+1);
            if ( !regex.test(l) ) {
                let c = l.charCodeAt(0);
                if ( c > 16 ) c = c % 16;
                c = c.toString(16);
                text += c;
            } else text += l;
        }
        text += '-';
    }
    if ( text.length > 22 ) text = text.substring(0, 22);
    return text;
}

function makeRandomCode(lengthOfRandomCode) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomstring = '';
    for (let i=0; i<lengthOfRandomCode; i++) {
        let rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
}

router.post('/acceptBoard', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    const num = req.body.num;
    const accept = req.body.accept;
    if ( req.user.userid != 'admin' ) {
        res.json({
            success: false,
            msg: 'so i have made up this whole story'
        });
    } else {
        if ( accept ) {
            const title = req.body.title;
            const userid = req.body.userid;
            let text = makeURL(title);
            text += makeRandomCode(3);

            const sub = new Sub({
                url: text,
                title: title + ' (' + userid + ')',
                gameid: num,
                createdate: getNowDate()
            });
            Sub.add(sub, (err, output) => {
                if ( err ) {
                    res.json({
                        success: false,
                        msg: err
                    });
                } else {
                    Game.findOneAndUpdate({_id: num}, {board: text, boardRequest: 2}, function(err, game) {
                        res.json({
                            success: true,
                            link: text
                        });
                    });
                }
            })
        } else {
            Game.findOneAndUpdate({_id: num}, {boardRequest: 3}, function(err, post) {
                if ( err ) {
                    res.json({
                        success: false,
                        msg: err
                    });
                } else {
                    res.json({
                        success: true
                    });
                }
            });
            
        }
    }
    
});

//=============================================================

module.exports = router;
