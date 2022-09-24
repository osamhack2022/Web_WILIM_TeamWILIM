// user의 personal plan에 대한 schema
// daily, weekly, monthly
// 유저를 식별할 수 있는 키 데이터 필요
// 세부적인 데이터의 조건은 조금 더 고민 필요 ...

import mongoose from "mongoose";

const personalPlanSchema = mongoose.Schema({
    
});

const PersonalPlan = mongoose.Model("personalPlan", personalPlanSchema);

export default PersonalPlan;

