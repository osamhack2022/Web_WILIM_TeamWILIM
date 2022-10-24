import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AddCommentProps } from "../../schema/community";
import originURL from "../../utils/originURL";

export const addComment = createAsyncThunk(
  "community/addComment",
  async ({ content, _id }: AddCommentProps) => {
    const response = await axios.post(
      `${originURL}/communityAPI/post/${_id}/comments`,
      {
        content
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
