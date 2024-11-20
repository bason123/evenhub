"use strict";
exports.__esModule = true;
var react_1 = require("react");
var components_1 = require("../../components");
var iconsax_react_native_1 = require("iconsax-react-native");
var appColors_1 = require("../../constants/appColors");
var ForgotPassword = function () {
    var _a = react_1.useState(''), email = _a[0], setEmail = _a[1];
    return (react_1["default"].createElement(components_1.ContainerComponent, { back: true, isImageBackground: true },
        react_1["default"].createElement(components_1.SectionComponent, null,
            react_1["default"].createElement(components_1.TextComponent, { text: "Resset Password", title: true }),
            react_1["default"].createElement(components_1.TextComponent, { text: "Please enter your email address to request a password reset" }),
            react_1["default"].createElement(components_1.SpaceComponent, { height: 26 }),
            react_1["default"].createElement(components_1.InputComponent, { value: email, onChange: function (val) { return setEmail(val); }, affix: react_1["default"].createElement(iconsax_react_native_1.Sms, { size: 22, color: appColors_1.appColors.gray }), allowClear: true, placeholder: 'abc@gmail.com' }),
            react_1["default"].createElement(components_1.SectionComponent, null,
                react_1["default"].createElement(components_1.ButtonComponent, { text: 'Send', type: 'primary', icon: react_1["default"].createElement(iconsax_react_native_1.ArrowRight, { size: 22, color: appColors_1.appColors.white }), iconFlex: 'right' })))));
};
exports["default"] = ForgotPassword;
