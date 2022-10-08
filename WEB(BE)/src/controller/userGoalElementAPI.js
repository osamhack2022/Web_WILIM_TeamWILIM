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
        const ctf = await GoalElement.find({});
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
        const date = ctf.dateUrl === "null"?"null" : await axios.get(ctf.dateUrl);
        date==="null"? res.status(200).json({ctf}) : res.status(200).json({ctf,date : date.data.body}); //dateUrl이 없을 경우 axios 에서 가져오는 부분 생략
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
    GoalElement.findByIdAndDelete(id, (err, deletedCtf) => {
        if (err){
            return res.status(404).json({message: err.message});
        }
        else{
            res.send(deletedCtf);
        }
    });
}