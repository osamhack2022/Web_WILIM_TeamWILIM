import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPlan } from "../../schema/plan";
import { fetchUserPlanByUsername } from "../asyncThunks/fetchUserPlanByUsername";

const userPlan: UserPlan = {
  date: new Date(),
  list: [
    {
      detail: "레시피 4개 암기하기",
      completed: true,
    },
    {
      detail: "조주 영상 3개 찾아보기",
      completed: true,
    },
    {
      detail: "시뮬레이션 돌려보기",
      completed: false,
    }
  ]
}

export const userPlanSlice = createSlice({
  name: "userPlan",
  initialState: userPlan,
  reducers: {
    toggleCompleted: (state: UserPlan, action: PayloadAction<string>) => {
        const index = state.list.findIndex(item => item.detail === action.payload);
        const { completed } = state.list[index];
        state.list[index].completed = !completed;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserPlanByUsername.fulfilled, ((state: UserPlan, action: PayloadAction<UserPlan>) => ({ ...state, ...action.payload })));
  }
});

export const { toggleCompleted } = userPlanSlice.actions;
export default userPlanSlice.reducer;
