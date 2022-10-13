import User from "../models/user.js";
import { PlanList } from "../models/personalPlan.js";

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
    const {id} = req.params;
    User.findByIdAndDelete(id, (err, deletedUser) => {
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
            //res.status(201).send(newUser);
            res.status(201).redirect(`/userSchemaAPI/id/${newUser.id}`);
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
                return res.status(200).redirect(`/userSchemaAPI/id/${user._id}`);
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
                return res.status(200).redirect(`/userSchemaAPI/id/${user._id}`);
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
