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
exports.Flex = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Flex = function (_a) {
    var flexDirection = _a.flexDirection, justifyContent = _a.justifyContent, alignItems = _a.alignItems, width = _a.width, height = _a.height, children = _a.children;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: { display: "flex", flexDirection: flexDirection, justifyContent: justifyContent, alignItems: alignItems, width: width, height: height } }, { children: children })));
};
exports.Flex = Flex;
