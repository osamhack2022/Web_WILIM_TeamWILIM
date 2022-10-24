import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialPostProps, PostProps } from "../../schema/community";
import { addPost } from "../asyncThunks/addPost";
import { getAllPosts } from "../asyncThunks/getAllPosts";
import { getPostById } from "../asyncThunks/getPostById";

const initialState: InitialPostProps = {
  postList: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllPosts.fulfilled,
      (state: InitialPostProps, action: PayloadAction<PostProps[]>) => ({ postList: [...action.payload] }));
    builder.addCase(
      addPost.fulfilled,
      (state: InitialPostProps, action: PayloadAction<PostProps>) => ({ postList: [
        ...state.postList,
        action.payload,
      ]}));
    builder.addCase(getPostById.fulfilled, (state: InitialPostProps, action: PayloadAction<PostProps>) => {
      const index = state.postList.findIndex(x => x._id === action.payload._id);
      state.postList[index] = action.payload;
      return;
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
