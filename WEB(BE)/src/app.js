// es6 way
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
//env setting
// import './env';
// import {db_cstring} from './db';
// console.log(process.env.DB_CSTRING);
require('dotenv').config()

console.log(result.parsed)

const localPort = 5000;

const app = express();

//middlewares
app.use(bodyParser.json());


//mongoose connection
mongoose
    .connect(process.env.DB_CSTRING)
    .then(()=>{
        app.listen(localPort,()=>{
            console.log(`listening on ${localPort}`);
        });
    })
    .catch((e)=>console.log(e));