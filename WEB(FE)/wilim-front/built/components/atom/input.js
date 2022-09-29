"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var theme_1 = require("../theme");
var Input = function (_a) {
    var type = _a.type, placeholder = _a.placeholder, width = _a.width, height = _a.height, focusColor = _a.focusColor, onChange = _a.onChange, onClick = _a.onClick, value = _a.value, name = _a.name, style = _a.style;
    return ((0, jsx_runtime_1.jsx)(InputDiv, { type: type, width: width, height: height, focusColor: focusColor, onChange: onChange, onClick: onClick, value: value, name: name, placeholder: placeholder, style: style }));
};
exports.Input = Input;
var InputDiv = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n    background-color: 'white';\n    color: 'black';\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    font-size: ", ";\n    border: 0.3px solid ", ";\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    &:hover {\n        border: 1px solid ", ";\n    }\n    &:focus {\n        border: 1px solid ", ";\n    }\n    input::placeholder {\n        color: 'lightgray';\n    }\n"], ["\n    width: ", ";\n    height: ", ";\n    background-color: 'white';\n    color: 'black';\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    font-size: ", ";\n    border: 0.3px solid ", ";\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    &:hover {\n        border: 1px solid ", ";\n    }\n    &:focus {\n        border: 1px solid ", ";\n    }\n    input::placeholder {\n        color: 'lightgray';\n    }\n"])), function (_a) {
    var width = _a.width;
    return width || "100%";
}, function (_a) {
    var height = _a.height;
    return height || "100%";
}, theme_1.BaseStyles.Shadow.BottomDefault, theme_1.BaseStyles.Text.Heading4, theme_1.BaseStyles.Color.Black0, function (_a) {
    var focusColor = _a.focusColor;
    return focusColor || theme_1.BaseStyles.Color.Beige2;
}, function (_a) {
    var focusColor = _a.focusColor;
    return focusColor || theme_1.BaseStyles.Color.Beige2;
});
var templateObject_1;
