import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import originURL from "../../utils/originURL";

export const updatePostLikes = createAsyncThunk(
  "community/updatePostLikes",
  async ({ _id }: { _id: string }) => {
    const response = await axios({
      url: `${originURL}/communityAPI/post/${_id}/like`,
      method: "GET",
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (response.status < 400) {
      console.log(response.data);
      return response.data;
    }
    return response.data;
  }
);
