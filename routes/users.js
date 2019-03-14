const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

router.post('/register', function(req, res, next) {
  const newUser = new User({
    userid: req.body.userid,
    pw: req.body.pw,
    email: req.body.email,
    nickname: req.body.nickname,
    introduction: req.body.introduction
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
          User.addUser(newUser, (err, user) => {
            if ( err ) {
                res.json({
                  success: false,
                  msg:'등록에 실패하였습니다.',
                  err: err
                });
              } else {
                res.json({
                  success: true,
                  msg:'등록 완료'
                });
              }
          });
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
      return res.json({success: false, msg: 'User not found'});
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
        return res.json({success: false, msg: '비밀번호가 잘못됐습니다.'});
      }
    })
  })
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user});
});

//==================================================>

module.exports = router;
