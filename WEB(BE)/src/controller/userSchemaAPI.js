import User from "../models/user.js";

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

//POST create new user 회원가입은 이쪽에서!
module.exports.createNewUser = async (req,res,next) => {
    try {
        const { email, username, password, serviceType } = req.body;
        const user = new User({ email: email, username: username, serviceType : serviceType });
        const newUser = await User.register(user, password);
        req.login(newUser, err=>{
            if (err) return next(err);
            const returnUrl = req.session.returnTo || '/';
            delete req.session.returnTo;
            res.redirect(returnUrl);
        })
    } catch (e) {
        res.status(400).json({message : e}).redirect("/register");
    }
}

//GET render login
module.exports.renderLogin = (req,res,next)=>{
    res.render('userSchemaAPI/login');
}

//POST login
module.exports.login = async(req,res,next)=>{
    res.status(200).redirect('/');
}

//GET logout

//POST loginerror
module.exports.loginerror = (req,res,next) =>{
    res.status(404).json({message : "User not found"});
}