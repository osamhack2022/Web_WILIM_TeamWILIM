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
exports.Box = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var theme_1 = require("../theme");
var Box = function (_a) {
    var width = _a.width, borderRadius = _a.borderRadius, backgroundColor = _a.backgroundColor, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(BoxDiv, __assign({ width: width, borderRadius: borderRadius, backgroundColor: backgroundColor }, { children: children })));
};
exports.Box = Box;
var BoxDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  transition-duration: 0.5s;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  border-radius: ", ";\n"], ["\n  width: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  transition-duration: 0.5s;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  border-radius: ", ";\n"])), function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor || theme_1.BaseStyles.Color.Black4;
}, theme_1.BaseStyles.Shadow.BottomDefault, function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius || "1rem";
});
var templateObject_1;
