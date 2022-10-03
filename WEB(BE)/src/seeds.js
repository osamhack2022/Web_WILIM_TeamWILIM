//개발용 dummy data 심는 파일
//id, username, password, email, goal, plan
import mongoose from 'mongoose';
import User from './models/user.js';
import GoalElement from './models/goalElement';
import "./env.js";
import {db_cstring, qnet_key} from "./db.js";
import axios from 'axios';
import express from 'express';
import qnetInfo from './qnetInfo.json';

const app = express();

const item = qnetInfo.response.body.items.item
const qnetLength = Object.keys(item).length;

//국가자격시험일정 쿼리 명세 
//serviceKey, 
// numOfRows 한페이지 결과 수, 
// pageNo 페이지 넘버
// dataFormat	json으로
// implYy 시행년도
// qualgbCd 자격구분코드
// jmCd 종목코드값
const serviceKey = qnet_key;
let numOfRows = 10;
let pageNo;
const dataFormat = 'json';

for(let i = 0; i< qnetLength; i++){
    console.log(item[i]);
}



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