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
passport.use(new LocalStrategy({usernameField: 'email'}, User.authenticate()));//?????? ??????
passport.use(new KakaoStrategy(//????????? ??????
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
passport.use(new NaverStrategy(//????????? ??????
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
    res.locals.user = req.user; //ejs ?????? <%= user %> ??? ??????????????? ?????? ??????  return
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
app.use('/userSchemaAPI',userSchemaAPIRoutes); //???????????? ?????? ????????? ?????? create, read, update, delete??? ????????????.
app.use('/userGoalElementAPI',userGoalElementAPI); //????????? ????????? ????????? ???????????? ?????? ???????????? ????????? ???????????? ????????? ????????????.
app.use('/userPersonalPlanAPI',userPersonalPlanAPIRoutes); //????????? ????????? ????????? ???????????? ????????? ??? ??????????????? ????????? ????????????.
app.use('/communityAPI',communityAPIRoutes); //???????????? ????????? ????????? ?????? create, read, update, delete??? ????????????.

//404 ??????
app.all("*",(err, req,res,next)=>{
    next(new ExpressError("page not found", 404));
})

//?????? ?????????
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "unknown error";
    res.status(statusCode).json({err});
});

app.listen(PORT,()=>{
    console.log(PORT);
});
