import User from '../models/user';
import axios from 'axios';
import "../env.js";
import mongoose from 'mongoose';
import { db_cstring , session_secret , kakao_key , qnet_key} from "../db.js";
// https 로 데이터 받아오면 validation 에서 막히는듯하다. url 은 왠만하면 http 로 받아오자...!
// process.env.NODE_TLS_REJECT_UNAUTHORIZED ="0";

module.exports.getFetchWithQnet = async(req,res,next)=>{
    res.send('hihi');
}