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
exports.UserTitle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var flex_1 = require("../atom/flex");
var line_1 = require("../atom/line");
var marginBox_1 = require("../atom/marginBox");
var text_1 = require("../atom/text");
var theme_1 = require("../theme");
var react_redux_1 = require("react-redux");
var UserTitle = function () {
    var username = (0, react_redux_1.useSelector)(function (state) { return state.userInfo.username; });
    return ((0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", alignItems: "center", width: "80%" }, { children: [(0, jsx_runtime_1.jsx)(flex_1.Flex, __assign({ width: "100%" }, { children: (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "".concat(username, " \uB2D8"), color: "white", fontSize: theme_1.BaseStyles.Text.Heading2, fontWeight: theme_1.BaseStyles.Text.Border0 }) })), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "0.5rem" }), (0, jsx_runtime_1.jsx)(line_1.Line, { width: "100%", height: "1px", color: theme_1.BaseStyles.Color.Black0 })] })));
};
exports.UserTitle = UserTitle;
