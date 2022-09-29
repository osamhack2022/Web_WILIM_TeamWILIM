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
exports.CreateAccountTemplate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var button_1 = require("../atom/button");
var flex_1 = require("../atom/flex");
var line_1 = require("../atom/line");
var marginBox_1 = require("../atom/marginBox");
var text_1 = require("../atom/text");
var inputArea_1 = require("../molecule/inputArea");
var theme_1 = require("../theme");
var input_1 = require("../atom/input");
var CreateAccountTemplate = function () {
    var initialForm = {
        email: "",
        password: "",
        username: "",
        serviceType: "",
    };
    var _a = (0, react_1.useState)(initialForm), userInfoForm = _a[0], setUserInfoForm = _a[1];
    var buttonColor = function (type) {
        return type === userInfoForm.serviceType
            ? theme_1.BaseStyles.Color.Purple2
            : theme_1.BaseStyles.Color.Purple1;
    };
    var handleChange = function (event) {
        var _a;
        var _b = event.target, name = _b.name, value = _b.value;
        setUserInfoForm(__assign(__assign({}, userInfoForm), (_a = {}, _a[name] = value, _a)));
        console.log(userInfoForm);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "Create Account", fontSize: theme_1.BaseStyles.Text.Heading2, fontWeight: theme_1.BaseStyles.Text.Border1, textAlign: "left", color: "white" }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "1rem" }), (0, jsx_runtime_1.jsx)(line_1.Line, { width: "100%", height: "2px", color: "white" }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "3rem" }), (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsx)(inputArea_1.InputArea, { name: "email", title: "E-mail", essential: true, inputType: "text", placeholder: "E-mail...", onChange: function (e) { return handleChange(e); }, value: userInfoForm.email }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" }), (0, jsx_runtime_1.jsx)(inputArea_1.InputArea, { title: "User Name", name: "username", essential: true, inputType: "text", placeholder: "Name...", buttonText: "Check", onChange: function (e) { return handleChange(e); }, value: userInfoForm.username }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" }), (0, jsx_runtime_1.jsx)(inputArea_1.InputArea, { title: "Password", name: "password", essential: true, inputType: "password", placeholder: "password...", onChange: function (e) { return handleChange(e); }, value: userInfoForm.password }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" }), (0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ alignItems: "center", justifyContent: "center" }, { children: [(0, jsx_runtime_1.jsx)(input_1.Input, { style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    backgroundColor: buttonColor("육군"),
                                    border: "none",
                                    color: "white",
                                }, type: "button", name: "serviceType", value: "\uC721\uAD70", onClick: function (e) { return handleChange(e); } }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginLeft: "1rem" }), (0, jsx_runtime_1.jsx)(input_1.Input, { style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    backgroundColor: buttonColor("해군"),
                                    border: "none",
                                    color: "white",
                                }, type: "button", name: "serviceType", value: "\uD574\uAD70", onClick: function (e) { return handleChange(e); } }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginLeft: "1rem" }), (0, jsx_runtime_1.jsx)(input_1.Input, { style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    backgroundColor: buttonColor("공군"),
                                    border: "none",
                                    color: "white",
                                }, type: "button", name: "serviceType", value: "\uACF5\uAD70", onClick: function (e) { return handleChange(e); } })] })), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "3rem" }), (0, jsx_runtime_1.jsx)(flex_1.Flex, __assign({ flexDirection: "column", alignItems: "center" }, { children: (0, jsx_runtime_1.jsx)(button_1.Button, { innerText: "Create New Account", onClick: function (e) {
                                e.preventDefault();
                                console.log(userInfoForm);
                            }, color: "white", backgroundColor: theme_1.BaseStyles.Color.Orange2, hoverColor: theme_1.BaseStyles.Color.Orange3, width: "60%", height: "3rem" }) }))] }), (0, jsx_runtime_1.jsx)(marginBox_1.MarginBox, { marginBottom: "2rem" })] }));
};
exports.CreateAccountTemplate = CreateAccountTemplate;
