"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calender = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_calendar_1 = require("react-calendar");
require("react-calendar/dist/Calendar.css");
var Calender = function () {
    var _a = (0, react_1.useState)(new Date()), value = _a[0], setValue = _a[1];
    return ((0, jsx_runtime_1.jsx)(react_calendar_1.default, { onChange: setValue, value: value }));
};
exports.Calender = Calender;
