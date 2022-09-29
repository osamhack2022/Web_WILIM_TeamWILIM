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
exports.LoginTemplate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var text_1 = require("../atom/text");
var flex_1 = require("../atom/flex");
var marginBox_1 = require("../atom/marginBox");
var theme_1 = require("../theme");
var button_1 = require("../atom/button");
var inputArea_1 = require("../molecule/inputArea");
var LoginTemplate = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(flex_1.Flex, __assign({ justifyContent: "center" }, { children: (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "Login", fontWeight: theme_1.BaseStyles.Text.Border1, color: "white", fontSize: "60px", textAlign: "center" }) })), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "6rem" }), (0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", alignItems: "left" }, { children: [(0, jsx_runtime_1.jsx)(inputArea_1.InputArea, { title: "E-mail", inputType: "text", placeholder: 'E-mail...' }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" }), (0, jsx_runtime_1.jsx)(inputArea_1.InputArea, { title: "Password", inputType: "password", placeholder: 'password...' })] })), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "1rem" }), (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "Forgot password?", color: "lightgray", fontSize: theme_1.BaseStyles.Text.Heading4, textAlign: "left", hoverColor: "white", style: { textDecoration: "underline" }, onClick: function () { return console.log("hello"); } }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "3rem" }), (0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(button_1.Button, { innerText: "Login", onClick: function (e) {
                            e.preventDefault();
                            console.log("Login...");
                        }, color: "white", backgroundColor: theme_1.BaseStyles.Color.Orange2, hoverColor: theme_1.BaseStyles.Color.Orange3, width: "60%", height: "3rem" }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "1rem" }), (0, jsx_runtime_1.jsxs)("div", __assign({ id: "textWrapper" }, { children: [(0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "Are you a new visitor? ", color: "lightgray", fontSize: theme_1.BaseStyles.Text.Heading4 }), (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "Create Account", color: theme_1.BaseStyles.Color.Orange2, fontSize: theme_1.BaseStyles.Text.Heading4, fontWeight: theme_1.BaseStyles.Text.Border1, hoverColor: theme_1.BaseStyles.Color.Orange3, style: { textDecoration: "underline" }, onClick: function () { return console.log("let's create account"); } })] }))] }))] }));
};
exports.LoginTemplate = LoginTemplate;
