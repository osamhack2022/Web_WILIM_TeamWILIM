"use strict";

var _user = _interopRequireDefault(require("../models/user.js"));

var _express = _interopRequireDefault(require("express"));

var _userSchemaAPI = require("../controller/userSchemaAPI.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
기본 유저 정보는 id, username, password, email, goal, plan으로 구성된다.
위의 구성 요소들을 모두 인자로 받는다.
*/
var passport = require("passport");

var router = _express["default"].Router();

router.route('/').get(_userSchemaAPI.getUsers) // 모든 유저 가져옴
.post(_userSchemaAPI.createNewUser); // 새로운 유저 생성 회원가입은 이쪽에서!

router.route('/:username').get(_userSchemaAPI.getUserInfo) // username 일치하는 유저 가져옴
.put(_userSchemaAPI.updateUser) //기존 유저 update 
["delete"](_userSchemaAPI.deleteUser); //기존 유저 delete

router.route('/login').post(passport.authenticate('local', {
  failureRedirect: '/userSchemaAPI/loginerror'
}), _userSchemaAPI.login);
router.get('/loginerror', function (req, res) {
  res.status(404).json({
    message: "User Not Found"
  });
});
module.exports = router;