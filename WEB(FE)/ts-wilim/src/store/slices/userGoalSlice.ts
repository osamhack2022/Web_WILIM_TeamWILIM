import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Goal } from "../../schema/goal";
import { fetchUserGoalByUsername } from "../asyncThunks/fetchUserGoalByUsername";

const goal: Goal = {
  ctf: {
    _id: "",
    name: "",
    qualgbnm: "",
    description: "",
    seriesnm: "",
    obligfldnm: "",
    mdobligfldnm: "",
    dateUrl: "",
    mockLink: [],
    isQnet: true,
    users: [],
  },
  date: {
    items: []
  }
};

export const userGoalSlice = createSlice({
  name: "goal",
  initialState: goal,
  reducers: {
    updateUserGoalInfo: (state: Goal, action: PayloadAction<Goal>) => ({ ...state, ...action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserGoalByUsername.fulfilled, (state: Goal, action: PayloadAction<Goal>) => ({ ...state, ...action.payload }));
  }
});

export const { updateUserGoalInfo } = userGoalSlice.actions;
export default userGoalSlice.reducer;