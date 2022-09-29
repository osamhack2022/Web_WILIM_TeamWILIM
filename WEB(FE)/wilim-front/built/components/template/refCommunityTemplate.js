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
exports.RefCommunityTemplate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var button_1 = require("../atom/button");
var flex_1 = require("../atom/flex");
var marginBox_1 = require("../atom/marginBox");
var text_1 = require("../atom/text");
var userTitle_1 = require("../molecule/userTitle");
var theme_1 = require("../theme");
var react_redux_1 = require("react-redux");
var RefCommunityTemplate = function () {
    var goal = (0, react_redux_1.useSelector)(function (state) { return state.userInfo.goal; });
    return ((0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(userTitle_1.UserTitle, {}), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "3rem" }), (0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", justifyContent: "flex-start", width: "80%" }, { children: [(0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "References", color: "white", fontSize: theme_1.BaseStyles.Text.Heading2, fontWeight: theme_1.BaseStyles.Text.Border0 }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "1rem" }), (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "\uC790\uB8CC\uC2E4\uC5D0\uC11C \uC9C0\uB09C \uAE30\uCD9C\uBB38\uC81C\uB4E4\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694!", color: "white", fontSize: theme_1.BaseStyles.Text.Heading4, fontWeight: theme_1.BaseStyles.Text.Border3 })] })), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" }), (0, jsx_runtime_1.jsx)(button_1.Button, { innerText: "".concat(goal, " \uACF5\uAC1C\uBB38\uC81C \uC790\uB8CC \uB2E4\uC6B4\uB85C\uB4DC"), width: "80%", color: theme_1.BaseStyles.Color.Orange3, backgroundColor: theme_1.BaseStyles.Color.Black4, hoverColor: theme_1.BaseStyles.Color.Black3, onClick: function () { return console.log("공개문제 다운로드!"); } }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" }), (0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", justifyContent: "flex-start", width: "80%" }, { children: [(0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "\uC870\uC8FC\uAE30\uB2A5\uC0AC\uB294 \uC720\uB8CC \uAC15\uC758\uB97C \uC81C\uACF5\uD574\uC8FC\uB294\n          \uACF3\uC774 \uC5C6\uC5B4\uC694....", color: "white", fontSize: theme_1.BaseStyles.Text.Heading4, fontWeight: theme_1.BaseStyles.Text.Border3 }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "1rem" }), (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "\uD63C\uC790 \uACF5\uBD80\uD558\uACE0\uC790 \uD55C\uB2E4\uBA74 \uC544\uB798 \uCEE4\uBBA4\uB2C8\uD2F0\uB97C \uD65C\uC6A9\uD574\uBCF4\uB294 \uAC83\uC740 \uC5B4\uB5A8\uAE4C\uC694?", color: "white", fontSize: theme_1.BaseStyles.Text.Heading4, fontWeight: theme_1.BaseStyles.Text.Border3 })] })), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "3rem" }), (0, jsx_runtime_1.jsx)(flex_1.Flex, __assign({ flexDirection: "column", justifyContent: "flex-start", width: "80%" }, { children: (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "Community", color: "white", fontSize: theme_1.BaseStyles.Text.Heading2, fontWeight: theme_1.BaseStyles.Text.Border0 }) })), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" }), (0, jsx_runtime_1.jsx)(button_1.Button, { innerText: "\uB124\uC774\uBC84 \uCEE4\uBBA4\uB2C8\uD2F0 \uBC14\uB85C\uAC00\uAE30", width: "80%", color: "white", backgroundColor: "#2DB400", hoverColor: theme_1.BaseStyles.Color.Lime1, onClick: function () { return console.log("커뮤니티 바로가기!"); } })] })));
};
exports.RefCommunityTemplate = RefCommunityTemplate;
