/*
유저가 자신의 목표를 설정하면 관련 정보들을 받아서 저장하는 기능을 수행한다.
기본적으로 goal을 인자로 받는다.
/fetchWithQnet
/fetchWithQnetPreviousQuestion
/fetchWithCbt
/fetchWithKisa
/fetchWithOpcl
*/

import User from "./../models/user";
import express from "express";
import router from express.Router();
import {} from "../controller/newUserInfoFetchingAPI";

router.route("/fetchWithQnet")

router.route('/fetchWithQnetPreviousQuestion')

router.route('/fetchWithCbt')

router.route('/fetchWithKisa')

router.route('/fetchWithOpcl')

module.exports = router;

