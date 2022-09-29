"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var flex_1 = require("../atom/flex");
var input_1 = require("../atom/input");
var text_1 = require("../atom/text");
var theme_1 = require("../theme");
var RadioInput = function (_a) {
    var name = _a.name, value = _a.value, onChange = _a.onChange, innerText = _a.innerText, color = _a.color;
    return ((0, jsx_runtime_1.jsxs)(flex_1.Flex, { children: [(0, jsx_runtime_1.jsx)(input_1.Input, { type: "radio", name: name, value: value, onChange: onChange, style: { cursor: "pointer" } }), (0, jsx_runtime_1.jsx)(text_1.Text, { innerText: innerText || value, fontSize: theme_1.BaseStyles.Text.Heading4, color: color || "white", style: { whiteSpace: "nowrap" } })] }));
};
exports.RadioInput = RadioInput;
