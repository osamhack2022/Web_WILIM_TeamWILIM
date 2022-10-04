import mongoose from 'mongoose';

const goalElementSchema = new mongoose.Schema({
    name :{type: String , required : true}, //시험명
    qualgbnm : {type : String}, //자격구분명 ex 국가기술자격
    description : {type : String}, // 시험 설명
    seriesnm : {type : String}, //계열명 ex 기술사
    obligfldnm : {type : String}, //대직무분야명
    mdobligfldnm: {type : String}, //중직무분야명
    implYy : {type : Number}, // 시행년도
    implSeq : {type : Number}, //시행회차
    dateDescription : {type : String},//시험 회차및 년도 설명
    docRegStartDt : {type : Number},//필기시험 원서접수 시작일자
    docRegEndDt : {type : Number}, //필기시험 원서접수 종료일자
    docExamStartDt : {type : Number}, //필기시험 시작일자
    docExamEndDt : {type : Number}, //필기시험 종료일자
    docPassDt : {type : Number}, //필기시험 합격(예정)자 발표일자
    pracRegStartDt : {type : Number},//실기(작업)/면접 시험 원서접수 시작일자
    pracRegEndDt : {type : Number},  //실기(작업)/면접 시험 원서접수 종료일자
    pracExamStartDt : {type : Number}, //실기(작업)/면접 시험 시작일자
    pracExamEndDt : {type : Number}, //실기(작업)/면접 시험 종료일자
    pracPassDt : {type : Number}, //실기(작업)/면접 합격자 발표일자
    mockLink : {type : String}, //공개문제 다운받는 링크
    isQnet : {type : Boolean}, // qnet 에서 가져온 자격증정보인지 /토익, 수능 등 외부에서 가져온 정보인지 (t/f)
    users : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], //이 자격증 목표로 한 유저들 id
    id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('GoalElement', goalElementSchema);