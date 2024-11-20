"use strict";
exports.__esModule = true;
exports.globalStyles = void 0;
var react_native_1 = require("react-native");
var appColors_1 = require("../constants/appColors");
var fontFamilies_1 = require("../constants/fontFamilies");
exports.globalStyles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors_1.appColors.white
    },
    text: {
        fontFamily: fontFamilies_1.fontFamilies.regular,
        fontSize: 14,
        color: appColors_1.appColors.text
    },
    button: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors_1.appColors.white,
        paddingHorizontal: 16,
        paddingVertical: 16,
        minHeight: 56,
        flexDirection: 'row'
    },
    shadow: {
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6
    },
    section: {
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});
