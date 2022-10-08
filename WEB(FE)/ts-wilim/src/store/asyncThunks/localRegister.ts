import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface LocalRegisterProps {
    email: string;
    password: string;
    username: string;
    serviceType: string;
}

export const localRegister = createAsyncThunk('user/localRegister',
async ({ email, password, username, serviceType }: LocalRegisterProps) => {
    const response = await axios.post(`https://wilimbackend.tk/userSchemaAPI/register/local`, {
        email, password, username, serviceType
    });
    if(response.status === 201) {
        console.log(response.data);
        return response.data;
    }
    return response.data;
});