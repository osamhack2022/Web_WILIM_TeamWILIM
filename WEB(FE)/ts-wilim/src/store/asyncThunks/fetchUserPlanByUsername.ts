import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { List, UserPlan } from "../../schema/plan";
import getFullDate from "../../utils/getFullDate";

export const fetchUserPlanByUsername = createAsyncThunk('user/fetchUserPlanByUsername',
async (username: string) => {
    const date = getFullDate();
    const response = await axios({
        url: `https://wilimbackend.tk/userPersonalPlanAPI/${username}/plans`,
        method: "GET",
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin' : '*',
        }
    });
    const res: UserPlan = {
        date,
        list: response.data.list.filter((plan: List) => plan.date === date),
    } 
    console.log(response.data.list.filter((plan: List) => plan.date === date));
    return res;
})