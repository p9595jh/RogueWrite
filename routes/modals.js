const express = require('express');
const router = express.Router();
// ==============================================
const passport = require('passport');
const formidable = require('formidable');
const fs = require('fs-extra');
const User = require('../models/user');
const Game = require('../models/game');
const Temp = require('../models/temp');

router.get('/', function(req, res) {
    res.send('');
});

// ==============================================

router.post('/getCode', passport.authenticate('jwt', {session: false}), function(req, res) {
    if ( req.body.userid == req.user.userid ) {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const string_length = 15;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        req.session.code = randomstring;
        req.session.userid = req.body.userid;
        req.session.uid = req.user._id.toString();
        res.json({code: randomstring});
    } else res.json({code: 'お疲れ様です'});
});

// ==============================================

router.get('/profileImage', function(req, res) {
    const userid = req.query.userid;
    if ( req.session.code == req.query.c && req.session.userid == userid ) {
        res.render('./profileImage', {
            title: '프로필 이미지',
            userid: userid,
            errmsg: ''
        });
    } else res.redirect("https://www.youtube.com/");
});

router.post('/setProfileImage', function(req, res) {
    var form = formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        const userid = req.query.userid;
        const ext = files.image.name.substring(files.image.name.lastIndexOf('.') + 1).toLowerCase();
        if ( !files.image.name || files.image.name == '' ) {
            res.render('./profileImage', {
                title: '프로필 이미지',
                userid: userid,
                errmsg: '선택된 사진이 없습니다.'
            });
            return false;
        } else if ( ext != 'jpg' && ext != 'jpeg' && ext != 'png' && ext != 'gif' && ext != 'webp' ) {
            res.render('./profileImage', {
                title: '프로필 이미지',
                userid: userid,
                errmsg: '지원되는 형식이 아닙니다. (jpg, jpeg, png, gif, webp)'
            });
            return false;
        } else if ( files.image.size > (1024 * 1024) ) {
            res.render('./profileImage', {
                title: '프로필 이미지',
                userid: userid,
                errmsg: '1MB 이하의 파일을 사용하여 주십시오.'
            });
            return false;
        } else {
            const filePath = files.image.path;
            fs.copy(filePath, 'public/images/profile/' + userid, function(err) {
                if ( err ) console.log(err);
                else {
                    fs.copy(filePath, 'angular-src/src/images/profile/' + userid, function(err) {
                        if ( err ) console.log(err);
                        else {
                            req.session.destroy();
                            res.clearCookie('sid');
                            var done = "<script>alert('적용 완료');window.open('about:blank', '_self').close();</script>";
                            res.send(done);
                        }
                    });
                }
            });
        }
    })
});

// ==============================================

router.get('/info', function(req, res) {
    User.findOne({userid: req.query.userid}, {userid: 1, email: 1, nickname: 1, introduction: 1, clean: 1, registerdate: 1}, function(err, user) {
        if ( err || !user ) {
            res.send('사용자를 찾을 수 없습니다.');
        } else {
            res.render('./info', {
                title: user.nickname,
                user: user
            });
        }
    });
});

// ==============================================

router.get('/viewBlock', (req, res) => {
    Game.findOne({_id: req.query.game}, {block: 1, title: 1}, (err, game) => {
        if ( err || !game ) res.send('error');
        else {
            res.render('block', {
                title: game.title,
                block: game.block.xml
            });
        }
    });
});

router.get('/viewTempBlock', (req, res) => {
    Temp.findOne({_id: req.query.game}, {block: 1, title: 1}, (err, game) => {
        if ( err || !game ) res.send('error');
        else {
            // if ( req.query.recent ) game.block.length = req.query.recent;
            if ( req.query.recent ) {
                res.render('block', {
                    title: game.title,
                    block: game.block[req.query.recent-1].xml
                });
            } else {
                res.render('block', {
                    title: game.title,
                    block: game.block[game.block.length-1].xml
                });
            }
        }
    });
});

// ==============================================

module.exports = router;
