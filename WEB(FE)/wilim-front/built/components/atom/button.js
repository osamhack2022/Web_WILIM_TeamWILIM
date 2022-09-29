"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var theme_1 = require("../theme");
var Button = function (_a) {
    var onClick = _a.onClick, width = _a.width, height = _a.height, color = _a.color, hoverColor = _a.hoverColor, backgroundColor = _a.backgroundColor, innerText = _a.innerText, style = _a.style;
    return ((0, jsx_runtime_1.jsx)(ButtonDiv, __assign({ onClick: onClick, width: width, height: height, color: color, hoverColor: hoverColor, backgroundColor: backgroundColor, style: style }, { children: innerText || 'InnerText' })));
};
exports.Button = Button;
var ButtonDiv = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    box-sizing: border-box;\n    overflow-hidden;\n    background: ", ";\n    color: ", ";\n    width: ", ";\n    height: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    padding: 1rem;\n    border-radius: 0.5rem;\n    line-height: auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    &:hover {\n        background: ", ";\n        border-radius: 1rem;\n    }\n"], ["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    box-sizing: border-box;\n    overflow-hidden;\n    background: ", ";\n    color: ", ";\n    width: ", ";\n    height: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    padding: 1rem;\n    border-radius: 0.5rem;\n    line-height: auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    &:hover {\n        background: ", ";\n        border-radius: 1rem;\n    }\n"])), theme_1.BaseStyles.Shadow.BottomDefault, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor || theme_1.BaseStyles.Color.Beige3;
}, function (_a) {
    var color = _a.color;
    return color || theme_1.BaseStyles.Color.Black4;
}, function (_a) {
    var width = _a.width;
    return width || '100px';
}, function (_a) {
    var height = _a.height;
    return height || '100%';
}, theme_1.BaseStyles.Text.Heading4, theme_1.BaseStyles.Font.Inter, theme_1.BaseStyles.Text.Border0, function (_a) {
    var hoverColor = _a.hoverColor;
    return hoverColor || theme_1.BaseStyles.Color.Beige1;
});
var templateObject_1;
