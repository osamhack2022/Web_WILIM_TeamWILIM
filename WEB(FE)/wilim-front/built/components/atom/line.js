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
exports.Line = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Line = function (_a) {
    var width = _a.width, height = _a.height, color = _a.color, style = _a.style;
    return ((0, jsx_runtime_1.jsx)("div", { style: __assign({ margin: 0, width: width, height: height, background: color }, style) }));
};
exports.Line = Line;
