/*
유저가 자신의 계획을 수립하고 체크할 수 있도록하는 기능을 수행한다.
유저는 하루 단위로 계획을 세운다. 그러나, 매일 반복하고 싶은 계획이 있다면 표시를 했을 때 프로그램이 자동으로 매일매일 해당 계획을 추가해 준다.
Plan은 기본적으로 User에 종속되어 있는 관계이다.
또한 Plan은 PlanList와 PlanElement로 나뉜다. 각각의 Plan Element가 모여서 하나의 Plan List를 이룬다.
*/

import mongoose from "mongoose";
import User from "../models/user.js";
import { PlanList, PlanElement } from "../models/personalPlan.js"; 

export const getPlanList = async (req, res, next) => {
    // user를 받아와서, 그 user의 _id 값으로 PP 값을 검색해야 함.
    // User Model에도 PP의 _id를 ref로 넣어서 상호 참조가 가능하도록 해야 할 듯!
    // PP는 초기에는 플랜을 넣어주지 않아서 비어 있더라도, 무조건 하나 만들어주는 걸로! 
    //    -> 그래야 CRUD가 편할 듯하다.

    const { _id, username } = req.user;
    let { personalPlanId } = req.user;

    if (personalPlanId === null) {      // Plan List가 생성되지 않았을 때, 처음 생성해 준다.
        await PlanList.create({
            user: _id,
            list: []
        });

        const planList = await PlanList.findOne({ user: _id });
        req.user.personalPlanId = planList._id;     // session에 있는 유저 객체 수정
        await User.findByIdAndUpdate(_id, { personalPlanId: planList._id });    // mongoDB의 user 값 업데이트
        personalPlanId = planList._id;  // 기존에 불러온 personalPlanId 변수 값 재할당
    }

    const planIdList = await PlanList.findById(personalPlanId).populate("list");
    console.log(planIdList);

    return res.status(200).json({
        username: username,
        list: planIdList.list
    });
};

export const getPlanElement = async (req, res, next) => {
    const { username } = req.user;
    const { id } = req.params;
    const planElement = await PlanElement.findById(id);
    const { detail, completed, steady } = planElement;

    return res.status(200).json({
        username, id, detail, completed, steady
    });

    /*
    return res.status(200).json({
        detail: detail,
        completed: completed,
        steady: steady
    });
    */
};

export const addPlanElement = async (req, res, next) => {
    // 새로운 플랜을 저장할 때.
    // 기존에 존재하던 personalPlans가 있다면 불러오고, 새로운 플랜 내용을 넣은 다음 다시 저장한다.
    const { personalPlanId } = req.user;
    const { date, detail, completed, steady } = req.body;

    try {    
        const newPlanElement = new PlanElement({ 
            date,
            detail,
            completed, 
            steady,
            planListId: personalPlanId
        });
        await newPlanElement.save();
        await PlanList.findByIdAndUpdate(personalPlanId, { $push: { list: newPlanElement._id } });
    
        return res.status(201).send(newPlanElement);
    } catch(err) {
        return res.status(404).json({message: err});
    }
};

export const updatePlanElement = async (req, res, next) => {
    // 기존에 있던 특정 플랜의 내용 혹은 완료 여부를 업데이트하는 경우.
    // PUT Method를 이용 / form에서 데이터를 submit할 때, Plan Element의 _id 값도 넘겨줘야 함!!!
    // PUT Method의 경우에도 req.body 객체에 정보를 넣어서 보내는지 확인 필요

    const { detail, completed, steady } = req.body;    // 바꾸려는 내용 req.body로 전달
    const { id } = req.params;
    
    try {
        const updatedPlanElement = await PlanElement.findByIdAndUpdate(id, { 
            detail: detail,
            completed: completed,
            steady: steady
        }, { new: true });

        return res.status(200).send(updatedPlanElement);
    } catch(err) {
        return res.status(404).json({message : err});
    }
};

export const deletePlanElement = async (req, res, next) => {
    // 특정 플랜을 삭제하는 경우
    // DELETE Method를 이용 / 버튼을 눌러서 요청을 전달할 때, Plan Element의 _id 값도 넘겨줘야 함!!!
    // 삭제할 때는, 유저의 Plan List에서도 _id 값을 없애줘야 함.
    
    const { username, personalPlanId } = req.user;
    const { id } = req.params;

    try {
        await PlanList.findByIdAndUpdate(personalPlanId, { $pull: { list: id } }, { new: true });     // Plan List에서 Element의 _id 값 먼저 삭제
        await PlanElement.findByIdAndDelete(id);    // Plan Element 삭제
    
        return res.status(200).redirect(`/userPersonalPlanAPI/${username}/plans`);
    } catch(err) {
        return res.status(404).json({message : err});
    }
};