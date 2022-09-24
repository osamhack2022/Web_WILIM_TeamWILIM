//개발용 dummy data 심는 파일
//id, displayName, password, email, goal, plan
import mongoose from 'mongoose';
import User from './models/user.js';
import "./env.js";
import {db_cstring} from "./db.js";

//mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(db_cstring);
    console.log("database connected!");
}

const data = [
    {
        id : "HyeongGeun",
        displayName : "Geun-Oh",
        password : "123456",
        email : "bun73@naver.com"
    },
    {
        id : "leeji7682",
        displayName : "JeongIn",
        password : "123456",
        email : "leeji7682@gmail.com",
    },
    {
        id : "Cerealmaster0621",
        displayName : "cerealmaster",
        password : "123456",
        email : "cerealmaster@naver.com"
    },
    {
        id : "chnh506",
        displayName : "Chan",
        password : "123456",
        email : "kandy1002@naver.com"
    }
];

const seedDB = async () =>{
    await User.deleteMany({});
    await User.insertMany(data);
    mongoose.connection.close();
    console.log("seeded done!"); 
};

seedDB();