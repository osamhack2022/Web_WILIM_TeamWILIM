"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//id, username, password, email, goal, plan
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true
  },
  username: {
    type: String,
    maxLength: 50,
    unique: true,
    required: true
  },
  serviceType: {
    type: String,
    "enum": ['ARMY', 'NAVY', 'AIR_FORCE', 'MARINE', 'OTHER'],
    "default": 'OTHER'
  },
  id: _mongoose["default"].Schema.Types.ObjectId
}); //유저스키마에 passport-local-mongoose 플러그인 함으로써 유저가 회원가입할때 받아온 비밀번호를 자동으로 hashing 해서 스키마에 추가해줌.

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

var User = _mongoose["default"].model("User", userSchema);

var _default = User;
exports["default"] = _default;