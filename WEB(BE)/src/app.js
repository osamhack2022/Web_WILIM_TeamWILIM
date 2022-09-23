// es6 way
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import newUserSchemaAPIRoutes from './routes/newUserSchemaAPI';
//순서대로 개발 끝나면 코맨트 풀기!
// import newUserInfoFetchingAPIRoutes from './routes/newUserSchemaAPI';
// import userPersonalPlanAPIRoutes from './routes/userPersonalPlanAPI';
// import communityAPIRoutes from './routes/communityAPI';
//env setting
import "./env.js";
import { db_cstring } from "./db.js";
// console.log(db_cstring);

const localPort = 5000;

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

//mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(db_cstring);
    console.log("database connected!");
}

//routes
app.use('/newUserSchemaAPI',newUserSchemaAPIRoutes); //기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
// app.use('/newUserInfoFetchingAPI',newUserInfoFetchingAPIRoutes); //유저가 자신의 목표를 설정하면 관련 정보들을 받아서 저장하는 기능을 수행한다.
// app.use('/userPersonalPlanAPI',userPersonalPlanAPIRoutes);//유저가 자신의 계획을 수립하고 체크할 수 있도록하는 기능을 수행한다.
// app.use('/communityAPI',communityAPIRoutes);//커뮤니티 게시글 정보에 대한 create, read, update, delete를 수행한다.

app.listen(localPort);