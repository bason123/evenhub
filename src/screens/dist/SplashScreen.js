"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var appColors_1 = require("../constants/appColors");
var appInfos_1 = require("../constants/appInfos");
var components_1 = require("../components");
var SplashScreen = function () {
    return (react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/images/splash-image.png'), style: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }, imageStyle: { flex: 1 } },
        react_1["default"].createElement(react_native_1.Image, { source: require('../assets/images/logo.png'), style: {
                width: appInfos_1.appInfo.sizes.WIDTH * 0.7,
                resizeMode: 'contain'
            } }),
        react_1["default"].createElement(components_1.SpaceComponent, null),
        react_1["default"].createElement(react_native_1.ActivityIndicator, { color: appColors_1.appColors.gray, size: 22 })));
};
exports["default"] = SplashScreen;
