import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserPlanByUsername = createAsyncThunk('user/fetchUserPlanByUsername',
async (username: string) => {
    const response = await axios({
        url: `https://wilimbackend.tk/userPersonalPlanAPI/${username}/plans`,
        method: "GET",
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin' : '*',
        }
    }); 
    return response.data.list;
})