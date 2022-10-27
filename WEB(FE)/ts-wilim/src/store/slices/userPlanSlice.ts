import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List, UserPlan } from "../../schema/plan";
import getFullDate from "../../utils/getFullDate";
import { addUserPlan } from "../asyncThunks/addUserPlan";
import { deleteUserPlan } from "../asyncThunks/deleteUserPlan";
import { fetchUserPlanByUsername } from "../asyncThunks/fetchUserPlanByUsername";

const getMinus = (date1: string, date2: number) => {
  let date = new Date(new Date(Number(date1.substring(0, 4)), Number(date1.substring(4, 6)), Number(date1.substring(6, 8))))
  if(date2 < 0) {
    date.setDate(date.getDate() - 1);
    console.log(date);
    const day =  date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 9 ? `0${date.getMonth()}` : date.getMonth();
    const year = date.getFullYear();
    return `${year}${month}${day}`;
  } else {
    date.setDate(date.getDate() + 1);
    console.log(date);
    const day =  date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 9 ? `0${date.getMonth()}` : date.getMonth();
    const year = date.getFullYear();
    return `${year}${month}${day}`;
  }
}

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
    },
    switchDate: (state: UserPlan, action: PayloadAction<number>) => ({ ...state, date: String(getMinus(state.date, action.payload)) })
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserPlanByUsername.fulfilled, ((state: UserPlan, action: PayloadAction<List[]>) => ({ ...state, list: action.payload })));
    builder.addCase(addUserPlan.fulfilled, ((state: UserPlan, action: PayloadAction<List>) => ({ ...state })));
    builder.addCase(deleteUserPlan.fulfilled, ((state: UserPlan, action: PayloadAction<List>) => ({ ...state })));
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

export const { toggleCompleted, switchDate } = userPlanSlice.actions;
export default userPlanSlice.reducer;
