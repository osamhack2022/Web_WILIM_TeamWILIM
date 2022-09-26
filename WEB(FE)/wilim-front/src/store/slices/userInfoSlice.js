import { createSlice } from "@reduxjs/toolkit";
import user from "../../schema/user";

export const userInfoSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    callUserInfo: (state, action) => [ ...state, action.payload ],
  }
});

export const { callUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;