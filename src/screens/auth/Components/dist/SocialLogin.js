"use strict";
exports.__esModule = true;
var react_1 = require("react");
var components_1 = require("../../../components");
var appColors_1 = require("../../../constants/appColors");
var fontFamilies_1 = require("../../../constants/fontFamilies");
var svgs_1 = require("../../../assets/svgs");
var SocialLogin = function () {
    return (react_1["default"].createElement(components_1.SectionComponent, null,
        react_1["default"].createElement(components_1.TextComponent, { styles: { textAlign: 'center' }, text: "OR", color: appColors_1.appColors.gray4, size: 16, font: fontFamilies_1.fontFamilies.medium }),
        react_1["default"].createElement(components_1.SpaceComponent, { height: 16 }),
        react_1["default"].createElement(components_1.ButtonComponent, { type: 'primary', color: appColors_1.appColors.white, textColor: appColors_1.appColors.text, text: "Login with Google", textFont: fontFamilies_1.fontFamilies.regular, iconFlex: "left", icon: react_1["default"].createElement(svgs_1.Google, null) }),
        react_1["default"].createElement(components_1.ButtonComponent, { type: 'primary', color: appColors_1.appColors.white, textColor: appColors_1.appColors.text, text: "Login with Facebook", textFont: fontFamilies_1.fontFamilies.regular, iconFlex: "left", icon: react_1["default"].createElement(svgs_1.Facebook, null) })));
};
exports["default"] = SocialLogin;
