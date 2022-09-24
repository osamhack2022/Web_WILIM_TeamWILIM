/*
기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
기본 유저 정보는 id, displayName, password, email, goal, plan으로 구성된다.
위의 구성 요소들을 모두 인자로 받는다.
/createUserSchema
/readUserSchema
/updateUserSchema
/deleteUserSchema
*/

import User from "../models/user.js";
import express from 'express';
import {getUsers, getUserInfo} from "../controller/userSchemaAPI.js";

const router = express.Router();

router.route("/createUserSchema")

router.get('/readUserSchema',getUsers); //전체 유저정보 가지고 오는 request

router.route('/readUserSchema/:uid')
    .get(getUserInfo) //user id로 해당 유저 정보 가지고 오는 request

router.route('/updateUserSchema')

router.route('/deleteUserSchema')

module.exports = router;