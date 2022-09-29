import { combineReducers } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfoSlice";
import userPlan from "./slices/userPlanSlice";

const reducer = combineReducers({
    userInfo,
    userPlan
});

export default reducer;