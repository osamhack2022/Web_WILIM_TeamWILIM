"use strict";

var _express = _interopRequireDefault(require("express"));

var _userSchemaAPI = require("../controller/userSchemaAPI.js");

var _middleware = require("../middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
기본 유저 정보는 id, username, password, email, goal, plan으로 구성된다.
위의 구성 요소들을 모두 인자로 받는다.
*/
var passport = require("passport");

var router = _express["default"].Router();

router.route('/').get(_userSchemaAPI.getUsers); // 모든 유저 가져옴

router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
});
router.route('/register/local').get(_userSchemaAPI.renderRegister).post(_userSchemaAPI.createNewUser); // 새로운 유저 생성 회원가입은 이쪽에서!

router.route('/login/local') //local 로그인 라우터
.get(_userSchemaAPI.renderLogin).post(passport.authenticate('local', {
  failureRedirect: '/userSchemaAPI/loginerror'
}), _userSchemaAPI.login);
router.route('/register/kakao') //카카오 계정 인증이 되었으나 wilim 데이터에 유저 없을때
.get(_userSchemaAPI.renderRegisterKakao).post(_userSchemaAPI.createNewKakaoUser);
router.get('/login/kakao', passport.authenticate('kakao')); //kakao 로그인 라우터

router.get('/login/kakao/callback', function (req, res, next) {
  //kakao 로그인 콜백 라우터
  passport.authenticate('kakao', function (err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      var id = info.id;
      req.session.joinUser = {
        snsId: id,
        email: info._json.kakao_account.email,
        username: info._json.properties.nickname
      };
      return req.session.save(function () {
        res.redirect('/userSchemaAPI/register/kakao');
      });
    }

    return req.login(user, function (error) {
      if (error) {
        return next(error);
      }

      return res.redirect('/');
    });
  })(req, res, next);
});
router.route('/loginerror') //로그인실패시
.post(_userSchemaAPI.loginerror);
router.route('/:username').get(_userSchemaAPI.getUserInfo) // username 일치하는 유저 가져옴
.put(_userSchemaAPI.updateUser) //기존 유저 update 
["delete"](_userSchemaAPI.deleteUser); //기존 유저 delete

module.exports = router;