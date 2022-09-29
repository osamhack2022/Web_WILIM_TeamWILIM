"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var theme_1 = require("../components/theme");
var styled_components_1 = require("styled-components");
var loginTemplate_1 = require("../components/template/loginTemplate");
var createAccountTemplate_1 = require("../components/template/createAccountTemplate");
var react_1 = require("react");
var userTitle_1 = require("../components/molecule/userTitle");
var refCommunityTemplate_1 = require("../components/template/refCommunityTemplate");
/**
 * Layout은 App.js로 가기 전에 최종적인 라우팅 밑 GNB 등의 컴포넌트가 합쳐지는 장소입니다.
 * 이곳에서 구현하고자 하는 화면을 모두 구성한 뒤 App.js로 넘깁니다.
 */
var Layout = function () {
    var _a = (0, react_1.useState)("1"), pageNumber = _a[0], setPageNumber = _a[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "number", onChange: function (e) {
                    setPageNumber(e.target.value);
                    console.log(e.target);
                }, value: pageNumber }), (0, jsx_runtime_1.jsx)(MediaDiv, { children: (0, jsx_runtime_1.jsx)(InnerMediaDiv, { children: (function () {
                        switch (pageNumber) {
                            case "0":
                                return (0, jsx_runtime_1.jsx)(userTitle_1.UserTitle, {});
                            case "1":
                                return (0, jsx_runtime_1.jsx)(refCommunityTemplate_1.RefCommunityTemplate, {});
                            case "2":
                                return (0, jsx_runtime_1.jsx)(createAccountTemplate_1.CreateAccountTemplate, {});
                            default:
                                return (0, jsx_runtime_1.jsx)(loginTemplate_1.LoginTemplate, {});
                        }
                    })() }) })] }));
};
exports.Layout = Layout;
var MediaDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: 35vw;\n  width: 30vw;\n  height: 100vh;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #616161;\n  fontfamily: ", ";\n  @media (max-width: 1280px) {\n    left: 0;\n    width: 100vw;\n  }\n"], ["\n  position: absolute;\n  left: 35vw;\n  width: 30vw;\n  height: 100vh;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #616161;\n  fontfamily: ", ";\n  @media (max-width: 1280px) {\n    left: 0;\n    width: 100vw;\n  }\n"])), theme_1.BaseStyles.Font.Inter);
var InnerMediaDiv = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 80%;\n"], ["\n  width: 80%;\n"])));
var templateObject_1, templateObject_2;
