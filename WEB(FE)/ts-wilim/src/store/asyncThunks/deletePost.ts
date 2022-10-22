import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DeletePostProps } from "../../schema/community";
import originURL from "../../utils/originURL";

export const deletePost = createAsyncThunk(
  "community/deletePost",
  async ({ _id }: DeletePostProps) => {
    const response = await axios({
        url: `${originURL}/communityAPI/post/${_id}`,
        method: "DELETE",
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
    });
    return response.data;
  }
);
