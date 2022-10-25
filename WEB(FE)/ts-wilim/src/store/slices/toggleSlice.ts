import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  sideBar: false,
  newPlan: false,
  examRound: false,
  goalSelect: false,
  goalDate: "",
  goalSearchInfo: "",
  desModal: false,
  myPost: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    sideBarToggle: (state: typeof initialState) => { state.sideBar = !state.sideBar },
    newPlanToggle: (state: typeof initialState) => { state.newPlan = !state.newPlan },
    examRoundToggle: (state: typeof initialState) => { state.examRound = !state.examRound },
    goalSelectToggle: (state: typeof initialState) => { state.goalSelect = !state.goalSelect },
    goalSearchInfoToggle: (state: typeof initialState, action: PayloadAction<string>) => { state.goalSearchInfo = action.payload },
    goalDateToggle: (state: typeof initialState, action: PayloadAction<string>) => { state.goalDate = action.payload },
    desModalToggle: (state: typeof initialState) => { state.desModal = !state.desModal },
    myPostToggle: (state: typeof initialState) => { state.myPost = !state.myPost },
  },
})

export const { sideBarToggle, newPlanToggle, examRoundToggle, goalSelectToggle, goalSearchInfoToggle, goalDateToggle, desModalToggle, myPostToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
