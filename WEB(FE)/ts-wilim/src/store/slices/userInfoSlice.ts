import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserByUsername } from "../asyncThunks/fetchUserByUsername";
import { User } from "../../schema/user";
import { modifyUserInfo } from "../asyncThunks/modifyUserInfo";
import { fetchUserById } from "../asyncThunks/fetchUserById";
import { localRegister } from "../asyncThunks/localRegister";
import { localLogin } from "../asyncThunks/localLogin";
import { fetchAdditionalUserInfo } from "../asyncThunks/fetchAdditionalUserInfo";

const user: User = {
  _id: "",
  email: "",
  password: "",
  username: "",
  serviceType: "",
  goal: "6341538a9c885e23cfe2691e"
}

export const userInfoSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    updateUserInfo: (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByUsername.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
    builder.addCase(modifyUserInfo.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
    builder.addCase(fetchUserById.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
    builder.addCase(localRegister.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
    builder.addCase(localLogin.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
    builder.addCase(fetchAdditionalUserInfo.fulfilled, (state: User, action: PayloadAction<User>) => ({ ...state, ...action.payload }));
  }
});

export const { updateUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;