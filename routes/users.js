const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const fs = require('fs-extra');
const User = require('../models/user');
const Temp = require('../models/temp');

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
    clean: true,
    bookmark: [],
    coworkRequest: []
  });

  User.findOne({userid: newUser.userid}, {_id: 1}, function(err1, output1) {
    if ( output1 != null ) {
      return res.json({
        success: false,
        msg: '이미 존재하는 아이디입니다.'
      });
    } else {
      User.findOne({email: newUser.email}, {_id: 1}, function(err2, output2) {
        if ( output2 != null ) {
          return res.json({
            success: false,
            msg: '이미 존재하는 이메일입니다.'
          });
        } else {
          User.findOne({nickname: newUser.nickname}, {_id: 1}, function(err3, output3) {
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
                  fs.copy('public/images/noimage.jpg', 'public/images/profile/' + user.userid, function(err) {
                    if ( err ) console.log(err);
                  });
                  fs.copy('public/images/noimage.jpg', 'angular-src/src/images/profile/' + user.userid, function(err) {
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
      return res.json({success: false, msg: '아이디 혹은 비밀번호가 잘못되었습니다.'});
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
        return res.json({success: false, msg: '아이디 혹은 비밀번호가 잘못되었습니다.'});
      }
    })
  })
});

router.post('/modify', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  User.findOne({nickname: req.body.nickname}, {userid: 1}, function(err, user) {
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

router.post('/get-all-users', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  if ( req.user.userid != 'admin' ) {
    res.json({
      users: []
    });
  } else {
    User.find({userid: {$ne: 'admin'}}, {_id: 1, userid: 1, nickname: 1, clean: 1}, function(err, users) {
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

router.post('/get-id-from-userid', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  User.findOne({userid: req.body.userid}, {_id: 1}, (err, user) => {
    res.json({_id: user._id});
  });
});

router.post('/send-request', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  const request = {
    from: {
      userid: req.user.userid,
      nickname: req.user.nickname,
      _id: req.user._id.toString()
    },
    title: req.body.title,
    temp: req.body.tempId,
    requestdate: getNowDate()
  };
  User.findOneAndUpdate({_id: req.body._id}, {$push: {coworkRequest: request}}, (err, user) => {
    Temp.findOneAndUpdate({_id: req.body.tempId}, {$push: {requested: req.body._id}}, (err, temp) => {
      if ( err ) res.json({success: false, msg: err});
      else res.json({success: true});
    });
  });
});

router.post('/find-user-by-id-or-nickname', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  const text = req.body.text;
  const tempId = req.body.tempId;
  User.find(
    {$or: [{userid: {$regex: text, $options: 'i'}}, {nickname: {$regex: text, $options: 'i'}}], _id: {$ne: req.user._id}},
    {userid: 1, nickname: 1, _id: 1, coworkRequest: 1},
    (err, users) => {
      let arr = [];
      outerLoop: for (let user of users) {
        for (let coworkRequest of user.coworkRequest) {
          if ( coworkRequest.temp == tempId ) {
            continue outerLoop;
          }
        }
        arr.push(user);
      }
      res.json({users: arr});
  });
});

router.get('/find-userid/:email', (req, res, next) => {
  const email = req.params.email;
  User.findOne({email: email}, {userid: 1}, (err, user) => {
    if ( err || !user ) res.json({success: false});
    else res.json({success: true, userid: user.userid.substring(0, user.userid.length - 3) + '***'});
  });
});

//==================================================>

module.exports = router;
