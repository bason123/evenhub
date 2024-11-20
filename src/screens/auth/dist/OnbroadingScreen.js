"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_swiper_1 = require("react-native-swiper");
var appColors_1 = require("../../constants/appColors");
var appInfos_1 = require("../../constants/appInfos");
var fontFamilies_1 = require("../../constants/fontFamilies");
var globalStyles_1 = require("../../styles/globalStyles");
var components_1 = require("../../components");
var OnbroadingScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(0), index = _b[0], setIndex = _b[1];
    return (react_1["default"].createElement(react_native_1.View, { style: [globalStyles_1.globalStyles.container] },
        react_1["default"].createElement(react_native_swiper_1["default"], { loop: false, onIndexChanged: function (number) { return setIndex(number); }, index: index, activeDotColor: appColors_1.appColors.white },
            react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/images/onboarding1.png'), style: {
                    flex: 1,
                    width: appInfos_1.appInfo.sizes.WIDTH,
                    height: appInfos_1.appInfo.sizes.HEIGHT,
                    resizeMode: 'cover'
                } }),
            react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/images/onboarding2.png'), style: {
                    flex: 1,
                    width: appInfos_1.appInfo.sizes.WIDTH,
                    height: appInfos_1.appInfo.sizes.HEIGHT,
                    resizeMode: 'cover'
                } }),
            react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/images/onboarding3.png'), style: {
                    flex: 1,
                    width: appInfos_1.appInfo.sizes.WIDTH,
                    height: appInfos_1.appInfo.sizes.HEIGHT,
                    resizeMode: 'cover'
                } })),
        react_1["default"].createElement(react_native_1.View, { style: {
                paddingHorizontal: 16,
                paddingVertical: 20,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            } },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('LoginScreen'); } },
                react_1["default"].createElement(components_1.TextComponent, { text: 'Skip', color: appColors_1.appColors.gray2, font: fontFamilies_1.fontFamilies.medium })),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                    return index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen');
                } },
                react_1["default"].createElement(components_1.TextComponent, { text: 'Next', color: appColors_1.appColors.white, font: fontFamilies_1.fontFamilies.medium })))));
};
exports["default"] = OnbroadingScreen;
var styles = react_native_1.StyleSheet.create({
    text: {
        color: appColors_1.appColors.white,
        fontSize: 16,
        fontWeight: '500'
    }
});
