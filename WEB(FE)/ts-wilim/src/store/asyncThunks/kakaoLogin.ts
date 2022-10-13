import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const kakaoLogin = createAsyncThunk('user/kakaoLogin',
async () => {
    const response = await axios({
        url: "https://wilimbackend.tk/userSchemaAPI/login/kakao",
        method: "GET",
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin' : '*',
        }
    });
    if(response.status < 400) {
        console.log(response.data);
    }
    return response.data.user;
})