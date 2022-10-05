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


//mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(db_cstring);
    console.log("database connected!");
}

function fillZero(str){
    return str.length >= 4 ? str:new Array(4-str.length+1).join('0')+str;
}
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
const items = qnetInfo.response.body.items.item;//시험종목 정보
const serviceKey = qnet_key;
let numOfRows = 20;
let pageNo=1;
const dataFormat = 'json';
let implYy = 2022;
const length = items.length;//시험 종목 갯수
let obj = [];


// console.log(`${url}?serviceKey=${qnet_key}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataFormat=${dataFormat}&implYy=${implYy}&qualgbCd=${item[0].qualgbcd}&jmCd=${jmCd}`);
// res.data.body.items
const seedDB = ((item)=>{
    axios.get(`${url}?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataFormat=${dataFormat}&implYy=${implYy}&qualgbCd=${item.qualgbcd}&jmCd=${fillZero((item.jmcd).toString())}`)
    .then(async (res)=>{
        const data = await res.data.body.items;
        const dataJson = {
            name : item.jmfldnm,
            qualgbnm : item.qualgbnm,
            description : item.description,
            seriesnm : item.seriesnm,
            obligfldnm : item.obligfldnm,
            mdobligfldnm : item.mdobligfldnm,
            implYy : data.implYy,
            implseq : data.implSeq,
            dateDescription : data.dateDescription,
            docRegStartDt : data.docRegStartDt,
            docRegEndDt : data.docRegEndDt,
            docExamStartDt : data.docExamStartDt,
            docExamEndDt : data.docExamEndDt,
            docPassDt : data.docPassDt,
            pracRegStartDt : data.pracRegStartDt,
            pracRegEndDt : data.pracRegEndDt,
            pracExamStartDt : data.pracExamStartDt,
            pracExamEndDt : data.pracExamEndDt,
            pracPassDt : data.pracPassDt
        }
        const newData = new GoalElement(dataJson);
        await newData.save();
    }).catch((e)=>console.log(e))
})

for await (const item of items){
    seedDB(item);
}
// const seedDB = async () =>{
//     await User.deleteMany({});
//     await User.insertMany(data);
//     mongoose.connection.close();
//     console.log("seeded done!"); 
// };
