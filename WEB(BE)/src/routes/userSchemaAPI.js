/*
기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
기본 유저 정보는 id, username, password, email, goal, plan으로 구성된다.
위의 구성 요소들을 모두 인자로 받는다.
*/
import express from 'express';
const passport = require("passport");
import {getUsers,createNewUser, loginerror, login, renderRegister, renderLogin, renderRegisterKakao, createNewKakaoUser, getUserInfoById, updateUserById, deleteUserById, renderRegisterNaver, createNewNaverUser, getSessionInfo,renderResetPassword, resetPassword} from "../controller/userSchemaAPI.js";
import {isLoggedIn } from '../middleware';
import ExpressError from '../utils/error.js';
const router = express.Router();

router.route('/')
    .get(getUsers) // 모든 유저 가져옴

router.get('/logout', (req,res)=>{
    req.session.destroy((err) =>{
        if(err){
            throw new ExpressError(404,"오류가 발생했습니다");
        }
        res.send(`<script type="text/javascript">alert("로그아웃 되었습니다."); window.location.href = "https://front.wilimbackend.tk" </script>`);
    });
})

router.route('/register/local')
    .get(renderRegister)
    .post( createNewUser)  // 새로운 유저 생성 회원가입은 이쪽에서!

router.route('/login/local')//local 로그인 라우터
    .get(renderLogin)
    .post((req, res, next) => {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if(user){
            // const json = JSON.parse(JSON.stringify(user));
            req.logIn(user, function(err) {
                if (err) { return next(err); }
                return res.status(200).redirect(`/userSchemaAPI/id/${user._id}`);
            });
            }else{
                res.status(404).json({msg : "로그인 실패"});
            }
        })(req, res, next);
    });

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
                email: info._json.kakao_account.email, //info._json && info._json.kakao_account_email
                username: info._json.properties.nickname,
            };
            return req.session.save(() => {
                res.redirect('/userSchemaAPI/register/kakao');
            });
        }
    return req.login(user, function (error){
        if (error) {
            return next(error);
        }
        return res.status(200).redirect(`https://front.wilimbackend.tk/main`);
    });
    })(req, res, next);
});

router.route('/register/naver')//네이버 계정 인증이 되었으나 wilim 데이터에 유저 없을때
    .get(renderRegisterNaver)
    .post(createNewNaverUser)

router.get('/login/naver', passport.authenticate('naver',{ authType: 'reprompt' }));//네이버 로그인 라우터

router.get('/login/naver/callback', (req, res, next) => {//네이버 로그인 콜백 라우터
    passport.authenticate('naver', function (err, user, info){
        if (err) {
            return next(err);
        }
        if (!user) { 
            const { id } = info;
            req.session.joinUser = {
                snsId: id,
                email: info._json.response.email,
                // username: info._json.nickname,
            };
            return req.session.save(() => {
                res.redirect('/userSchemaAPI/register/naver');
            });
        }
    return req.login(user, function (error){
        if (error) {
            return next(error);
        }
        return res.status(200).redirect(`https://front.wilimbackend.tk/main`);
    });
    })(req, res, next);
});

router.route('/loginerror')//로그인실패시
    .post(loginerror)   

router.route('/session') //세션에 로그인 정보 있으면 로그인한 유저 정보 반환
    .get(getSessionInfo)

router.route('/resetPassword')
    .get(renderResetPassword)
    .post(resetPassword)//password 변경메일 보내는 라우터

router.route('/id/:id')
    .get(getUserInfoById) //id 일치하는 유저 가져옴
    .put(updateUserById) // 기존유저 update by id
    .delete(deleteUserById) // 기존 유저 delete by id

module.exports = router;
