import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AddPostProps } from "../../schema/community";
import originURL from "../../utils/originURL";

export const addPost = createAsyncThunk(
  "community/addPost",
  async ({ title, content, hashtags, username }: AddPostProps) => {
    const response = await axios.post(
      `${originURL}/communityAPI/user/${username}/posts`,
      {
        title,
        content,
        hashtags,
      },
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response.data;
  }
);
