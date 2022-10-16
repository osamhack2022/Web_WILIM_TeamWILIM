import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LocalRegisterProps } from "../../schema/fetch";
import originURL from "../../utils/originURL";

export const localRegister = createAsyncThunk('user/localRegister',
async ({ email, password, username, serviceType }: LocalRegisterProps) => {
    const response = await axios.post(`${originURL}/userSchemaAPI/register/local`, {
        email, password, username, serviceType
    },
    {
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin' : '*',
        }
    });
    if(response.status === 201) {
        console.log(response.data);
        return response.data;
    }
    return response.data;
});