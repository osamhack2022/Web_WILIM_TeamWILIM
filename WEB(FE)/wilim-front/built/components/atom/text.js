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
exports.Text = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var theme_1 = require("../theme");
var Text = function (_a) {
    var color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, textAlign = _a.textAlign, innerText = _a.innerText, style = _a.style, hoverColor = _a.hoverColor, onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)(TextDiv, __assign({ color: color, fontSize: fontSize, fontWeight: fontWeight, textAlign: textAlign, hoverColor: hoverColor, style: style, onClick: onClick }, { children: innerText || '내용을 입력해주세요' })));
};
exports.Text = Text;
var TextDiv = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    cursor: pointer;\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    text-align: ", ";\n    &:hover {\n        color: ", ";\n    }\n"], ["\n    color: ", ";\n    cursor: pointer;\n    font-size: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    text-align: ", ";\n    &:hover {\n        color: ", ";\n    }\n"])), function (_a) {
    var color = _a.color;
    return color || 'black';
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || '10px';
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight || theme_1.BaseStyles.Text.Border3;
}, theme_1.BaseStyles.Font.Inter, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign || 'left';
}, function (_a) {
    var hoverColor = _a.hoverColor;
    return hoverColor;
});
var templateObject_1;
