// es6 way
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import newUserSchemaAPI from './routes/newUserSchemaAPI';
import newUserInfoFetchingAPI from './routes/newUserSchemaAPI';
import userPersonalPlanAPI from './routes/userPersonalPlanAPI';
import communityAPI from './routes/communityAPI';
//env setting
import "./env.js";
import { db_cstring } from "./db.js";
// console.log(db_cstring);

const localPort = 5000;

const app = express();

//middlewares
app.use(bodyParser.json());

//routes
app.use('/newUserSchemaAPI',newUserSchemaAPI); //기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
app.use('/newUserInfoFetchingAPI',newUserInfoFetchingAPI); //유저가 자신의 목표를 설정하면 관련 정보들을 받아서 저장하는 기능을 수행한다.
app.use('/userPersonalPlanAPI',userPersonalPlanAPI);//유저가 자신의 계획을 수립하고 체크할 수 있도록하는 기능을 수행한다.
app.use('/communityAPI',communityAPI);//커뮤니티 게시글 정보에 대한 create, read, update, delete를 수행한다.

//mongoose connection
mongoose
    .connect(db_cstring)
    .then(()=>{
        app.listen(localPort,()=>{
            console.log(`listening on ${localPort}`);
        });
    })
    .catch((e)=>console.log(e));