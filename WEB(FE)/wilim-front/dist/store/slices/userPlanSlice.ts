import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List, UserPlan } from "../../schema/plan";

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
    toggleCompleted: (state: UserPlan, action: PayloadAction<List>) => {
        const index = state.list.findIndex(item => item.detail === action.payload.detail);
        const { completed } = state.list[index];
        state.list[index].completed = !completed;
    }
  }
});

export const { toggleCompleted } = userPlanSlice.actions;
export default userPlanSlice.reducer;
