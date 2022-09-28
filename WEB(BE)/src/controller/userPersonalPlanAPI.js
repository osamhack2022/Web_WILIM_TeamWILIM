/*
유저가 자신의 계획을 수립하고 체크할 수 있도록하는 기능을 수행한다.
계획은 일간, 주간, 월간으로 나뉘고, 개발은 일간부터 진행한다.
주간 계획에는 주간계획과 해당 주에 있는 일간 계획들을 모두 띄워준다.
마찬가지로 월간 계획에는 해당 월에 있는 주간 계획과 일간 계획들을 모두 띄워준다.
기본적으로 user를 인자로 받는다.
- /daliyPlan : get / post / update(put) / delete
- /weeklyPlan : get / post / update(put) / delete
- /monthlyPlan : get / post / update(put) / delete
*/

import mongoose from "mongoose";
import { PlanElement, PersonalPlan } from "../models/personalPlan.js"; 

export const getPersonalPlans = async (req, res, next) => {
    // user를 받아와서, 그 user의 _id 값으로 PP 값을 검색해야 함.
    // User Model에도 PP의 _id를 ref로 넣어서 상호 참조가 가능하도록 해야 할 듯!
    // PP는 초기에는 플랜을 넣어주지 않아서 비어 있더라도, 무조건 하나 만들어주는 걸로! 
    //    -> 그래야 CRUD가 편할 듯하다.

    const { personalPlanId } = req.session.user;  // session 값에 저장되어 있는, 로그인한 user 객체에서 personalPlanId 값을 받아 온다.
    const personalPlans = await PersonalPlan.findById(user.personalPlanId);   // user를 이용해 mongodb에서 personalPlans를 query한다.
    return res.send(personalPlans);
};

export const setNewPersonalPlan = async (req, res, next) => {
    // 새로운 플랜을 저장할 때.
    // 기존에 존재하던 personalPlans가 있다면 불러오고, 새로운 플랜 내용을 넣은 다음 다시 저장한다.
    const { personalPlanId } = req.session.user;
    const { detail, steady } = req.body;

    const newPlanElement = new PlanElement({ detail, steady });

    // 1. 기존에 추가했던 플랜이 있는 경우
    // 2. 유저가 플랜을 처음으로 추가하는 경우 -> 맨 처음에 무조건 personalPlan을 만듦 -> 1번과 동일!
    const personalPlans = await PersonalPlan.findByIdAndUpdate(personalPlanId, { planList: planList.push(newPlanElement) });

    return res.redirect("/:username");
};

export const updatePersonalPlan = async (req, res, next) => {
    // 기존에 있던 특정 플랜의 내용 혹은 완료 여부를 업데이트하는 경우.
    // PUT Method를 이용 / form에서 데이터를 submit할 때, Plan Element의 _id 값도 넘겨줘야 함!!!
    // PUT Method의 경우에도 req.body 객체에 정보를 넣어서 보내는지 확인 필요
    
    const { _id, detail, steady } = req.body;       // _id는 PlanElement의 아이디이다. 
    // Question. 내가 바꾸려는 Plan Element의 아이디까지 POST method의 body에 넣어서 전달할 수 있는가?
    // URL의 Parameter로 전달해야 하나 ...?
    
    const updatedPlanElement = await PlanElement.findByIdAndUpdate(_id, { 
        detail: detail,
        steady: steady
    });

    return res.redirect("/:username");
};

export const deletePersonalPlan = async (req, res, next) => {
    // 특정 플랜을 삭제하는 경우
    // DELETE Method를 이용 / 버튼을 눌러서 요청을 전달할 때, Plan Element의 _id 값도 넘겨줘야 함!!!
    
    // const { id } = req.???

    await PlanElement.findByIdAndDelete(id);
};