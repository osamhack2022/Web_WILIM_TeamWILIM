//id, displayName, password, email, goal, plan
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase : true,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    displayName: { //displayName 없으면 email 이 대신함
        type: String,
        maxLength: 50,
        unique: true,
    },
    serviceType: {
        type: String,
        enum : ['ARMY', 'NAVY', 'AIR_FORCE', 'MARINE','OTHER'],
        default : 'OTHER'
    },
    id: mongoose.Schema.Types.ObjectId,
});

const User = mongoose.model("User", userSchema);

// module.exports = { User };
export default User;
