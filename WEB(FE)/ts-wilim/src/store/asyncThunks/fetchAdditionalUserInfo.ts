import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchAdditionalUserInfoProps {
    username: string;
    serviceType: "ARMY" | "NAVY" | "AIR_FORCE";
}

export const fetchAdditionalUserInfo = createAsyncThunk('user/FetchAdditionalUserInfo',
async ({username, serviceType }: FetchAdditionalUserInfoProps) => {
    const response = await axios.post(`https://wilimbackend.tk/userSchemaAPI/register/kakao`, {
        username, serviceType
    });
    if(response.status === 201) {
        console.log(response.data);
        return response.data;
    }
    return response.data;
});