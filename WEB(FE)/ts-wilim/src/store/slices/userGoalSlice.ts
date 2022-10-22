import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Goal, RoundInfo } from "../../schema/goal";
import { fetchGoalDates } from "../asyncThunks/fetchGoalDates";
import { fetchUserGoalByUsername } from "../asyncThunks/fetchUserGoalByUsername";

const goal: Goal = {
  dateUrl: "",
  description: {
    career: "",
    engJmNm: "",
    hist: "",
    implNm: "",
    instiNm: "",
    jmCd: 0,
    jmNm: "",
    job: "",
    mdobligFldNm: "",
    seriesCd: 0,
    seriesNm: "",
    summary: "",
    trend: ""
  },
  isQnet: false,
  isQnetFalseDate: {
    items: [
      {
        implYy: "",
        description: "",
        docRegStartDt: "",
        docExamEndDt: "",
        docExamStartDt: "",
        docRegEndDt: "",
        docPassDt: "",
        _id: "",
      }
    ]
  },
  mdobligfldnm: "",
  mockLink: [],
  name: "",
  obligfldnm: "",
  qualgbnm: "",
  seriesnm: "",
  users: [],
  _id: "",
  dates: [],
};

export const userGoalSlice = createSlice({
  name: "goal",
  initialState: goal,
  reducers: {
    updateUserGoalInfo: (state: Goal, action: PayloadAction<Goal>) => ({ ...state, ...action.payload }),
    updateGoalDateInfo: (state: Goal, action: PayloadAction<RoundInfo[]>) => ({ ...state, dates: [...action.payload] })
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserGoalByUsername.fulfilled, (state: Goal, action: PayloadAction<Goal>) => ({ ...state, ...action.payload }));
    builder.addCase(fetchGoalDates.fulfilled, (state: Goal, action: PayloadAction<Goal>) => ({ ...state, ...action.payload }))
  }
});

export const { updateUserGoalInfo, updateGoalDateInfo } = userGoalSlice.actions;
export default userGoalSlice.reducer;