import User from "../models/user.js";

module.exports.getUsers = async (req,res,next) =>{
    const users = await User.find({});
    res.send({ users });
}

module.exports.getUserInfo = async (req,res,next) =>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.send(user);
}