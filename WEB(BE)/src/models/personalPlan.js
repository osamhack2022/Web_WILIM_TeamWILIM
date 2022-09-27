// user의 personal plan에 대한 schema
// daily, weekly, monthly
// 유저를 식별할 수 있는 키 데이터 필요

import mongoose from "mongoose";

const planElementSchema = new mongoose.Schema({
    date: { type: Date , default: Date.now },   // plan element가 생성된 날짜 프로퍼티
    detail: { type: String, required: true },   // plan의 내용을 저장하는 detail 프로퍼티
    completed: { type: Boolean, default: false, required: true },   // plan의 완수 여부를 저장하는 completed 프로퍼티
    steady: { type: Boolean },  // plan이 매일 지속되는 것인지를 저장하는 steady 프로퍼티, steady && !completed라면 다음날 plan에도 추가되는 방식으로 구현
    _id: mongoose.Schema.Types.ObjectId
});

const personalPlanSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    planList: {
        type: [planElementSchema]
    },

    _id: mongoose.Schema.Types.ObjectId,
});

export const PlanElement = mongoose.Model("planElement", planElementSchema);
export const PersonalPlan = mongoose.Model("personalPlan", personalPlanSchema);

// export default PersonalPlan;

