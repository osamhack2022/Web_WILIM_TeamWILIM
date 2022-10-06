import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../schema/user";

interface ModifyUserInfoProps extends User {
    oldname: string;
}

export const modifyUserInfo = createAsyncThunk('user/updateUserInfo',
async ({ email, password, username, serviceType, goal, oldname }: ModifyUserInfoProps) => {
    const response = await axios.put(`https://wilimbackend.tk/userSchemaAPI/${oldname}`, {
        email, password, username, serviceType, goal
    });
    return response.data;
});