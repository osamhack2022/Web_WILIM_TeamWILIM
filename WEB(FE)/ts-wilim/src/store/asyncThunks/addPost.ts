import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AddPostProps } from "../../schema/community";
import originURL from "../../utils/originURL";
import getFullDate from "../../utils/getFullDate";
import getFullTime from "../../utils/getFullTime";

export const addPost = createAsyncThunk(
  "community/addPost",
  async ({ title, content, hashtags, username }: AddPostProps) => {
    const date = getFullDate();
    const time = getFullTime();
    const response = await axios.post(
      `${originURL}/communityAPI/user/${username}/posts`,
      {
        title,
        content,
        hashtags,
        date: `${date}-${time}`,
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
