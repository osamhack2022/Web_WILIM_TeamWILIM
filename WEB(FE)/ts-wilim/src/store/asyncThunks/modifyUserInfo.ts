import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../schema/user";
import originURL from "../../utils/originURL";

export const modifyUserInfo = createAsyncThunk('user/updateUserInfo',
async ({ _id, password, username, serviceType }: User) => {
    const response = await axios.put(`${originURL}/userSchemaAPI/id/${_id}`, {
       password, username, serviceType
    }, {
        withCredentials: true,
    });
    return response.data;
});