import User from '../models/user';
import axios from 'axios';
// process.env.NODE_TLS_REJECT_UNAUTHORIZED ="0";

module.exports.getFetchWithQnet = async(req,res,next)=>{
        try{
            const data = await axios.get('http://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList?serviceKey=h0s66po6sZAkb4Zx6EzM3pt79xH05dw1ReWavwvGpdxBHhbF%2FYTZqna5FZ3j8XBByBp6Ep7ccXM8j3Zdibxx9g%3D%3D&numOfRows=10&pageNo=1&dataFormat=json&implYy=2022&qualgbCd=T&jmCd=7916')
            res.send(data.data);
        }catch(e){
            next(e);
        }
}