"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// user의 personal plan에 대한 schema
// daily, weekly, monthly
// 유저를 식별할 수 있는 키 데이터 필요
// 세부적인 데이터의 조건은 조금 더 고민 필요 ...
var personalPlanSchema = _mongoose["default"].Schema({});

var PersonalPlan = _mongoose["default"].Model("personalPlan", personalPlanSchema);

var _default = PersonalPlan;
exports["default"] = _default;