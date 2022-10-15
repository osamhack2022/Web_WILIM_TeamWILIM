import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchPlanResProps } from "../../schema/fetch";
import { List, UserPlan } from "../../schema/plan";
import getFullDate from "../../utils/getFullDate";
import { addUserPlan } from "../asyncThunks/addUserPlan";
import { deleteUserPlan } from "../asyncThunks/deleteUserPlan";
import { fetchUserPlanByUsername } from "../asyncThunks/fetchUserPlanByUsername";

const date = getFullDate();
const userPlan: UserPlan = {
  date,
  list: []
}

export const userPlanSlice = createSlice({
  name: "userPlan",
  initialState: userPlan,
  reducers: {
    toggleCompleted: (state: UserPlan, action: PayloadAction<string>) => {
        const index = state.list.findIndex(item => item._id === action.payload);
        const { completed } = state.list[index];
        state.list[index].completed = !completed;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserPlanByUsername.fulfilled, ((state: UserPlan, action: PayloadAction<UserPlan>) => ({ ...state, ...action.payload })));
    builder.addCase(addUserPlan.fulfilled, ((state: UserPlan, action: PayloadAction<List>) => ({ date: state.date, list: state.list.concat(action.payload) })));
    builder.addCase(deleteUserPlan.fulfilled, ((state: UserPlan, action: PayloadAction<List>) => ({ date: state.date, list: state.list.filter(plan => plan._id !== action.payload._id) })));
    // builder.addCase(fetchUserPlanById.fulfilled, ((state: UserPlan, action: PayloadAction<FetchedPlan>) => {
    //   const index = state.list.findIndex(item => item.id === action.payload.id);
    //   const { id, detail, completed, steady } = action.payload;
    //   const plan = {
    //     id, detail, completed, steady
    //   }
    //   state.list[index] = plan;
    // }))
  }
});

export const { toggleCompleted } = userPlanSlice.actions;
export default userPlanSlice.reducer;
