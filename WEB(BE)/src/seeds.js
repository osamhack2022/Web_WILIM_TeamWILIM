//개발용 dummy data 심는 파일
//id, displayName, password, email, goal, plan

import mongoose from 'mongoose';
import {User} from './models/user';
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
        password : "1234",
        email : "bun73@naver.com"
    },
    {
        id : "leeji7682",
        displayName : "JeongIn",
        password : "1234",
        email : "leeji7682@gmail.com",
    },
    {
        id : "Cerealmaster0621",
        displayName : "cerealmaster",
        password : "1234",
        email : "cerealmaster@naver.com"
    },
    {
        id : "chnh506",
        displayName : "Chan",
        password : "1234",
        email : "kandy1002@naver.com"
    }
];

User.insertMany(data)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })