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
exports.InputArea = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var button_1 = require("../atom/button");
var flex_1 = require("../atom/flex");
var input_1 = require("../atom/input");
var text_1 = require("../atom/text");
var theme_1 = require("../theme");
var InputArea = function (_a) {
    var name = _a.name, title = _a.title, essential = _a.essential, inputType = _a.inputType, placeholder = _a.placeholder, onChange = _a.onChange, value = _a.value, buttonText = _a.buttonText, onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { width: "100%" } }, { children: (0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ flexDirection: "column", alignItems: "left" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ style: { marginBottom: "0.5rem" } }, { children: [(0, jsx_runtime_1.jsx)(text_1.Text, { innerText: title, fontSize: "24px", fontWeight: theme_1.BaseStyles.Text.Border1, color: "white" }), essential === true ? ((0, jsx_runtime_1.jsx)(text_1.Text, { innerText: "*", fontSize: "24px", color: theme_1.BaseStyles.Color.Orange3 })) : null] })), (0, jsx_runtime_1.jsxs)(flex_1.Flex, __assign({ justifyContent: "center", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(input_1.Input, { type: inputType, placeholder: placeholder, onChange: onChange, value: value, name: name }), buttonText && ((0, jsx_runtime_1.jsx)(button_1.Button, { innerText: buttonText, style: { marginLeft: "0.5rem" }, onClick: onClick }))] }))] })) })));
};
exports.InputArea = InputArea;
