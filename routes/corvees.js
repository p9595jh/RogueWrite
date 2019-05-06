const express = require('express');
const router = express.Router();
// ==============================================
const passport = require('passport');
const Corvee = require('../models/corvee');
const Temp = require('../models/temp');
const User = require('../models/user');
const fs = require('fs-extra');
const formidable = require('formidable');

const urlReg = /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/gi;

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
    if ( urlReg.test(url) ) {
        url = "<a target='_blank' href='" + (url.toLowerCase().startsWith('http') ? url : 'https://' + url) + "'>" + url + "</a>";
    }
    return url;
}

router.get('/', function(req, res) {
    res.send('');
});

// take ==============================================

router.get('/take-one-post', function(req, res, next) {
    var num = req.query.num;
    var loggedIn = req.query.loggedIn;
    Corvee.findOne({_id: num}, function(err, post) {
        if ( !post ) {
            res.json({
                fail: true
            });
        } else {
            Temp.findOne({_id: post.temp}, {coworker: 1, requested: 1}, (err, temp) => {
                User.find({_id: {$in: temp.coworker}}, {nickname: 1, userid: 1}, (err, coworkers) => {
                    User.find({_id: {$in: temp.requested}}, {nickname: 1, userid: 1}, (err, requesteds) => {
                        const coworker = temp.coworker.length > 0 ? coworkers : undefined;
                        const requested = temp.requested.length > 0 ? requesteds : undefined;
                        User.findOne({userid: post.userid}, {introduction: 1}, (err, user) => {
                            if ( loggedIn == 'yes' ) {
                                Corvee.findOneAndUpdate({_id: num}, {hit: post.hit + 1}, function(err, output) {
                                    res.json({
                                        post: output,
                                        introduction: user.introduction,
                                        coworkers: coworker,
                                        requesteds: requested
                                    });
                                });
                            } else {
                                res.json({
                                    post: post,
                                    introduction: user.introduction,
                                    coworkers: coworker,
                                    requesteds: requested
                                });
                            }
                        });
                    })
                });
            });
        }
    });
});

router.get('/take-all-posts', function(req, res, next) {
    Corvee.find({}, {content: 0}).sort({_id: -1}).exec(function(err, posts) {
        res.json({posts: posts});
    });
});

router.get('/take-searched-posts', (req, res, next) => {
    const category = req.query.category;
    if ( category == 'title' ) {
        Corvee.find({title: {$regex: req.query.text, $options: 'i'}}, {content: 0}).exec((err, posts) => {
            res.json({posts: posts});
        });
    } else if ( category == 'nickname' ) {
        Corvee.find({nickname: {$regex: req.query.text, $options: 'i'}}, {content: 0}).exec((err, posts) => {
            res.json({posts: posts});
        });
    } else {
        res.json({posts: []});
    }
});

router.post('/take-my-temps', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    Temp.find({user: req.user._id.toString()}, {requested: 0}, (err, temps) => {
        res.json({temps: temps, user: req.user});
    });
});

router.post('/take-temp-users', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    User.find({_id: {$in: req.body.coworkers}}, {nickname: 1, userid: 1, _id: 1}, (err, users) => {
        res.json({users: users});
    });
});

// write ==============================================

router.post('/images', function(req, res) {
    var form = formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        const filePath = files.image.path;
        const ext = files.image.name.substring(files.image.name.lastIndexOf('.')).toLowerCase();
        const name = new Date().getTime() + ext;
        fs.copy(filePath, 'public/images/corvee/' + name, function(err) {
            if ( err ) {
                console.log(err);
                res.json({});
            } else {
                fs.copy(filePath, 'angular-src/src/images/corvee/' + name, function(err) {
                    if ( err ) {
                        console.log(err);
                        res.json({});
                    } else res.json({link: 'images/corvee/' + name});
                });
            }
        });
    });
});

router.post('/write', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    const item = req.body.item;
    Temp.findOne({_id: item._id}, {_id: 1, block: 1, from: 1, added: 1}, (err, temp) => {
        const block = {
            xml: temp.block[item.idx - 1].xml,
            from: temp.from,
            added: temp.added
        };
        const newCorvee = new Corvee({
            userid: req.user.userid,
            nickname: req.user.nickname,
            title: req.body.title,
            content: req.body.content,
            block: block,
            temp: temp._id,
            hit: 0,
            recommend: [],
            comment: [],
            writedate: getNowDate()
        });
        Corvee.addPost(newCorvee, (err, post) => {
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
    });
});

router.post('/write-comment', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    let comment = req.body.comment.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });

    let split = comment.split(' ');
    comment = '';
    for (let i=0; i<split.length-1; i++)
        comment += taggingUrl(split[i]) + ' ';
    comment += taggingUrl(split[split.length-1]);

    for (let each of req.body.comments) {
        let regex = new RegExp('\\[\\[' + each.userid + '\\]\\]', 'g');
        comment = comment.replace(regex, '<a href="javascript:;" onclick="oiw(\'' + each.userid + '\')">@' + each.nickname + '</a>');
    }
    
    const cmtData = {
        num: new Date().getTime(),
        writedate: getNowDate(),
        userid: req.user.userid,
        nickname: req.user.nickname,
        comment: comment
    };
    Corvee.findOneAndUpdate({_id: req.body._id}, {$push: {comment: cmtData}}, function(err, output) {
        if ( err ) res.json({success: false});
        else res.json({success: true});
    });
    
});

