import User from './models/user';

//make session isLoggedIn true
module.exports.isLoggedIn = (req,res)=>{
    if(!req.isAuthenticated()){
        return res.status(404).json({msg : "유저정보를 찾을수 없습니다"});
    }
    next();
}

// module.exports.isGoalOwner = async (req,res,next)=>{
//     const {username} = req.params;
//     const user = await User.findOne({username : username});
//     if (!GoalElement.user.equals(req.user._id)){
//     return res.redirect(`/userSchemaAPI/${username}`);
//     }
//     next();
// };
