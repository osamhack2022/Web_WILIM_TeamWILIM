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
exports.GoalCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var box_1 = require("../atom/box");
var flex_1 = require("../atom/flex");
var marginBox_1 = require("../atom/marginBox");
var text_1 = require("../atom/text");
var theme_1 = require("../theme");
var GoalCard = function () {
    return ((0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", width: "100%", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(box_1.Box, __assign({ width: "80%", borderRadius: "0.5rem 0.5rem 0 0", backgroundColor: theme_1.BaseStyles.Color.Black4 }, { children: (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "\uC870\uC8FC\uAE30\uB2A5\uC0AC", color: "white", fontSize: theme_1.BaseStyles.Text.Heading3, fontWeight: theme_1.BaseStyles.Text.Border1 }) })), (0, jsx_runtime_1.jsx)(box_1.Box, __assign({ width: "80%", borderRadius: "0 0 0.5rem 0.5rem", backgroundColor: theme_1.BaseStyles.Color.Red1 }, { children: (0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "D-13", color: "white", fontSize: theme_1.BaseStyles.Text.Heading2, fontWeight: theme_1.BaseStyles.Text.Border2 }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "0.5rem" }), (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "\uC2DC\uAC04\uC774 \uC5BC\uB9C8 \uC548 \uB0A8\uC558\uC5B4\uC694!", color: "white", fontSize: theme_1.BaseStyles.Text.Heading3, fontWeight: theme_1.BaseStyles.Text.Border1 })] })) }))] })));
};
exports.GoalCard = GoalCard;
