//id, displayName, password, email, goal, plan
// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        maxLength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 5,
    },
    displayName: {
        type: String,
        maxLength: 50,
    }
});

const User = mongoose.model("User", userSchema);

// module.exports = { User };
export default User;