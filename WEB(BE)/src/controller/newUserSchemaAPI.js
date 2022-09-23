import User from "../models/user";

module.exports.getNewUser = async (req,res,next) =>{
    res.json({"name" : "kangyoungJune"});
}