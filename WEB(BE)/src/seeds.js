//개발용 dummy data 심는 파일
import mongoose from 'mongoose';
import User from './models/user.js';
import GoalElement from './models/goalElement';
import "./env.js";
import {db_cstring, qnet_key} from "./db.js";
import axios from 'axios';
import express from 'express';
import qnetInfo from './qnetInfo.json';
import fs from 'fs';

const app = express();


mongoose.connection
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

// const url ='http://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList'
// const items = qnetInfo.response.body.items.item;//시험종목 정보
// const serviceKey = qnet_key;
// let numOfRows = 20;
// let pageNo=1;
// const dataFormat = 'json';
// let implYy = 2022;
// const length = items.length;//시험 종목 갯수
// let obj = [];
// let cnt = 0;

// //<---------axios 로 일정관련 API 하나하나 가져오는방법--------->
// //<---------성능 문제인지 axios 로 get 하는 도중 데이터가 undefined 로 가져와진다...---------->
// // const seedDB = async() =>{
// //     for await (let item of items){
// //         const response = await axios.get(`${url}?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataFormat=${dataFormat}&implYy=${implYy}&qualgbCd=${item.qualgbcd}&jmCd=${fillZero(String(item.jmcd))}`);
// //         const totalCount = response.data.body.totalCount;
// //         let objInsideObj = [];
// //         for(let i = 0; i < totalCount; i++){
// //             const data = {
// //                 implYy : response.data.body.items[i].implYy,
// //                 implseq : response.data.body.items[i].implSeq,
// //                 dateDescription : response.data.body.items[i].description,
// //                 docRegStartDt : response.data.body.items[i].docRegStartDt,
// //                 docRegEndDt : response.data.body.items[i].docRegEndDt,
// //                 docExamStartDt : response.data.body.items[i].docExamStartDt,
// //                 docExamEndDt : response.data.body.items[i].docExamEndDt,
// //                 docPassDt : response.data.body.items[i].docPassDt,
// //                 pracRegStartDt : response.data.body.items[i].pracRegStartDt,
// //                 pracRegEndDt : response.data.body.items[i].pracRegEndDt,
// //                 pracExamStartDt : response.data.body.items[i].pracExamStartDt,
// //                 pracExamEndDt : response.data.body.items[i].pracExamEndDt,
// //                 pracPassDt : response.data.body.items[i].pracPassDt
// //             };
// //             objInsideObj.push(data);
// //         } 
// //         obj.push(objInsideObj);
// //     }
// //     console.log(obj);
// // }


//<-------종목 이름, 종류만 DB 에 넣어둔 후 일정에 관련된 API는 URL만 DB에 넣는 방법-------->
//<-------현재 사용중-------->
// const seedDB = (async (items)=>{
//     await GoalElement.deleteMany({});
//     for(const item of items){
//         const dataJson = {
//             name : item.jmfldnm,
//             qualgbnm : item.qualgbnm,
//             description : item.description,
//             seriesnm : item.seriesnm,
//             obligfldnm : item.obligfldnm,
//             mdobligfldnm : item.mdobligfldnm,
//             dateUrl : `${url}?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataFormat=${dataFormat}&implYy=${implYy}&qualgbCd=${item.qualgbcd}&jmCd=${fillZero((item.jmcd).toString())}`,
//             isQnet : true
//         }
//         const newData = new GoalElement(dataJson);
//         await newData.save();
//     }
// })

// seedDB(items)
//     .then(()=>{
//         mongoose.connection.close();
//         console.log(length+" seeded done!");
//     })


// // 국가자격시험 공개문제 조회 서비스 Fetch 
const item = qnetInfo.response.body.items.item;

const urlEndPoint = `http://apis.data.go.kr/B490007/openQst`;
const serviceKey = qnet_key;    // 공공데이터포털에서 발급받은 인증키
let numOfRows = 10;           // 한 페이지 결과 수
let pageNo = 1;               // 페이지 번호
const dataFormat = "json"       // 응답 데이터 표준 형식 - xml / json (대소문자 구분 없음)
let qualgbCd;           // 자격구분코드 - T: 국가기술자격 - C: 과정평가형자격 - W: 일학습병행자격
let seriesCd;            // 계열코드
let jmCd;                // 종목코드
let jmNm;                // 종목명

const urlOpenQstList = `${urlEndPoint}/getOpenQstList?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataFormat=${dataFormat}&qualgbCd=${item[355].qualgbcd}&seriesCd=${String(item[355].seriescd).padStart(2, '0')}&jmCd=${String(item[355].jmcd).padStart(4, '0')}&jmNm=${encodeURIComponent(item[355].jmfldnm)}`;

const seedDB = async() => {
    try {
        const resList = await axios.get(urlOpenQstList);
        const listData = resList.data.body.items;
        console.log(listData);

        const urlOpenQst = `${urlEndPoint}/getOpenQst?serviceKey=${serviceKey}&dataFormat=${dataFormat}&qualgbCd=${listData.qualgbcd}&artlSeq=${listData.artlSeq}`;
        const resQst = await axios.get(urlOpenQst);
        const qstData = resQst.data.body.fileList;
        console.log(qstData);
    } catch(err) {
        console.error(err);
    }
}

seedDB();
