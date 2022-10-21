import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostProps } from "../../schema/community";
import { addPost } from "../asyncThunks/addPost";
import { getAllPosts } from "../asyncThunks/getAllPosts";

const initialState: PostProps[] = [];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllPosts.fulfilled,
      (state: PostProps[], action: PayloadAction<PostProps[]>) => [
        ...action.payload,
      ]
    );
    builder.addCase(
      addPost.fulfilled,
      (state: PostProps[], action: PayloadAction<PostProps>) => [
        ...state,
        action.payload,
      ]
    );
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
