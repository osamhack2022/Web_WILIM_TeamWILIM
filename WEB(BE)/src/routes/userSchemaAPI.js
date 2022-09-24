/*
기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
기본 유저 정보는 id, displayName, password, email, goal, plan으로 구성된다.
위의 구성 요소들을 모두 인자로 받는다.
*/

import User from "../models/user.js";
import express from 'express';
import {getUsers, getUserInfo,createNewUser,updateUser, deleteUser} from "../controller/userSchemaAPI.js";

const router = express.Router();

router.route('/')
    .get(getUsers) // 모든 유저 가져옴
    .post(createNewUser)  // 새로운 유저 생성
router.route('/:displayName')
    .get(getUserInfo)  // displayName 일치하는 유저 가져옴
    .put(updateUser)  //기존 유저 update 
    .delete(deleteUser)  //기존 유저 delete

module.exports = router;