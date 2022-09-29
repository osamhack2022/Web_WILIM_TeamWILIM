"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginBox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MarginBox = function (_a) {
    var marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginTop = _a.marginTop, marginBottom = _a.marginBottom, margin = _a.margin;
    return ((0, jsx_runtime_1.jsx)("div", { style: { margin: margin && margin || 0, marginLeft: marginLeft, marginRight: marginRight, marginTop: marginTop, marginBottom: marginBottom } }));
};
exports.MarginBox = MarginBox;
