// es6 way
import User from './models/user';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userSchemaAPIRoutes from './routes/userSchemaAPI.js';
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import ExpressError from './utils/error';
//순서대로 개발 끝나면 코맨트 풀기!
// import newUserInfoFetchingAPIRoutes from './routes/newUserSchemaAPI';
// import userPersonalPlanAPIRoutes from './routes/userPersonalPlanAPI';
// import communityAPIRoutes from './routes/communityAPI';
//env setting
import "./env.js";
import { db_cstring , session_secret } from "./db.js";

const localPort = 5000;

const app = express();

const sessionConfig = {
    secret: session_secret,
    resave: false,
    saveUninitialized: true,
};

//middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(session(sessionConfig));

//passport config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({usernameField: 'email'}, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(db_cstring);
    console.log("database connected!");
}

//routes
app.use('/userSchemaAPI',userSchemaAPIRoutes); //기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
// app.use('/newUserInfoFetchingAPI',newUserInfoFetchingAPIRoutes); //유저가 자신의 목표를 설정하면 관련 정보들을 받아서 저장하는 기능을 수행한다.
// app.use('/userPersonalPlanAPI',userPersonalPlanAPIRoutes);//유저가 자신의 계획을 수립하고 체크할 수 있도록하는 기능을 수행한다.
// app.use('/communityAPI',communityAPIRoutes);//커뮤니티 게시글 정보에 대한 create, read, update, delete를 수행한다.

//404 에러
app.all("*",(err, req,res,next)=>{
    next(new ExpressError("page not found", 404));
})
//에러 핸들링
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "unknown error";
    res.status(statusCode).json({err});
});


app.listen(localPort,()=>{
    console.log(localPort);
});