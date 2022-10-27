//개발용 dummy data 심는 파일
import mongoose from 'mongoose';
import User from './models/user.js';
import GoalElement from './models/goalElement';
import "./env.js";
import {db_cstring, qnet_key} from "./db.js";
import axios from 'axios';
import express from 'express';
import qnetInfo from './seeds/qnetInfo.json';
import fs from 'fs';
import description from './seeds/description.json';
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


// // 공개문제 서비스 API 테스트용 코드
// const item = qnetInfo.response.body.items.item;

// const urlEndPoint = `http://apis.data.go.kr/B490007/openQst`;
// const serviceKey = qnet_key;    // 공공데이터포털에서 발급받은 인증키
// let numOfRows = 10;           // 한 페이지 결과 수
// let pageNo = 1;               // 페이지 번호
// const dataFormat = "json"       // 응답 데이터 표준 형식 - xml / json (대소문자 구분 없음)
// let qualgbCd;           // 자격구분코드 - T: 국가기술자격 - C: 과정평가형자격 - W: 일학습병행자격
// let seriesCd;            // 계열코드
// let jmCd;                // 종목코드
// let jmNm;                // 종목명

// const urlOpenQstList = `${urlEndPoint}/getOpenQstList?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataFormat=${dataFormat}&qualgbCd=${item[475].qualgbcd}&seriesCd=${String(item[475].seriescd).padStart(2, '0')}&jmCd=${String(item[475].jmcd).padStart(4, '0')}&jmNm=${encodeURIComponent(item[475].jmfldnm)}`;

// const seedDB = async() => {
//     try {
//         const resList = await axios.get(urlOpenQstList);
//         const listData = resList.data.body.items[0];
//         const listDataJson = {
//             artlSeq: listData.artlSeq,
//             qualgbCd: listData.qualgbCd,
//         };

//         const urlOpenQst = `${urlEndPoint}/getOpenQst?serviceKey=${serviceKey}&dataFormat=${dataFormat}&qualgbCd=${listDataJson.qualgbCd}&artlSeq=${listDataJson.artlSeq}`;
//         const resQst = await axios.get(urlOpenQst);
//         const qstData = resQst.data.body;
//         console.log(qstData);
//     } catch(err) {
//         console.error(err);
//     }
// }

// seedDB();

// 실제 mongoDB에 다운로드 진행했을 때 사용한 코드
// 국가기술자격(qualgbcd: T)까지는 잘 진행됐으나, 국가전문자격(qualgbcd: S)부터 에러 발생 .. 해결 필요
// const urlEndPoint_examSchd ='http://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList';  // 시험일정 정보 url 엔드포인트
// const urlEndPoint_openQst = `http://apis.data.go.kr/B490007/openQst`;   // 공개문제 url 엔드포인트
// const items = qnetInfo.response.body.items.item;    // 시험종목 정보
// const serviceKey = qnet_key;    // 공공데이터포털에서 발급받은 인증키
// let numOfRows = 10;           // 한 페이지 결과 수
// let pageNo = 1;               // 페이지 번호
// const dataFormat = "json"       // 응답 데이터 표준 형식 - xml / json (대소문자 구분 없음)
// let implYy = 2022;

// const seedDB = async() => {
//     try {
//         await GoalElement.deleteMany({});

//         for(const item of items) {
//             let fileList;

//             // 1. 국가자격 공개문제 목록 조회
//             const urlOpenQstList = `${urlEndPoint_openQst}/getOpenQstList?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataFormat=${dataFormat}&qualgbCd=${item.qualgbcd}&seriesCd=${String(item.seriescd).padStart(2, '0')}&jmCd=${String(item.jmcd).padStart(4, '0')}&jmNm=${encodeURIComponent(item.jmfldnm)}`;
//             const resQstList = await axios.get(urlOpenQstList);
//             const resData = resQstList.data.body.items;
//             const listData = resData.length !== 0 ? resData[0] : null; 
//             if(listData) {   
//                 // 2. 국가자격 공개문제 상세 조회
//                 const urlOpenQst = `${urlEndPoint_openQst}/getOpenQst?serviceKey=${serviceKey}&dataFormat=${dataFormat}&qualgbCd=${listData.qualgbCd}&artlSeq=${listData.artlSeq}`;
//                 const resQst = await axios.get(urlOpenQst);
//                 fileList = resQst.data.body.fileList;
//             }

