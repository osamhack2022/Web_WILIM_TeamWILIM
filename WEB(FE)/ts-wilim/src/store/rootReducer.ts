import { combineReducers } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfoSlice";
import userPlan from "./slices/userPlanSlice";
import sideBarToggle from "./slices/sideBarToggleSlice";

const reducer = combineReducers({
    userInfo,
    userPlan,
    sideBarToggle
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;