import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface fetchUserPlanByIdProps {
    username: string;
    id: string;
}

export const fetchUserPlanById= createAsyncThunk('user/fetchUserPlanById',
async ({ username, id }: fetchUserPlanByIdProps) => {
    const response = await axios({
        url: `https://wilimbackend.tk/userPersonalPlanAPI/${username}/plans/${id}`,
        method: "GET",
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin' : '*',
        }
    });
    console.log(response);
    return response.data;
})

//{"username":"테스트","id":"63421d55d391c40fee7ed0d5","detail":"1","completed":false,"steady":true}