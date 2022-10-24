import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../schema/user";
import { modifyUserInfo } from "../asyncThunks/modifyUserInfo";
import { fetchUserById } from "../asyncThunks/fetchUserById";
import { localRegister } from "../asyncThunks/localRegister";
import { localLogin } from "../asyncThunks/localLogin";
import { fetchAdditionalUserInfo } from "../asyncThunks/fetchAdditionalUserInfo";
import { fetchLoginInfo } from "../asyncThunks/fetchLoginInfo";

const user: User = {
  comments: [],
  posts: [],
  snsId: "",
  _id: "",
  email: "",
  password: "",
  username: "",
  provider: null,
  serviceType: "",
  goal: "",
}

export const userInfoSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    updateUserInfo: (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(modifyUserInfo.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
    builder.addCase(fetchUserById.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
    builder.addCase(localRegister.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
    builder.addCase(localLogin.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
    builder.addCase(fetchAdditionalUserInfo.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
    builder.addCase(fetchLoginInfo.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
  }
});

export const { updateUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;