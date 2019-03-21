import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if ( user.userid == undefined || user.email == undefined || user.pw == undefined || user.pwchk == undefined || user.introduction == undefined ) {
      return false;
    } else {
      return true;
    }
  }

  validateConditions(user) {
    // let idvalid = /^[a-z]+[a-z0-9]{6,15}$/g;
    // if ( !idvalid.test(user.userid) ) {
    //   return {
    //     valid: false,
    //     msg: '아이디는 영어, 숫자로 이루어진 6~15 글자여야 합니다.'
    //   };
    // }

    // let pwvalid = /^{10,}/;
    // if ( !pwvalid.test(user.pw) ) {
    //   return {
    //     valid: false,
    //     msg: '비밀번호는 10글자 이상이어야 합니다.'
    //   }
    // }

    // let nickValid = /^[a-Zㄱ-힣0-9]{4,8}$/;
    // if ( !nickValid.test(user.nickname) ) {
    //   return {
    //     valid: false,
    //     msg: '닉네임은 한글, 알파벳, 숫자로 이루어진 4~8 글자여야 합니다.'
    //   }
    // }

    return {
      valid: true
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateModify(user) {
    return !(user.pw == undefined || user.pw == '' ||
        user.nickname == undefined || user.nickname == '' ||
        user.introduction == undefined || user.introduction == '');
  }

}
