const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const fs = require('fs-extra');
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

router.post('/register', function(req, res, next) {
  const newUser = new User({
    userid: req.body.userid,
    pw: req.body.pw,
    email: req.body.email,
    nickname: req.body.nickname,
    introduction: req.body.introduction,
    registerdate: getNowDate(),
    clean: true
  });

  User.findOne({userid: newUser.userid}, function(err1, output1) {
    if ( output1 != null ) {
      return res.json({
        success: false,
        msg: '이미 존재하는 아이디입니다.'
      });
    } else {
      User.findOne({email: newUser.email}, function(err2, output2) {
        if ( output2 != null ) {
          return res.json({
            success: false,
            msg: '이미 존재하는 이메일입니다.'
          });
        } else {
          User.findOne({nickname: newUser.nickname}, function(err3, output3) {
            if ( output3 != null ) {
              return res.json({
                success: false,
                msg: '이미 존재하는 닉네임입니다.'
              });
            } else {
              User.addUser(newUser, (err, user) => {
                if ( err ) {
                  res.json({
                    success: false,
                    msg:'등록에 실패하였습니다.',
                    err: err
                  });
                } else {
                  fs.copy('public/images/noimage.jpg', 'public/images/profileimages/' + user.userid, function(err) {
                    if ( err ) console.log(err);
                  });
                  fs.copy('public/images/noimage.jpg', 'angular-src/src/images/profileimages/' + user.userid, function(err) {
                    if ( err ) console.log(err);
                  });
                  res.json({
                    success: true,
                    msg:'등록 완료'
                  });
                }
              });
            }
          })
        }
      });
    }
  });
  
});

//=======================================>

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//==================================================<

router.post('/authenticate', function(req, res, next) {
  const userid = req.body.userid;
  const pw = req.body.pw;
  
  User.getUserByUsername(userid, (err, user) => {
    // if(err) throw err;
    if ( !user ) {
      return res.json({success: false, msg: '사용자를 찾을 수 없습니다.'});
    }
    
    User.comparePassword(pw, user.pw, (err, isMatch) => {
      // if(err) throw err;
      if ( isMatch ) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800  // 1 week in seconds
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            userid: user.userid,
            email: user.email,
            nickname: user.nickname
          }
        });
      } else {
        return res.json({success: false, msg: '비밀번호가 잘못되었습니다.'});
      }
    })
  })
});

router.post('/modify', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  User.findOne({nickname: req.body.nickname}, function(err, user) {
    if ( user && user.userid != req.user.userid ) {
      res.json({success: false, msg: '이미 존재하는 닉네임입니다.'});
    } else {
      if ( req.body.pw != '' ) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.pw, salt, (err, hash) => {
            let pw = hash;
            User.findOneAndUpdate({_id: req.user._id}, {pw: pw, nickname: req.body.nickname, introduction: req.body.introduction}, function(err, output) {
              if ( err ) res.json({success: false, msg: err});
              else res.json({success: true});
            })
          });
        });
      } else {
        User.findOneAndUpdate({_id: req.user._id}, {nickname: req.body.nickname, introduction: req.body.introduction}, function(err, output) {
          if ( err ) res.json({success: false, msg: err});
          else res.json({success: true});
        });
      }
    }
  })
});

router.post('/admin', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  if ( req.user.userid == 'admin' ) {
    User.findOneAndUpdate({_id: req.body._id}, {clean: !req.body.clean}, function(err, user) {
      if ( err ) {
        res.json({
          success: false,
          msg: err
        });
      } else res.json({success: true});
    });
  } else {
    res.json({
      success: false,
      msg: 'cannot access'
    });
  }
});

router.post('/getAllUsers', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  if ( req.user.userid != 'admin' ) {
    res.json({
      users: []
    });
  } else {
    User.find({}, function(err, users) {
      res.json({
        users: users
      });
    });
  }
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user});
});

//==================================================>

module.exports = router;
