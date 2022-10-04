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
        type:Number,
        default : 0
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
    id: mongoose.Schema.Types.ObjectId,
});

userSchema.plugin(passportLocalMongoose,{ usernameField: "email" });//로그인할때 email,password 사용

const User = mongoose.model("User", userSchema);
export default User;
