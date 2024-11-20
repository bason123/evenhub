"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var globalStyles_1 = require("../styles/globalStyles");
var RowComponent = function (props) {
    var justify = props.justify, styles = props.styles, children = props.children, onPress = props.onPress;
    var localStyle = [
        globalStyles_1.globalStyles.row,
        {
            justifyContent: justify
        },
        styles,
    ];
    return onPress ? (react_1["default"].createElement(react_native_1.TouchableOpacity, { activeOpacity: 1, onPress: onPress, style: localStyle }, children)) : (react_1["default"].createElement(react_native_1.View, { style: localStyle }, children));
};
exports["default"] = RowComponent;
