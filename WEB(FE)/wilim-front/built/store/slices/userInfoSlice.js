"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserInfo = exports.userInfoSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var user = {
    email: "kandy1002@naver.com",
    password: "qq415263~",
    username: "오형근",
    serviceType: "육군",
    goal: "조주기능사",
};
exports.userInfoSlice = (0, toolkit_1.createSlice)({
    name: "user",
    initialState: user,
    reducers: {
        updateUserInfo: function (state, action) { return (__assign(__assign({}, state), action.payload)); },
    }
});
exports.updateUserInfo = exports.userInfoSlice.actions.updateUserInfo;
exports.default = exports.userInfoSlice.reducer;
