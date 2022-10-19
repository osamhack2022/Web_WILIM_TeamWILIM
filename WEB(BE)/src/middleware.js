import User from './models/user';
import Post from "./models/post";
import Comment from "./models/comment";

//make session isLoggedIn true
module.exports.isLoggedIn = (req,res)=>{
    if(!req.isAuthenticated()){
        return res.status(404).json({msg : "유저정보를 찾을수 없습니다"});
    }
    next();
}

export const loggedInOnlyMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.status(404).json({ msg: "로그인한 상태에서만 이용 가능합니다."});
        // 혹은 이 다음에 로그인 페이지로 redirect해 주기
    }
};

export const publicOnlyMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        return res.status(404).json({ msg: "로그인한 상태에서는 접근 불가능한 페이지입니다."});
    }
};

export const checkOwnerMiddleware = async (req, res, next) => {
    const { id } = req.params;
    const loggedInUser = req.user;
    let subject = await Post.findById(id);
    if (!subject) {
        subject = await Comment.findById(id);
    }

    if(String(loggedInUser._id) === String(subject.owner)) {
        next();
    }  else {
        return res.status(404).json({ msg: "작성자만 수정 혹은 삭제할 수 있습니다."});
    }
};

// module.exports.isGoalOwner = async (req,res,next)=>{
//     const {username} = req.params;
//     const user = await User.findOne({username : username});
//     if (!GoalElement.user.equals(req.user._id)){
//     return res.redirect(`/userSchemaAPI/${username}`);
//     }
//     next();
// };
