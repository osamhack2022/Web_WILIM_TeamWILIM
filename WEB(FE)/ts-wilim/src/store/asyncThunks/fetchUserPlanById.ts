import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchUserPlanByIdProps } from "../../schema/fetch";
import originURL from "../../utils/originURL";

export const fetchUserPlanById= createAsyncThunk('user/fetchUserPlanById',
async ({ username, id }: fetchUserPlanByIdProps) => {
    const response = await axios({
        url: `${originURL}/userPersonalPlanAPI/${username}/plans/${id}`,
        method: "GET",
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin' : '*',
        }
    });
    console.log(response);
    return response.data;
})