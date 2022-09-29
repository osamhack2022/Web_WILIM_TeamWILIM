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
exports.GoalPlanTemplate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var flex_1 = require("../atom/flex");
var line_1 = require("../atom/line");
var marginBox_1 = require("../atom/marginBox");
var text_1 = require("../atom/text");
var goalCard_1 = require("../organism/goalCard");
var planCard_1 = require("../organism/planCard");
var theme_1 = require("../theme");
var userTitle_1 = require("../molecule/userTitle");
var GoalPlanTemplate = function () {
    return ((0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(userTitle_1.UserTitle, {}), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" }), (0, jsx_runtime_1.jsx)(flex_1.Flex, __assign({ flexDirection: "column", justifyContent: "flex-start", width: "calc(80% + 2rem)" }, { children: (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "Goal", color: "white", fontSize: theme_1.BaseStyles.Text.Heading2, fontWeight: theme_1.BaseStyles.Text.Border0 }) })), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "1rem" }), (0, jsx_runtime_1.jsx)(goalCard_1.GoalCard, {}), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" }), (0, jsx_runtime_1.jsx)(line_1.Line, { width: "30%", height: "1px", color: theme_1.BaseStyles.Color.Black2 }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" }), (0, jsx_runtime_1.jsx)(flex_1.Flex, __assign({ flexDirection: "column", justifyContent: "flex-start", width: "calc(80% + 2rem)" }, { children: (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "Plan", color: "white", fontSize: theme_1.BaseStyles.Text.Heading2, fontWeight: theme_1.BaseStyles.Text.Border0 }) })), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "1rem" }), (0, jsx_runtime_1.jsx)(planCard_1.PlanCard, {})] })));
};
exports.GoalPlanTemplate = GoalPlanTemplate;
