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

//국가자격시험일정 쿼리 명세 
//serviceKey, 
// numOfRows 한페이지 결과 수, 
// pageNo 페이지 넘버
// dataFormat	json으로
// implYy 시행년도
// qualgbCd 자격구분코드
// jmCd 종목코드값
//&numOfRows=10&pageNo=1&dataFormat=json&implYy=2022&qualgbCd=T&jmCd=7916
const url ='http://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList'
const item = qnetInfo.response.body.items.item;
const serviceKey = qnet_key;
let numOfRows = 20;
let pageNo=1;
const dataFormat = 'json';
const implYy = 2022;
let qualgbCd;
let jmCd; 

console.log(`${url}?serviceKey=${qnet_key}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataFormat=${dataFormat}&implYy=${implYy}&qualgbCd=${item[0].qualgbcd}&jmCd=${item[0].jmcd}`);



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