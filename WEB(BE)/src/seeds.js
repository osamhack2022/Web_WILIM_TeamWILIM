//개발용 dummy data 심는 파일
//id, username, password, email, goal, plan
import mongoose from 'mongoose';
import User from './models/user.js';
import "./env.js";
import { db_cstring } from "./db.js";

//mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(db_cstring);
    console.log("database connected!");
}

const data = [
    {
        username : "Geun-Oh",
        password : "00000000",
        email : "bun73@naver.com",
        serviceType : 'ARMY'
    },
    {
        username : "JeongIn",
        password : "00000000",
        email : "leeji7682@gmail.com",
        serviceType : 'ARMY'
    },
    {
        username : "cerealmaster",
        password : "00000000",
        email : "cerealmaster@naver.com",
        serviceType : 'ARMY',
    },
    {
        username : "Chan",
        password : "00000000",
        email : "kandy1002@naver.com",
        serviceType : 'AIR_FORCE',
    }
];

const seedDB = async () =>{
    await User.deleteMany({});
    await User.insertMany(data);
    mongoose.connection.close();
    console.log("seeded done!"); 
};

seedDB();