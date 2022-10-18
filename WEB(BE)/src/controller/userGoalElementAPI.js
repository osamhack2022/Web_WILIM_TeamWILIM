import User from '../models/user';
import GoalElement from '../models/goalElement';
import axios from 'axios';
import "../env.js";
import mongoose from 'mongoose';
import { db_cstring , session_secret , kakao_key , qnet_key} from "../db.js";
//getAllCtfInfo, getCtfInfo, postNewCtfInfo, updateCtfInfo, deleteCtfInfo, getUserGoal, postNewUserGoal, deleteUserGoal

//GET all certificate Info
module.exports.getAllCtfInfo = async(req,res,next)=>{
    try{
        let arr = [];
        const ctf = await GoalElement.find({});
        // for (const c of ctf){ //ctfInfo 날짜까지 가지고올때
        //     const date = c.isQnet === false ? c.date : await axios.get(c.dateUrl);
        //     date===c.date? arr.push({c}) : arr.push({c,date : date.data.body});
        // }
        res.send(ctf);
    }catch(e){console.log(e)};
}

//POST post new certificate Info
module.exports.postNewCtfInfo = async(req,res,next)=>{
    try{
        const body = req.body;
        const newCtf = new GoalElement(body);
        await newCtf.save()
        res.send(newCtf);
    } catch(err){
        return res.status(409).json({message : err});
    }
}

//GET certificate Info from goalElement
module.exports.getCtfInfo = async(req,res,next)=>{
    try{
        const {id} = req.params;
        const ctf = await GoalElement.findById(id);
        const date = ctf.isQnet === false? ctf.date : await axios.get(ctf.dateUrl);
        date===ctf.date? res.status(200).json({ctf}) : res.status(200).json({ctf,date : date.data.body}); //dateUrl이 없을 경우 axios 에서 가져오는 부분 생략
    }catch(e){console.log(e)};
}

//PUT update certificate Info from goalElement
module.exports.updateCtfInfo = async(req,res,next)=>{
    try{
        const {id} = req.params;
        const updatedCtf = await GoalElement.findByIdAndUpdate(id, req.body, {new :true, runValidators : true});
        res.send(updatedCtf);
    } catch(err){
        return res.status(404).json({message : err});
    }
}

//DELETE certificate Info from goalElement
module.exports.deleteCtfInfo = async(req,res,next)=>{
    const{id} = req.params;
    await GoalElement.findByIdAndDelete(id, (err, deletedCtf) => {
        if (err){
            return res.status(404).json({message: err.message});
        }
        else{
            res.send(deletedCtf);
        }
    });
}

module.exports.getUserGoal = async (req, res, next) => {
    const { _id, username, goal } = req.user;
    let goalElement;

    try {
        if (goal) {
            goalElement = await GoalElement.findById(goal);
        } else {
            goalElement = null;
        }

        const ctfInfoList = await GoalElement.find({});

        /*
        return res.render("userGoalElementAPI/goalElement", { 
            ctfInfoList,
            goalElement,
            username,
        })
        */
        return res.status(200).send(goalElement);
    } catch(err) {
        return res.status(404).json({message: err});
    }
}

module.exports.postNewUserGoal = async (req, res, next) => {
    const { goalElement, selectedRound } = req.body;
    const { _id, username,goal } = req.user;

    try {
        const newUserGoal = await GoalElement.findOne({ name: goalElement });
        if(goal){
            await GoalElement.findByIdAndUpdate(goal,{$pull:{users:_id}});
        }
        await User.findByIdAndUpdate(_id, { 
            goal: newUserGoal._id,
            selectedRound,
        }, { new: true });
        await GoalElement.findByIdAndUpdate(newUserGoal._id, { $push: { users: _id }});
        return res.status(200).send(newUserGoal);
    } catch(err) {
        return res.status(404).json({message: err});
    }
}

module.exports.deleteUserGoal = async (req, res, next) => {
    const { _id, username, goal } = req.user;

    try {
        const updatedUser = await User.findByIdAndUpdate(_id, { goal: null }, { new: true });
        await GoalElement.findByIdAndUpdate(goal, { $pull: { users: _id }});
        return res.status(200).send(updatedUser);
    } catch(err) {
        return res.status(404).json({message: err});
    }
}