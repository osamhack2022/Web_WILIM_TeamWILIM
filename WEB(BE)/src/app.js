// es6 way
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
//env setting
import "./env.js";
import { db_cstring } from "./db.js";
console.log(db_cstring);

const localPort = 5000;

const app = express();

//middlewares
app.use(bodyParser.json());


//mongoose connection
mongoose
    .connect("mongodb+srv://WILIM:wilimadmin@wilim-database.erisix0.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        app.listen(localPort,()=>{
            console.log(`listening on ${localPort}`);
        });
    })
    .catch((e)=>console.log(e));