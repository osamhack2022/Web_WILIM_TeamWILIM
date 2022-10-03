import User from "../models/user.js";
import { PlanList } from "../models/personalPlan.js";

//GET entire user
module.exports.getUsers = async (req,res,next) =>{
    const users = await User.find({});
    res.send(users);
}

//GET specified user
module.exports.getUserInfo = async (req,res,next) =>{
    const { username } = req.params;
    const user = await User.findOne({username : username});
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }
    res.status(201).json({email : user.email , username : user.username, serviceType : user.serviceType});
}

//PUT update userInfo
module.exports.updateUser = async (req,res,next) =>{
    try{
        const {username} = req.params;
        const updatedUser = await User.findOneAndUpdate({username : username},req.body,{new : true, runValidators : true})
        res.send(updatedUser);
    } catch(err){
        return res.status(404).json({message : err});
    }
}

//DELETE delete user
module.exports.deleteUser = async(req,res,next)=>{
    const {username} = req.params;
    User.findOneAndDelete({username : username}, (err, deletedUser) => {
        if (err){
            return res.status(404).json({message: err.message});
        }
        else{
            res.send(deletedUser);
        }
    });
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
        req.login(newUser, err=>{
            if (err) return next(err);
            //res.status(201).json({newUser});
            res.status(201).redirect(`/userSchemaAPI/${newUser.username}`);
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
        });
        req.session.regenerate(() => { // 기존 회원가입을 위해 생성한 세션을 지우고
            req.login(user, (error) => { // 새로운 로그인 세션을 생성한다.
                if (error) {
                    next(error);
        }
        return res.redirect(`/userSchemaAPI/${user.username}`); // 회원가입 완료!
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

//POST login
module.exports.login = async(req,res,next)=>{
    const {email} = req.body;
    const user = await User.findOne({email : email});
    // res.status(200).json({message : user.email});
    res.status(200).redirect(`/userSchemaAPI/${user.username}`);
}

//GET logout

//POST loginerror
module.exports.loginerror = (req,res,next) =>{
    res.status(404).json({message : "User not found"});
}