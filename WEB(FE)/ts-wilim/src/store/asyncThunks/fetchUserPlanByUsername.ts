import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import originURL from "../../utils/originURL";

export const fetchUserPlanByUsername = createAsyncThunk('user/fetchUserPlanByUsername',
async (username: string) => {
    const response = await axios({
        url: `${originURL}/userPersonalPlanAPI/${username}/plans`,
        method: "GET",
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin' : '*',
        }
    }); 
    return response.data.list;
})