//             // 3. 종합해서 mongoDB에 저장
//             const dataJson = {
//                 name : item.jmfldnm,
//                 qualgbnm : item.qualgbnm,
//                 description : item.description,
//                 seriesnm : item.seriesnm,
//                 obligfldnm : item.obligfldnm,
//                 mdobligfldnm : item.mdobligfldnm,
//                 dateUrl : `${urlEndPoint_examSchd}?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataFormat=${dataFormat}&implYy=${implYy}&qualgbCd=${item.qualgbcd}&jmCd=${fillZero((item.jmcd).toString())}`,
//                 mockLink: fileList ? fileList : {
//                     fileNm: "공개문제 링크를 찾을 수 없습니다.",
//                     fileSn: null,
//                     fileUrl: "공개문제 링크를 찾을 수 없습니다."
//                 },
//                 isQnet : true
//             }
//             console.log(dataJson);
//             const newData = new GoalElement(dataJson);
//             await newData.save();
//         }
//     } catch(err) {
//         console.error(err);
//     }
// }

// seedDB()
//     .then(()=>{
//         console.log("qnet done!");
//     })

//국가자격

// const gtelp = {
//   name : "지텔프(G-TELP)",
//   isQnet : false,
//   description : "1985년 샌디에이고 주립대학교 산하 연구기관 국제 테스트 연구원(ITSC, International Testing Services Center)이 캘리포니아 주립대학교 로스앤젤레스, 조지타운 대학교 등의 교수진과 언어학자, 평가 전문가와 함께 개발한 외국인을 위한 영어 시험이다. 수준별 문법, 청취, 어휘 및 독해를 평가하기 위한 G-TELP Level Test (Level 1~5)), 말하기와 쓰기 능력을 측정하기 위한 G-TELP Speaking과 G-TELP Writing, 비즈니스 실무 영어 능력을 평가하기 위한 G-TELP Business, 초등학생 및 청소년의 어학 수준을 평가하는 G-TELP Jr. 등으로 구성되어 있다.",
//   isQnetFalseDate : {
//     items : [
//       {
//         implYy : "2022",
//         description : "제486회",
//         docRegStartDt : "20220923",
//         docRegEndDt : "20220930",
//         docExamStartDt : "20221016",
//         docExamEndDt : "20221016",
//         docPassDt : "20221021"
//       },
//       {
//         implYy : "2022",
//         description : "제487회(IBT)",
//         docRegStartDt : "20221005",
//         docRegEndDt : "20221011",
//         docExamStartDt : "20221023",
//         docExamEndDt : "20221023",
//         docPassDt : "20221028"
//       },
//       {
//         implYy : "2022",
//         description : "제488회",
//         docRegStartDt : "20221007",
//         docRegEndDt : "20221014",
//         docExamStartDt : "20221030",
//         docExamEndDt : "20221030",
//         docPassDt : "20221104"
//       },
//       {
//         implYy : "2022",
//         description : "제489회",
//         docRegStartDt : "20221021",
//         docRegEndDt : "20221028",
//         docExamStartDt : "20221113",
//         docExamEndDt : "20221113",
//         docPassDt : "20221118"
//       },
//       {
//         implYy : "2022",
//         description : "제490회",
//         docRegStartDt : "20221104",
//         docRegEndDt : "20221111",
//         docExamStartDt : "20221127",
//         docExamEndDt : "20221127",
//         docPassDt : "20221202"
//       },
//       {
//         implYy : "2022",
//         description : "제491회(IBT)",
//         docRegStartDt : "20221116",
//         docRegEndDt : "20221122",
//         docExamStartDt : "20221204",
//         docExamEndDt : "20221204",
//         docPassDt : "20221209"
//       },
//       {
//         implYy : "2022",
//         description : "제492회",
//         docRegStartDt : "20221118",
//         docRegEndDt : "20221125",
//         docExamStartDt : "20221211",
//         docExamEndDt : "20221211",
//         docPassDt : "20221216"
//       },
//       {
//         implYy : "2022",
//         description : "제493회",
//         docRegStartDt : "20221202",
//         docRegEndDt : "20221209",
//         docExamStartDt : "20221225",
//         docExamEndDt : "20221225",
//         docPassDt : "20221230"
//       },
//     ]
//   }
// }

