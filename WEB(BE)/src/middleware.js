import User from './models/user';

//make session isLoggedIn true
module.exports.isLoggedIn = (req,res)=>{
    req.session.isLoggedIn = true;
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
