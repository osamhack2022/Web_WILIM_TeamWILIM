import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBar: false,
  newPlan: false,
  examRound: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    sideBarToggle: (state: typeof initialState) => { state.sideBar = !state.sideBar },
    newPlanToggle: (state: typeof initialState) => { state.newPlan = !state.newPlan },
    examRoundToggle: (state: typeof initialState) => { state.examRound = !state.examRound },
  },
});

export const { sideBarToggle, newPlanToggle, examRoundToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
