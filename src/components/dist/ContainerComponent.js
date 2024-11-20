"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var globalStyles_1 = require("../styles/globalStyles");
var native_1 = require("@react-navigation/native");
var _1 = require(".");
var iconsax_react_native_1 = require("iconsax-react-native");
var appColors_1 = require("../constants/appColors");
var fontFamilies_1 = require("../constants/fontFamilies");
var ContainerComponent = function (props) {
    var children = props.children, isScroll = props.isScroll, isImageBackground = props.isImageBackground, title = props.title, back = props.back;
    var navigation = native_1.useNavigation();
    var headerComponent = function () {
        return (react_1["default"].createElement(react_native_1.View, { style: { flex: 1, paddingTop: 30 } },
            (title || back) && (react_1["default"].createElement(_1.RowComponent, { styles: {
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    minWidth: 48,
                    minHeight: 48,
                    justifyContent: 'flex-start'
                } },
                back && (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.goBack(); }, style: { marginRight: 12 } },
                    react_1["default"].createElement(iconsax_react_native_1.ArrowLeft, { size: 24, color: appColors_1.appColors.text }))),
                title ? (react_1["default"].createElement(_1.TextComponent, { text: title, size: 16, font: fontFamilies_1.fontFamilies.medium, flex: 1 })) : (react_1["default"].createElement(react_1["default"].Fragment, null)))),
            returnContainer));
    };
    var returnContainer = isScroll ? (react_1["default"].createElement(react_native_1.ScrollView, { style: { flex: 1 }, showsVerticalScrollIndicator: false }, children)) : (react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } }, children));
    return isImageBackground ? (react_1["default"].createElement(react_native_1.ImageBackground, { source: require('../assets/images/splash-image.png'), style: { flex: 1 }, imageStyle: { flex: 1 } },
        react_1["default"].createElement(react_native_1.SafeAreaView, { style: { flex: 1 } }, headerComponent()))) : (react_1["default"].createElement(react_native_1.SafeAreaView, { style: [globalStyles_1.globalStyles.container] },
        react_1["default"].createElement(react_native_1.View, null, headerComponent())));
};
exports["default"] = ContainerComponent;
