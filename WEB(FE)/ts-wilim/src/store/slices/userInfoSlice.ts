import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserByUsername } from "../../models/fetchUserByUsername";
import { User } from "../../schema/user";

const user: User = {
  email: "kandy1002@naver.com",
  password: "qq415263~",
  username: "오형근",
  serviceType: "육군",
  goal: "조주기능사",
}

export const userInfoSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    updateUserInfo: (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByUsername.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
  }
});

export const { updateUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;