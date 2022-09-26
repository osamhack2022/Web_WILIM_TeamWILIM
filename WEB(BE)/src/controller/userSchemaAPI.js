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
    res.send(user);
}

//POST create new user 회원가입은 이쪽에서!
module.exports.createNewUser = async (req,res,next) => {
    try{
        const {email, username, password, serviceType} = req.body;
        const user = new User({email : email, username : username, serviceType : serviceType});
        const newUser = await User.register(user,password);
        res.send(newUser);
    } catch(e){
        return res.status(404).json({message : e.message})
    }
    
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

//POST login  res.status(200).json({email, username, serviceType, goal})
module.exports.login = async(req,res,next)=>{
    const {email} = req.body;
    const user = await User.findOne({email : email});
    res.status(200).json({"email" : user.email, "username" : user.username, "servictType" : user.serviceType});
}