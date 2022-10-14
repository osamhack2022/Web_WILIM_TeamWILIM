import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLoginInfo = createAsyncThunk('user/fetchLoginInfo',
async () => {
    const response = await axios({
        url: "https://wilimbackend.tk/userSchemaAPI/session",
        method: "GET",
        withCredentials: true,
    })
    if(response.status < 400) {
        console.log(response.data);
    }
    return response.data;
})