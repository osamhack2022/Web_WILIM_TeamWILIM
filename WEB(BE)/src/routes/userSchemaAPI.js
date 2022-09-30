/*
기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
기본 유저 정보는 id, username, password, email, goal, plan으로 구성된다.
위의 구성 요소들을 모두 인자로 받는다.
*/
import express from 'express';
const passport = require("passport");
import {getUsers, getUserInfo,createNewUser,updateUser, deleteUser, loginerror, login, renderRegister, renderLogin, logout} from "../controller/userSchemaAPI.js";
import {isLoggedIn } from '../middleware';
const router = express.Router();

router.route('/')
    .get(getUsers) // 모든 유저 가져옴

router.get('/logout', (req,res)=>{
    req.session.destroy((err) =>{
        res.redirect('/'); 
    });
})

router.route('/register')
    .get(renderRegister)
    .post( createNewUser)  // 새로운 유저 생성 회원가입은 이쪽에서!

router.route('/login')//로그인 라우터
    .get(renderLogin)
    .post(passport.authenticate('local',{failureRedirect: '/userSchemaAPI/loginerror'}), login)

router.route('/loginerror')//로그인실패시
    .post(loginerror)    

router.route('/:username')
    .get(getUserInfo)  // username 일치하는 유저 가져옴
    .put(updateUser)  //기존 유저 update 
    .delete(deleteUser)  //기존 유저 delete

module.exports = router;