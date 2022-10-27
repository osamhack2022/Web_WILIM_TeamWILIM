//id, username, password, email, goal, plan
import mongoose from "mongoose";
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase : true,
        trim: true,
        unique: true,
    },
    username: {
        type: String,
        maxLength: 50,
        unique: true,
        required : true
    },
    serviceType: {
        type: String,
        enum : ['ARMY', 'NAVY', 'AIR_FORCE', 'MARINE','OTHER'],
        default : 'OTHER'
    },
    snsId:{
        type:String
    },
    provider : {
        type:String,
        default:null
    },
    personalPlanId: {
        type: mongoose.Schema.Types.ObjectId,    // user의 Plan List의 _id 값
        ref: "PlanList",
        default: null
    },
    goal : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "goalElement",
        default: null
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    likedPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    selectedRound: {type: String},  // 여러 시험 회차들 중 유저가 선택한 회차
    id: mongoose.Schema.Types.ObjectId,
});

userSchema.plugin(passportLocalMongoose,{ usernameField: "email" });//로그인할때 email,password 사용

const User = mongoose.model("User", userSchema);
export default User;
