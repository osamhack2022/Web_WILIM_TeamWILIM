import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LocalLoginProps } from "../../schema/fetch";
import originURL from "../../utils/originURL";

export const localLogin = createAsyncThunk('user/localLogin',
async ({ email, password }: LocalLoginProps) => {
    const response = await axios.post(`${originURL}/userSchemaAPI/login/local`, {
        email, password
    },{
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