"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var _1 = require(".");
var globalStyles_1 = require("../styles/globalStyles");
var appColors_1 = require("../constants/appColors");
var fontFamilies_1 = require("../constants/fontFamilies");
var ButtonComponent = function (props) {
    var icon = props.icon, text = props.text, textColor = props.textColor, textStyles = props.textStyles, color = props.color, styles = props.styles, textFont = props.textFont, onPress = props.onPress, iconFlex = props.iconFlex, type = props.type;
    return type === 'primary' ? (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onPress, style: [
                globalStyles_1.globalStyles.button,
                globalStyles_1.globalStyles.shadow,
                {
                    backgroundColor: color !== null && color !== void 0 ? color : appColors_1.appColors.primary,
                    marginBottom: 17,
                    width: '90%'
                },
                styles,
            ] },
            icon && iconFlex === 'left' && icon,
            react_1["default"].createElement(_1.TextComponent, { text: text, color: textColor !== null && textColor !== void 0 ? textColor : appColors_1.appColors.white, styles: [textStyles, { marginLeft: icon ? 12 : 0, fontSize: 16, textAlign: 'center' }], flex: icon && iconFlex === 'right' ? 1 : 0, font: textFont !== null && textFont !== void 0 ? textFont : fontFamilies_1.fontFamilies.medium }),
            icon && iconFlex === 'right' && icon))) : (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onPress },
        react_1["default"].createElement(_1.TextComponent, { text: text, color: type === 'link' ? appColors_1.appColors.primary : appColors_1.appColors.text })));
};
exports["default"] = ButtonComponent;
