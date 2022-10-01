/*
기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
기본 유저 정보는 id, username, password, email, goal, plan으로 구성된다.
위의 구성 요소들을 모두 인자로 받는다.
*/
import express from 'express';
const passport = require("passport");
import {getUsers, getUserInfo,createNewUser,updateUser, deleteUser, loginerror, login, renderRegister, renderLogin, renderRegisterKakao, createNewKakaoUser, kakaoCallback} from "../controller/userSchemaAPI.js";
import {isLoggedIn } from '../middleware';
const router = express.Router();

router.route('/')
    .get(getUsers) // 모든 유저 가져옴

router.get('/logout', (req,res)=>{
    req.session.destroy((err) =>{
        res.redirect('/'); 
    });
})

router.route('/register/local')
    .get(renderRegister)
    .post( createNewUser)  // 새로운 유저 생성 회원가입은 이쪽에서!

router.route('/login/local')//local 로그인 라우터
    .get(renderLogin)
    .post(passport.authenticate('local',{failureRedirect: '/userSchemaAPI/loginerror'}), login)

router.route('/register/kakao')//카카오 계정 인증이 되었으나 wilim 데이터에 유저 없을때
    .get(renderRegisterKakao)
    .post(createNewKakaoUser)


router.get('/login/kakao', passport.authenticate('kakao'));//kakao 로그인 라우터


router.get('/login/kakao/callback', (req, res, next) => {//kakao 로그인 콜백 라우터
    passport.authenticate('kakao', function (err, user, info){
        if (err) {
            return next(err);
        }
        if (!user) { 
            const { id } = info;
            req.session.joinUser = {
                snsId: id,
                email: info._json.kakao_account.email,
                username: info._json.properties.nickname,
            };
            return req.session.save(() => {
                res.redirect('/userSchemaAPI/register/kakao');
            });
        }
    return req.login(user, function (error){
        if (error) {
            next(error);
        }
        res.redirect('/');
    });
    })(req, res, next);
});

router.route('/loginerror')//로그인실패시
    .post(loginerror)    

router.route('/:username')
    .get(getUserInfo)  // username 일치하는 유저 가져옴
    .put(updateUser)  //기존 유저 update 
    .delete(deleteUser)  //기존 유저 delete

module.exports = router;