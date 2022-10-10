import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserPlanByUsername = createAsyncThunk('user/fetchUserPlanByUsername',
async (username: string) => {
    const response = await axios({
        url: `https://wilimbackend.tk/userPersonalPlanAPI/${username}/plans`,
        method: "GET",
        withCredentials: true,
    });
    console.log(response);
    return response.data;
})