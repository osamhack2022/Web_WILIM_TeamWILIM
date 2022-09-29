"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var userInfoSlice_1 = require("./slices/userInfoSlice");
var userPlanSlice_1 = require("./slices/userPlanSlice");
var reducer = (0, toolkit_1.combineReducers)({
    userInfo: userInfoSlice_1.default,
    userPlan: userPlanSlice_1.default
});
exports.default = reducer;