router.post('/reply-comment', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    let comment = req.body.comment.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });

    let split = comment.split(' ');
    comment = '';
    for (let i=0; i<split.length-1; i++)
        comment += taggingUrl(split[i]) + ' ';
    comment += taggingUrl(split[split.length-1]);

    for (let each of req.body.comments) {
        let regex = new RegExp('\\[\\[' + each.userid + '\\]\\]', 'g');
        comment = comment.replace(regex, '<a href="javascript:void(0);" onclick="oiw(\'' + each.userid + '\')">@' + each.nickname + '</a>');
    }

    const postNum = req.body.postNum;
    const cmtNum = req.body.cmtNum;
    Corvee.findOne({_id: postNum}, {comment: 1}, (err, post) => {
        if ( err || !post ) res.json({success: false});
        else {
            let idx = undefined;
            for (let i=0; i<post.comment.length; i++) {
                if ( post.comment[i].num == cmtNum ) {
                    idx = i;
                    break;
                }
            }
            const cmtData = {
                num: new Date().getTime(),
                writedate: getNowDate(),
                userid: req.user.userid,
                nickname: req.user.nickname,
                comment: comment
            };
            const push = {[`comment.${idx}.reply`]: cmtData};
            Corvee.findOneAndUpdate({_id: postNum}, {$push: push}, (err, output) => {
                if ( err ) res.json({success: false});
                else res.json({success: true});
            });
        }
    });
});

// remove ==============================================

router.post('/remove-post', function(req, res, next) {
    const num = req.body.num;
    Corvee.findOneAndDelete({_id: num}, function(err, output) {
        if ( err ) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true
            });
        }
    });
});

router.post('/remove-comment', function(req, res, next) {
    const postNum = req.body.postNum;
    const cmtNum = req.body.cmtNum;
    Corvee.findOne({_id: postNum}, {comment : 1}, (err, post) => {
        if ( err || !post ) res.json({success: false});
        else {
            let c;
            for (let i=0; i<post.comment.length; i++) {
                if ( post.comment[i].num == cmtNum ) {
                    c = post.comment[i];
                    break;
                }
            }
            Corvee.findOneAndUpdate({_id: postNum}, {$pullAll: {comment: [c]}}, (err, output) => {
                if ( err ) res.json({success: false});
                else res.json({
                    success: true,
                    post: output
                });
            });
        }
    });
});

router.post('/remove-reply', function(req, res, next) {
    const postNum = req.body.postNum;
    const cmtNum = req.body.cmtNum;
    Corvee.findOne({_id: postNum}, {comment: 1}, (err, post) => {
        if ( err || !post ) res.json({success: false});
        else {
            let idx = undefined;
            for (let i=0; i<post.comment.length; i++) {
                if ( post.comment[i].num == cmtNum ) {
                    idx = i;
                    break;
                }
            }
            if ( !idx ) res.json({success: false});
            else {
                const pull = {[`comment.${idx}.reply`]: [req.body.reply]};
                Corvee.findOneAndUpdate({_id: postNum}, {$pullAll: pull}, (err, output) => {
                    if ( err ) res.json({success: false});
                    else res.json({success: true});
                });
            }
        }
    });
});

// recommend ==============================================

router.post('/recommend', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    const num = req.body.num;
    Corvee.findOne({_id: num}, function(err, post) {
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
            Corvee.findOneAndUpdate({_id: num}, {$push: {recommend: req.user.userid}}, function(err, output) {
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

// for iframe ==============================================

router.get('/frame', (req, res, next) => {
    Corvee.findOne({_id: req.query._id}, {block: 1}, (err, corvee) => {
        if ( err || !corvee ) {
            res.send('error');
        } else {
            res.render('block', {
                title: 'BLOCK',
                block: corvee.block.xml,
                readOnly: false
            });
        }
    });
});

// ==============================================

module.exports = router;
