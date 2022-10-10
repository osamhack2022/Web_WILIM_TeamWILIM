/*
자격증 정보와 관련된 /ctfInfo
유저의 goal과 관련된 /goal/:username 으로 나눠짐.
*/
import express from 'express';
import {getAllCtfInfo,getCtfInfo, postNewCtfInfo, updateCtfInfo, deleteCtfInfo, getUserGoal, postNewUserGoal, deleteUserGoal} from '../controller/userGoalElementAPI.js';
const router = express.Router();

router.route('/ctfInfo')
    .get(getAllCtfInfo) // 모든 자격증 정보 가져오기
    .post(postNewCtfInfo) // 새로운 자격증 추가

router.route('/ctfInfo/:id')
    .get(getCtfInfo) //해당 자격증 정보 가져오기
    .put(updateCtfInfo) //자격증 정보 변경
    .delete(deleteCtfInfo) //자격증 삭제

router.route('/goal/:username')
    .get(getUserGoal)           //해당 유저의 goal에 해당하는 자격증 정보 보여줌(res.render)
    .post(postNewUserGoal)      //기존 goal 있으면 없애고 새로운 유저 goal 생성(goal 변경시에도 사용)
    .delete(deleteUserGoal);    // 기존 goal 없앰

export default router;