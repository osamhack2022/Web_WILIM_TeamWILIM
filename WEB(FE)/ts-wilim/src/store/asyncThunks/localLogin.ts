import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface LocalLoginProps {
    email: string;
    password: string;
}

export const localLogin = createAsyncThunk('user/localLogin',
async ({ email, password }: LocalLoginProps) => {
    const response = await axios.post(`https://wilimbackend.tk/userSchemaAPI/login/local`, {
        email, password
    });
    if(response.status < 400) {
        console.log(response.data);
    }
    return response.data;
})