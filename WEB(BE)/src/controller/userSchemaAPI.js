import User from "../models/user.js";
import GoalElement from "../models/goalElement.js";
import { PlanList, PlanElement } from "../models/personalPlan.js";
import Comment from "../models/comment";
import Post from  "../models/post";
import ExpressError from "../utils/error.js";
import formData from 'form-data';
import Mailgun from 'mailgun.js';
const mailgun = new Mailgun(formData);
import "../env.js";
import { mail_id, mail_key} from "../db.js";

//GET entire user
module.exports.getUsers = async (req,res,next) =>{
    const users = await User.find({});
    res.send(users);
}

//GET specified user by ID
module.exports.getUserInfoById = async (req,res,next) =>{
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }
    res.status(201).json({user});
}

//PUT update userInfo by ID
module.exports.updateUserById = async (req,res,next) =>{
    try{
        const {id} = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new :true, runValidators : true});
        res.send(updatedUser);
    } catch(err){
        return res.status(404).json({message : err});
    }
}

//DELETE delete user by ID
module.exports.deleteUserById = async(req,res,next)=>{
    try{
        const {id} = req.params;
        const user = await User.findById(id); //유저정보 반환
        await Comment.deleteMany({owner:id});//유저가 올린 댓글 삭제
        await Post.deleteMany({owner:id});//유저가 올린 게시글 삭제
        await GoalElement.findByIdAndUpdate(user.goal, {$pull:{users : id}})//ctfInfo 에서 이 자격증을 선택한 유저 뽑아내기
        await PlanElement.deleteMany({ planListId: user.personalPlanId }) //planElement 정보 모두 삭제
        await PlanList.findByIdAndDelete(user.personalPlanId);//planList 삭제
        const deletedUser = await User.findByIdAndDelete(id);//user 정보 삭제
        res.send(deletedUser);
    }catch(err){
        res.status(400).json({msg : err})
    }
}

//GET render Register
module.exports.renderRegister = (req,res,next)=>{
    res.render('userSchemaAPI/register');
}

//GET render KAKAO register
module.exports.renderRegisterKakao = (req,res,next)=>{
    res.render('userSchemaAPI/kakaoRegister');
}

//POST create new user 회원가입은 이쪽에서!
module.exports.createNewUser = async (req,res,next) => {
    try {
        const { email, username, password, serviceType } = req.body;
        const user = new User({ email: email, username: username, serviceType : serviceType });
        const newUser = await User.register(user, password);
        req.login(user, err=>{
            if (err) return next(err);
            //res.status(201).send(newUser);
            res.status(201).redirect(`/userSchemaAPI/id/${newUser._id}`);
        })
    } catch (e) {
        res.status(400).json({message : e});
    }
}

//POST create new user using kakao
module.exports.createNewKakaoUser = async(req,res,next)=>{
    try {
        const { snsId, username, email } = req.session.joinUser;
        const user = await User.create({
            provider : 'kakao',
            snsId : snsId,
            email: email,
            username: req.body.username || username,
            serviceType : req.body.serviceType
        });
        req.session.regenerate(() => { 
            req.login(user, (error) => { 
                if (error) {
                    return next(error);
                }
                return res.status(200).redirect(`https://front.wilimbackend.tk/main`);
            });
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
}

//GET render NAVER register
module.exports.renderRegisterNaver = (req,res,next)=>{
    res.render('userSchemaAPI/naverRegister');
}

//POST create new user using naver
module.exports.createNewNaverUser = async(req,res,next)=>{
    try {
        const { snsId, email} = req.session.joinUser;
        const user = await User.create({
            provider : 'naver',
            snsId : snsId,
            username: req.body.username,
            serviceType : req.body.serviceType,
            email : email
        });
        req.session.regenerate(() => { 
            req.login(user, (error) => { 
                if (error) {
                    return next(error);
                }
                return res.status(200).redirect(`https://front.wilimbackend.tk/main`);
            });
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
}

//GET render login
module.exports.renderLogin = (req,res,next)=>{
    res.render('userSchemaAPI/login');
}

module.exports.getSessionInfo = async (req,res,next)=>{
    if(req.isAuthenticated()){
        const user = req.user
        res.status(200).send(user);
    }else{
        res.status(404).json({msg:'유저 정보를 찾을수 없습니다'});
    }
}

//GET render reset password
module.exports.renderResetPassword = async(req,res,next)=>{
    if(req.user){//유저 로그인 되어있으면 안됨
        return res.redirect('https://candid-nasturtium-545b93.netlify.app/')
    }
    const entireUsers = await User.find({});
    return res.render('userSchemaAPI/resetPassword',{entireUsers});
}

//PUT reset password 개발중....
module.exports.resetPassword = async(req,res,next)=>{
    const {username ,email} = req.body;
    const tempPassword = Math.round(Math.random() * 1e9);
    const mg = mailgun.client({
        username: 'api',
        key: `${mail_key}`,
    });
    await mg.messages
        .create(`${mail_id}`, {
            from: `WILIM_ADMIN👻 <postmaster@${mail_id}>`,
            to: [`${email}`],
            subject: `${username}님, 비밀번호를 알려드릴게요!`,
            text: `안녕하세요 ${username}님! WILIM 입니다.초기화된 비밀번호는 ${tempPassword}입니다.로그인 후 프로필 페이지에서 비밀번호를 변경해주세요.`,
            html : `<h1>안녕하세요 ${username}님! WILIM 입니다.</h1><div>초기화된 비밀번호는 ${tempPassword}입니다.</div><div>로그인 후 프로필 페이지에서 비밀번호를 변경해주세요.</div>`
        })
        .then(msg => {
            res.send(`<script type="text/javascript">alert("임시 비밀번호를 보냈습니다. 메일함/스팸메일함을 확인해주세요"); window.location.href = "https://front.wilimbackend.tk" </script>`);
        })
        .catch(err => console.log(err));
}

//POST login 로그인 로직 변경으로 인한 모듈 미사용

//GET logout

//POST loginerror
module.exports.loginerror = (req,res,next) =>{
    res.status(404).json({message : "User not found"});
}
