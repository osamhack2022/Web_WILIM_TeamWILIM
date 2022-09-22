/*
기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
기본 유저 정보는 id, displayName, password, email, goal, plan으로 구성된다.
위의 구성 요소들을 모두 인자로 받는다.
/createUserSchema
/readUserSchema
/updateUserSchema
/deleteUserSchema
*/

import User from "./../models/user";
import express from 'express';
import router from express.Router();
import {} from "../controller/newUserSchemaAPI";

router.route("/createUserSchema")

router.route('/readUserSchema')

router.route('/updateUserSchema')

router.route('/deleteUserSchema')

module.exports = router;