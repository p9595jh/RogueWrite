const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  userid: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  pw: {
    type: String,
    required: true
  },
  introduction: {
    type: String
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(userid, callback){
  const query = {userid: userid}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
  User.findOne({userid: newUser.userid}, function(err, output) {
    if ( output != null ) {
      return {
        success: false,
        msg: '이미 존재하는 아이디입니다'
      };
    }
  });
  User.findOne({email: email}, function(err, output) {
    if ( output != null ) {
      return {
        success: false,
        msg: '이미 존재하는 이메일입니다'
      };
    }
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.pw, salt, (err, hash) => {
      //if(err) throw err;
      newUser.pw = hash;
      newUser.save(callback);
      return {
        success: true
      };
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    //if(err) throw err;
    callback(null, isMatch);
  });
}