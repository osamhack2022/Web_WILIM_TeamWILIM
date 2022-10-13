// user의 personal plan에 대한 schema
// 유저를 식별할 수 있는 키 데이터 필요

import mongoose from "mongoose";

const dateFormatting = (date, delimiter = '') => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return [year, month, day].join(delimiter);
}

const planElementSchema = new mongoose.Schema({
    date: { type: String, default: dateFormatting(new Date())},    
    detail: { type: String, required: true },   // plan의 내용을 저장하는 detail 프로퍼티
    completed: { type: Boolean, default: false, required: true },   // plan의 완수 여부를 저장하는 completed 프로퍼티
    steady: { type: Boolean },  // plan이 매일 지속되는 것인지를 저장하는 steady 프로퍼티, steady && !completed라면 다음날 plan에도 추가되는 방식으로 구현
    planListId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PlanList'
    }
});

const planListSchema = new mongoose.Schema({
    // 각 날짜마다 Plan List가 존재해야 한다. -> x
    // Plan List는 유저마다 단 하나만 존재한다.
    // -> 대신, 각 Plan Element마다 Date 값을 받아, 프론트에서 띄울 때 사용한다.

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    list: [{
        type: mongoose.Schema.Types.ObjectId,  // Plan Element의 ID를 저장해 둔 Array!
        ref: "PlanElement"
    }]
});

export const PlanElement = mongoose.model("PlanElement", planElementSchema);
export const PlanList = mongoose.model("PlanList", planListSchema);

