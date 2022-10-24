import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import originURL from "../../utils/originURL";

export const getSelfPosts = createAsyncThunk('community/getAllPosts',
async () => {
    const response = await axios({
        url: `${originURL}/communityAPI/main`,
        method: "GET",
        // withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': "*",
        }
    }); 
    return response.data;
})