"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _newUserInfoFetchingAPI = require("../controller/newUserInfoFetchingAPI.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
유저가 자신의 목표를 설정하면 관련 정보들을 받아서 저장하는 기능을 수행한다.
기본적으로 goal을 인자로 받는다.
/fetchWithQnet
/fetchWithQnetPreviousQuestion
/fetchWithCbt
/fetchWithKisa
/fetchWithOpcl
*/
var router = _express["default"].Router();

router.route('/fetchWithQnet').get(_newUserInfoFetchingAPI.getFetchWithQnet); //유저의 Plan, Goal 받아와서 Qnet 

var _default = router;
exports["default"] = _default;