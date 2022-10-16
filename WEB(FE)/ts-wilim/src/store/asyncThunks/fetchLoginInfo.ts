import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import originURL from "../../utils/originURL";

export const fetchLoginInfo = createAsyncThunk('user/fetchLoginInfo',
async () => {
    const response = await axios({
        url: `${originURL}/userSchemaAPI/session`,
        method: "GET",
        withCredentials: true,
    })
    if(response.status < 400) {
        console.log(response.data);
    }
    return response.data;
})