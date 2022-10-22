import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DeleteCommentProps } from "../../schema/community";
import originURL from "../../utils/originURL";

export const deleteComment = createAsyncThunk(
  "community/deleteComment",
  async ({ _id }: DeleteCommentProps) => {
    const response = await axios({
        url: `${originURL}/communityAPI/comments/${_id}`,
        method: "DELETE",
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
    });
    return response.data;
  }
);
