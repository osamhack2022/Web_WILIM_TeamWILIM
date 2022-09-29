"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var redux_logger_1 = require("redux-logger");
var rootReducer_1 = require("./rootReducer");
var middleware = __spreadArray(__spreadArray([], (0, toolkit_1.getDefaultMiddleware)(), true), [redux_logger_1.default], false);
var store = (0, toolkit_1.configureStore)({
    reducer: rootReducer_1.default,
    middleware: middleware,
});
exports.default = store;
