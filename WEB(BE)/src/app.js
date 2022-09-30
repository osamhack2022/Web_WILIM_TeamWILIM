// es6 way
import User from './models/user';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import ExpressError from './utils/error';
import path from 'path';
import methodOverride from 'method-override';
import engine from 'ejs-mate';

//순서대로 개발 끝나면 코맨트 풀기!
import userSchemaAPIRoutes from './routes/userSchemaAPI.js';
// import newUserInfoFetchingAPIRoutes from './routes/newUserSchemaAPI';
// import userPersonalPlanAPIRoutes from './routes/userPersonalPlanAPI';
// import communityAPIRoutes from './routes/communityAPI';

//env setting
import "./env.js";
import { db_cstring , session_secret } from "./db.js";

//
const PORT = process.env.PORT || 5000
const app = express();
const sessionConfig = {
    secret: session_secret,
    resave: false,
    saveUninitialized: true,
};

//ejs config
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));
app.engine("ejs", engine);

//middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(session(sessionConfig));
app.use(methodOverride("_method"));

//passport config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({usernameField: 'email'}, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.user = req.user; //ejs 에서 <%= user %> 는 로그인중인 유저 정보  return
    next();
})

//mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(db_cstring);
    console.log("database connected!");
}

//routes
app.get('/',(req,res,next)=>{res.status(200).render('main.ejs')});//basic routes
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

app.listen(PORT,()=>{
    console.log(PORT);

//api test
app.get('/hello',(req,res,next)=>{
    res.send({"msg" : "hello world!"});
})
});