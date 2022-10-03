/*
유저가 자신의 목표를 설정하면 관련 정보들을 받아서 저장하는 기능을 수행한다.
기본적으로 goal을 인자로 받는다.
/fetchWithQnet
/fetchWithQnetPreviousQuestion
/fetchWithCbt
/fetchWithKisa
/fetchWithOpcl
*/
import express from 'express';
import {getFetchWithQnet} from '../controller/newUserInfoFetchingAPI.js';
const router = express.Router();
import '../env.js';

router.route('/fetchWithQnet')
    .get(getFetchWithQnet) //유저의 Plan, Goal 받아와서 Qnet 


export default router;