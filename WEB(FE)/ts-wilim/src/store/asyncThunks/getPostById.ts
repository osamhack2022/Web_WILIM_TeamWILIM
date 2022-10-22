import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import originURL from "../../utils/originURL";

export const getPostById = createAsyncThunk('community/getPostById',
async ({ _id }: { _id: string }) => {
    const response = await axios({
        url: `${originURL}/communityAPI/post/${_id}`,
        method: "GET",
        // withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': "*",
        }
    }); 
    return response.data;
})