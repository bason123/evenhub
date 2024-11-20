"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var globalStyles_1 = require("../styles/globalStyles");
var SectionComponent = function (props) {
    var children = props.children, styles = props.styles;
    return (react_1["default"].createElement(react_native_1.View, { style: [globalStyles_1.globalStyles.section, styles] }, children));
};
exports["default"] = SectionComponent;
