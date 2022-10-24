// es6 way
import User from './models/user';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import LocalStrategy from 'passport-local';
import ExpressError from './utils/error';
import path from 'path';
import methodOverride from 'method-override';
import engine from 'ejs-mate';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import multer from 'multer';
import {Strategy as KakaoStrategy} from 'passport-kakao';
import {Strategy as NaverStrategy} from 'passport-naver-v2';
import imageRoutes from './routes/image.js';
import userSchemaAPIRoutes from './routes/userSchemaAPI.js';
import userGoalElementAPI from './routes/userGoalElementAPI.js';
import userPersonalPlanAPIRoutes from './routes/userPersonalPlanAPI';
import communityAPIRoutes from './routes/communityAPI';

//env setting
import "./env.js";
import { db_cstring , session_secret , kakao_key , qnet_key , naver_client_id, naver_client_secret, mail, mail_password} from "./db.js";

//
const PORT = process.env.PORT || 5000
const app = express();

//ejs config
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));
app.engine("ejs", engine);

//middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(session_secret));
app.use(morgan('dev'));
app.use(session({
    secret: session_secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        // sameSite: 'none',
        // secure: true,
        httpOnly: true
    }
}));
app.use(methodOverride("_method"));
app.use(cors({
    origin: true,
    credentials: true,
}));

//passport config
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {
    done(null, user.username);
});
passport.deserializeUser(function(username, done) {
    User.findOne({username : username}, function(err, user) {
    done(err, user);
});

});
passport.use(new LocalStrategy({usernameField: 'email'}, User.authenticate()));//로컬 전략
passport.use(new KakaoStrategy(//카카오 전략
    {
        clientID: kakao_key,
        callbackURL: '/userSchemaAPI/login/kakao/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const foundUser = await User.findOne(
                {
                    snsId: profile.id,
                    provider: 'kakao',
                },
            );
            if (foundUser) {
                return done(null, foundUser);
            }
            else{
                return done(null, false, profile);
            } 
        } catch (error) {
            return done(error);
        }
    },
    ),
);
passport.use(new NaverStrategy(//네이버 전략
    {
        clientID: naver_client_id,
        clientSecret: naver_client_secret,
        callbackURL: '/userSchemaAPI/login/naver/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const foundUser = await User.findOne(
                {
                    snsId: profile.id,
                    provider: 'naver',
                },
            );
            if (foundUser) {
                return done(null, foundUser);
            }
            else{
                return done(null, false, profile);
            } 
        } catch (error) {
            return done(error);
        }
    },
));

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
app.use('/',imageRoutes);
app.use('/userSchemaAPI',userSchemaAPIRoutes); //기본적인 유저 정보에 대한 create, read, update, delete를 수행한다.
app.use('/userGoalElementAPI',userGoalElementAPI); //유저가 자신의 목표를 설정하면 관련 정보들을 받아서 저장하는 기능을 수행한다.
app.use('/userPersonalPlanAPI',userPersonalPlanAPIRoutes); //유저가 자신의 계획을 수립하고 체크할 수 있도록하는 기능을 수행한다.
app.use('/communityAPI',communityAPIRoutes); //커뮤니티 게시글 정보에 대한 create, read, update, delete를 수행한다.

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
});
