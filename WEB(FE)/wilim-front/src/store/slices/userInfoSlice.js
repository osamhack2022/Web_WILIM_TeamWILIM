import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    username: "",
    serviceType: "",
  },
  reducers: {
    callUserInfo: (state, action) => [ ...state, action.payload ],
  }
});

export const { callUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;