"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var appColors_1 = require("../constants/appColors");
var fontFamilies_1 = require("../constants/fontFamilies");
var globalStyles_1 = require("../styles/globalStyles");
var TextComponent = function (props) {
    var text = props.text, color = props.color, size = props.size, flex = props.flex, font = props.font, styles = props.styles, title = props.title;
    return (react_1["default"].createElement(react_native_1.Text, { style: [
            globalStyles_1.globalStyles.text,
            {
                color: color !== null && color !== void 0 ? color : appColors_1.appColors.text,
                fontSize: size ? size : title ? 24 : 14,
                flex: flex !== null && flex !== void 0 ? flex : 0,
                fontFamily: font
                    ? font
                    : title
                        ? fontFamilies_1.fontFamilies.medium
                        : fontFamilies_1.fontFamilies.regular
            },
            styles,
        ] }, text));
};
exports["default"] = TextComponent;
