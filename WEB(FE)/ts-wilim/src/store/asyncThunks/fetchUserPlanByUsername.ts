import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserPlan } from "../../schema/plan";

export const fetchUserPlanByUsername = createAsyncThunk('user/fetchUserPlanByUsername',
async (username: string) => {
    const data = await axios.get(`https://wilimbackend.tk/userPersonalPlanAPI/${username}/plans`);
    console.log(data);
    const { date, list } = data.data.plan;
    const plan: UserPlan = {
        date: date,
        list: list,
    }
    return plan;
})