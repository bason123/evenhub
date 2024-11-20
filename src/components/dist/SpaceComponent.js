"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var SpaceComponent = function (props) {
    var width = props.width, height = props.height;
    return (react_1["default"].createElement(react_native_1.View, { style: {
            width: width,
            height: height
        } }));
};
exports["default"] = SpaceComponent;
