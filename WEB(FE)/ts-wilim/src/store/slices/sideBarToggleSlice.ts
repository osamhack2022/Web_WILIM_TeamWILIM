import { createSlice} from "@reduxjs/toolkit";

export const sideBarToggleSlice = createSlice({
  name: "sideBarToggle",
  initialState: false,
  reducers: {
    sideBarToggle: (state: boolean) => !state
  }
});

export const { sideBarToggle } = sideBarToggleSlice.actions;
export default sideBarToggleSlice.reducer;
