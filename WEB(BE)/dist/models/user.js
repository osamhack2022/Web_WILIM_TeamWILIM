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
    unique: true
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
  snsId: {
    type: Number,
    "default": 0
  },
  provider: {
    type: String,
    "default": 'null'
  },
  id: _mongoose["default"].Schema.Types.ObjectId
});
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
}); //로그인할때 email,password 사용

var User = _mongoose["default"].model("User", userSchema);

var _default = User;
exports["default"] = _default;