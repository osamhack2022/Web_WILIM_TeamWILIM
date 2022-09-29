"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleCompleted = exports.userPlanSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var userPlan = {
    date: new Date(),
    list: [
        {
            detail: "레시피 4개 암기하기",
            completed: true,
        },
        {
            detail: "조주 영상 3개 찾아보기",
            completed: true,
        },
        {
            detail: "시뮬레이션 돌려보기",
            completed: false,
        }
    ]
};
exports.userPlanSlice = (0, toolkit_1.createSlice)({
    name: "userPlan",
    initialState: userPlan,
    reducers: {
        toggleCompleted: function (state, action) {
            var index = state.list.findIndex(function (item) { return item.detail === action.payload.detail; });
            var completed = state.list[index].completed;
            state.list[index].completed = !completed;
        }
    }
});
exports.toggleCompleted = exports.userPlanSlice.actions.toggleCompleted;
exports.default = exports.userPlanSlice.reducer;
