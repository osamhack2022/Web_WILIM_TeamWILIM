import { combineReducers } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfoSlice";
import userPlan from "./slices/userPlanSlice";
import toggle from "./slices/toggleSlice";
import userGoal from "./slices/userGoalSlice";

const reducer = combineReducers({
    userInfo,
    userPlan,
    userGoal,
    toggle,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;