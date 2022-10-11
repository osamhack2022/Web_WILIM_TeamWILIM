import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBar: false,
  newPlan: false,
};

export const toggleSlice = createSlice({
  name: "sideBarToggle",
  initialState,
  reducers: {
    sideBarToggle: (state: typeof initialState) => { state.sideBar = !state.sideBar },
    newPlanToggle: (state: typeof initialState) => { state.newPlan = !state.newPlan },
  },
});

export const { sideBarToggle, newPlanToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