// const toeic = {isQnetFalseDate:{items:[{implYy:"2022",description:"제472회",docRegStartDt:"20220829",docRegEndDt:"20221003",docExamStartDt:"20221015",docExamEndDt:"20221015",docPassDt:"20221026"},{implYy:"2022",description:"제473회",docRegStartDt:"20220912",docRegEndDt:"20221017",docExamStartDt:"20221030",docExamEndDt:"20221030",docPassDt:"20221109"},{implYy:"2022",description:"제474회",docRegStartDt:"20220926",docRegEndDt:"20221031",docExamStartDt:"20221113",docExamEndDt:"20221113",docPassDt:"20221123"},{implYy:"2022",description:"제475회",docRegStartDt:"20221003",docRegEndDt:"20221107",docExamStartDt:"20221120",docExamEndDt:"20221120",docPassDt:"20221201"},{implYy:"2022",description:"제476회",docRegStartDt:"20221010",docRegEndDt:"20221114",docExamStartDt:"20221127",docExamEndDt:"20221127",docPassDt:"20221207"},{implYy:"2022",description:"제477회",docRegStartDt:"20221024",docRegEndDt:"20221128",docExamStartDt:"20221211",docExamEndDt:"20221211",docPassDt:"20221221"},{implYy:"2022",description:"제478회",docRegStartDt:"20221107",docRegEndDt:"20221212",docExamStartDt:"20221225",docExamEndDt:"20221225",docPassDt:"20230105"}]},name:"토익",description:{"토익(TOEIC)은 국제 의사 소통을 위한 영어 시험(Test Of English for International Communication)의 약자로서, 영어가 모국어가 아닌 사람을 대상으로 일상 생활 및 비즈니스 현장에서 요구되는 실용적인 영어 구사 능력을 갖추었는지 평가하는 시험이다."},isQnet:false}

// const khistory = {isQnetFalseDate : {items : [{implYy:"2022",description:"제61회",docRegStartDt:"20220926",docRegEndDt:"20221004",docExamStartDt:"20221022",docExamEndDt:"20221022",docPassDt:"20221104"},{implYy:"2022",description:"제62회",docRegStartDt:"20221107",docRegEndDt:"20221114",docExamStartDt:"20221203",docExamEndDt:"20221203",docPassDt:"20221216"}]},name:"한국사능력검정시험",description:"한국사 능력을 평가하고 검정하는 시험으로 교육부장관 소속의 국사편찬위원회가 주관한다.",isQnet:false}

// const ksat = {isQnetFalseDate:{items:[{implYy:"2022",description:"6월모의평가",docRegStartDt:"20220404",docRegEndDt:"20220414",docExamStartDt:"20220609",docExamEndDt:"20220609",docPassDt:"20220706"},{implYy:"2022",description:"9월모의평가",docRegStartDt:"20220627",docRegEndDt:"20220707",docExamStartDt:"20220831",docExamEndDt:"20220831",docPassDt:"20220929"},{implYy:"2022",description:"대학수학능력시험",docRegStartDt:"20220818",docRegEndDt:"20220902",docExamStartDt:"20221117",docExamEndDt:"20221117",docPassDt:"20221209"}]},name:"대학수학능력시험",description:"대학 교육에 필요한 수학 능력 측정을 위한 시험이다.",isQnet:false}

// const compCert = {isQnetFalseDate : {items:[{implyYy : "2022", description : "컴퓨터활용능력1급(상시)"},{implYy : "2022", description : "컴퓨터활용능력2급(상시)"}]},name : "컴퓨터활용능력", isQnet : false , description : "대한상공회의소에서 주관하는 스프레드시트와 데이터베이스 관련 국가기술자격. 1급과 2급으로 나뉘어져 있으며, 매일 시험을 실시하고있다."}

// let response = new GoalElement(gtelp);
// response.save();
// response = new GoalElement(toeic);
// response.save();
// response = new GoalElement(ksat);
// response.save();
// response = new GoalElement(khistory);
// response.save();
// response = new GoalElement(compCert);
// response.save()
//     .then(()=>{
//         mongoose.connection.close();
//         console.log("isQnetFalse done!")
//     })

const descriptions = description.response.body.items.item;

const updateDB = async ()=>{
    for (const d of descriptions){
        const descriptionName = d.jmNm;
        const changedDB = await GoalElement.findOneAndUpdate({name : descriptionName},{description : d},{new : true, runValidators : true})
        console.log(changedDB);
    }
}

updateDB()
    .then(()=>
        {mongoose.connection.close();
        console.log("updateDB Done!");}
    )