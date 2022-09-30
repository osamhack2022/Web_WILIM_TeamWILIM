// user의 personal plan에 대한 schema
// 유저를 식별할 수 있는 키 데이터 필요

import mongoose from "mongoose";

const planElementSchema = new mongoose.Schema({
    detail: { type: String, required: true },   // plan의 내용을 저장하는 detail 프로퍼티
    completed: { type: Boolean, default: false, required: true },   // plan의 완수 여부를 저장하는 completed 프로퍼티
    steady: { type: Boolean },  // plan이 매일 지속되는 것인지를 저장하는 steady 프로퍼티, steady && !completed라면 다음날 plan에도 추가되는 방식으로 구현
    _id: mongoose.Schema.Types.ObjectId
});

const planListSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    date: { type: Date, default: Date.now },    // 각 날짜마다 Plan List가 존재해야 한다.

    planList: {
        type: [mongoose.Schema.Types.ObjectId]  // Plan Element의 ID를 저장해 둔 Array!
    },

    _id: mongoose.Schema.Types.ObjectId
});

export const PlanElement = mongoose.Model("planElement", planElementSchema);
export const PlanList = mongoose.Model("planList", planListSchema);

