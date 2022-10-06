import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../schema/user";

export const modifyUserInfo = createAsyncThunk('user/updateUserInfo',
async ({ _id, email, password, username, serviceType, goal }: User) => {
    const response = await axios.put(`https://wilimbackend.tk/userSchemaAPI/id/${_id}`, {
        email, password, username, serviceType, goal
    });
    return response.data;
});