"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _userPersonalPlanAPI = require("../controller/userPersonalPlanAPI");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
유저가 자신의 계획을 수립하고 체크할 수 있도록하는 기능을 수행한다.
계획은 일간, 주간, 월간으로 나뉘고, 개발은 일간부터 진행한다.
주간 계획에는 주간계획과 해당 주에 있는 일간 계획들을 모두 띄워준다.
마찬가지로 월간 계획에는 해당 월에 있는 주간 계획과 일간 계획들을 모두 띄워준다.
기본적으로 user를 인자로 받는다.
- /daliyPlan
    - /createDaliyPlan
    - /readDaliyPlan
    - /updateDaliyPlan
    - /deleteDaliyPlan
- /weeklyPlan
    - /createWeeklyPlan
    - /readWeeklyPlan
    - /updateWeeklyPlan
    - /deleteWeeklyPlan
- /monthlyPlan
    - /createMonthlyPlan
    - /readMonthlyPlan
    - /updateMonthlyPlan
    - /deleteMonthlyPlan
*/
var router = _express["default"].Router();

router.route('/daily').get(_userPersonalPlanAPI.getDailyPlan).post(_userPersonalPlanAPI.postDailyPlan).put(_userPersonalPlanAPI.updateDailyPlan)["delete"](_userPersonalPlanAPI.deleteDailyPlan);
router.route('/weekly').get(_userPersonalPlanAPI.getWeeklyPlan).post(_userPersonalPlanAPI.postWeeklyPlan).put(_userPersonalPlanAPI.updateWeeklyPlan)["delete"](_userPersonalPlanAPI.deleteWeeklyPlan);
router.route('/monthly').get(_userPersonalPlanAPI.getMonthlyPlan).post(_userPersonalPlanAPI.postMonthlyPlan).put(_userPersonalPlanAPI.updateMonthlyPlan)["delete"](_userPersonalPlanAPI.deleteMonthlyPlan);
var _default = router;
exports["default"] = _default;