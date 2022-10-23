import User from "../models/user.js";
import GoalElement from "../models/goalElement.js";
import { PlanList, PlanElement } from "../models/personalPlan.js";
import Comment from "../models/comment";
import Post from  "../models/post";
import ExpressError from "../utils/error.js";
import nodemailer from 'nodemailer';
import "../env.js";
import { mail_id,mail_password, smtp_port} from "../db.js";

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

//PUT reset password
module.exports.resetPassword = async(req,res,next)=>{
    const {email} = req.body;
    const user = await User.find({email : email});
    const tempPassword = 'test';
    // await User.findByIdAndUpdate(user._id,{password : tempPassword});
//     const data = {email : email, title : `${user.username}님, 임시비밀번호를 알려드립니다!`, message : `안녕하세요 WILIM 관리자 입니다.

// ${user.username}님의 바뀐 임시 비밀번호는 ${tempPassword}입니다.

// 로그인 후 꼭 유저정보에서 변경해주세요!`};
    let transporter = nodemailer.createTransport({
        service: 'naver',
        host: 'smtp.naver.com',
        port: 465,
        secure: true,
        auth: {
            user: "wilim_adm@naver.com",
            pass: "wilimadmin1!",
        },
    });
    let mailOptions = {
        from: `wilim_adm@naver.com`,
        to: 'cerealmaster@naver.com',
        subject: '윌림테스트',
        text: '테스트',
    };
    await transporter.sendMail(mailOptions);
}

//POST login 로그인 로직 변경으로 인한 모듈 미사용
// module.exports.login = async(req,res,next)=>{
//     const {email} = req.body;
//     const user = await User.findOne({email : email});
//     req.login(user, (error) => { 
//         if (error) {
//             return next(error);
//         }
//         return res.status(200).json(user);
//         //res.send(user);
//     });
// }

//GET logout

//POST loginerror
module.exports.loginerror = (req,res,next) =>{
    res.status(404).json({message : "User not found"});
}
