import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserPlan } from "../../schema/plan";
import { fetchUserPlanById } from "../asyncThunks/fetchUserPlanById";
import { fetchUserPlanByUsername } from "../asyncThunks/fetchUserPlanByUsername";

interface Plan {
  username: string;
  id: string;
  detail: string;
  completed: boolean;
  steady: boolean;
}

interface idList {
  date: string;
  list: string[];
}

const userPlan: UserPlan = {
  date: "",
  list: [
    {
      id: "63421d55d391c40fee7ed0d5",
      detail: "",
      completed: true,
      steady: false,
    },
    {
      detail: "",
      completed: true,
      id: "63421d7cd391c40fee7ed0d9",
      steady: false,
    },
    {
      detail: "",
      completed: false,
      id: "63421f6cd391c40fee7ed0e7",
      steady: false,
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
    builder.addCase(fetchUserPlanByUsername.fulfilled, ((state: UserPlan, action: PayloadAction<idList>) => {
      for(let i = 0; i < action.payload.list.length; i++) {
        state.list[i].id = action.payload.list[i];
      }
    }));
    builder.addCase(fetchUserPlanById.fulfilled, ((state: UserPlan, action: PayloadAction<Plan>) => {
      const index = state.list.findIndex(item => item.id === action.payload.id);
      const { id, detail, completed, steady } = action.payload;
      const plan = {
        id, detail, completed, steady
      }
      state.list[index] = plan;
    }))
  }
});

export const { toggleCompleted } = userPlanSlice.actions;
export default userPlanSlice.reducer;
