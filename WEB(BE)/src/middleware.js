import User from './models/user';

//check if user is loggedin
module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        return res.redirect('/userSchemaAPI/login');
    }
    next();
}

// module.exports.isGoalOwner = async (req,res,next)=>{
//     const {username} = req.params;
//     const user = await User.findOne({username : username});
//     if (!campground.author.equals(req.user._id)){
//     req.flash('error','You are not in charge of this campground!');
//     return res.redirect(`/campgrounds/${id}`);
//     }
//     next();
// };
