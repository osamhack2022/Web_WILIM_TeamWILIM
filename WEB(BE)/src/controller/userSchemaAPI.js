import User from "../models/user.js";

//GET entire user
module.exports.getUsers = async (req,res,next) =>{
    const users = await User.find({});
    res.send({ users });
}

//GET specified user
module.exports.getUserInfo = async (req,res,next) =>{
    const { displayName } = req.params;
    const user = await User.findOne({displayName : displayName});
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }
    res.send({user});
}

//POST create new user
module.exports.createNewUser = async (req,res,next) => {
    const createdUser = req.body;
    const newUser = await new User(createdUser);
    await newUser.save();
    res.send(newUser);
}

//PUT update userInfo
module.exports.updateUser = async (req,res,next) =>{
    const {displayName} = req.params;
    await User.findOneAndUpdate({displayName : displayName},req.body,{new : true, runValidators : true})
        .then((updatedUser) =>{
            res.send(updatedUser);
        })
        .catch((err)=>{
            return res.status(404).json({message : err});
        })
}

//DELETE delete user
module.exports.deleteUser = async(req,res,next)=>{
    const {displayName} = req.params;
    User.findOneAndDelete({displayName : displayName}, (err, deletedUser) => {
        if (err){
            return res.status(404).json({message: err});
        }
        else{
            res.send({deletedUser});
        }
    });
}