//개발용 dummy data 심는 파일
//id, username, password, email, goal, plan
import mongoose from 'mongoose';
import User from './models/user.js';
import GoalElement from './models/goalElement';
import "./env.js";
import {db_cstring, qnet_key} from "./db.js";
import axios from 'axios';
import express from 'express';

const app = express();

// //mongoose connection
// main().catch(err => console.log(err));
// async function main() {
//     await mongoose.connect(db_cstring);
//     console.log("database connected!");
// }

// const url = 'http://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList'

// app.get('/seed',async (req,res,next)=>{
//     try{
//         const data = await axios.get(url, {serviceKey : qnet_key})
//         res.send(data.body);
//     }catch(e){
//         next(e);
//     }
// })

// const seedDB = async () =>{
//     await User.deleteMany({});
//     await User.insertMany(data);
//     mongoose.connection.close();
//     console.log("seeded done!"); 
// };

// seedDB();