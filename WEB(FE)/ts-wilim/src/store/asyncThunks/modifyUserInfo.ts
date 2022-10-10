import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../schema/user";

export const modifyUserInfo = createAsyncThunk('user/updateUserInfo',
async ({ _id, password, username, serviceType }: User) => {
    const response = await axios.put(`https://wilimbackend.tk/userSchemaAPI/id/${_id}`, {
       password, username, serviceType
    });
    return response.data;
});