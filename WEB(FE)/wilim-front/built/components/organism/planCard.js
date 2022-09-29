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
exports.PlanCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var box_1 = require("../atom/box");
var flex_1 = require("../atom/flex");
var line_1 = require("../atom/line");
var marginBox_1 = require("../atom/marginBox");
var text_1 = require("../atom/text");
var plan_1 = require("../molecule/plan");
var theme_1 = require("../theme");
var react_redux_1 = require("react-redux");
var userPlanSlice_1 = require("../../store/slices/userPlanSlice");
var PlanCard = function () {
    var planList = (0, react_redux_1.useSelector)(function (state) { return state.userPlan.list; });
    var checks = planList.filter(function (item) { return item.completed === true; }).length;
    var completeColor = checks === planList.length ? theme_1.BaseStyles.Color.Lime1 : theme_1.BaseStyles.Color.Black1;
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleToggle = function (e) {
        dispatch((0, userPlanSlice_1.toggleCompleted)(e.target.id));
    };
    return ((0, jsx_runtime_1.jsx)(box_1.Box, __assign({ width: "80%", borderRadius: "0.5rem", backgroundColor: theme_1.BaseStyles.Color.Black4 }, { children: (0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", width: "100%" }, { children: [(0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ justifyContent: "space-between" }, { children: [(0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "8.24", color: "white", fontSize: theme_1.BaseStyles.Text.Heading3, fontWeight: theme_1.BaseStyles.Text.Border1 }), (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "Got ".concat(checks, "/3"), color: completeColor, fontWeight: theme_1.BaseStyles.Text.Border2, fontSize: theme_1.BaseStyles.Text.Heading3 })] })), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "0.5rem" }), (0, jsx_runtime_1.jsx)(line_1.Line, { width: "100%", height: "1px", color: theme_1.BaseStyles.Color.Black0 }), planList && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: planList.map(function (item, index) {
                        (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "1rem" }), (0, jsx_runtime_1.jsx)(plan_1.Plan, { completed: item.completed, detail: item.detail, onClick: function (e) { return handleToggle(e); }, id: item.detail })] }, index);
                    }) })] })) })));
};
exports.PlanCard = PlanCard;
