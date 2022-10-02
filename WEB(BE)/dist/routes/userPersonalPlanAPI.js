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
유저는 하루 단위로 계획을 세운다. 그러나, 매일 반복하고 싶은 계획이 있다면 표시를 했을 때 프로그램이 자동으로 매일매일 해당 계획을 추가해 준다.
Plan은 기본적으로 User에 종속되어 있는 관계이다.
또한 Plan은 PlanList와 PlanElement로 나뉜다. 각각의 Plan Element가 모여서 하나의 Plan List를 이룬다.
*/
var router = _express["default"].Router();

router.route('/:username/plans').get(_userPersonalPlanAPI.getPlanList) // 유저의 전체 플랜 리스트 가져오기
.post(_userPersonalPlanAPI.addPlanElement); // 새로운 Plan Element 추가
// .delete(deletePersonalPlan);    // 유저의 전체 플랜 리스트 없애기 -> 필요한가?

router.route("/:username/plans/:id").get(_userPersonalPlanAPI.getPlanElement) // 전체 플랜 리스트 중 하나의 Element 가져오기
.patch(_userPersonalPlanAPI.updatePlanElement) // 기존에 존재하던 Plan Element 업데이트
["delete"](_userPersonalPlanAPI.deletePlanElement); // 특정 Plan Element 삭제

var _default = router;
exports["default"] = _default;