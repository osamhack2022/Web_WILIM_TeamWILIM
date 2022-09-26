//id, username, password, email, goal, plan
import mongoose from "mongoose";
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase : true,
        trim: true,
        unique: true,
        required: true
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
    id: mongoose.Schema.Types.ObjectId,
});

//유저스키마에 passport-local-mongoose 플러그인 함으로써 유저가 회원가입할때 받아온 비밀번호를 자동으로 hashing 해서 스키마에 추가해줌.
userSchema.plugin(passportLocalMongoose,{ usernameField: "email" });

const User = mongoose.model("User", userSchema);
export default User;
