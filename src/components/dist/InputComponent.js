"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var appColors_1 = require("../constants/appColors");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var FontAwesome_1 = require("react-native-vector-icons/FontAwesome");
var globalStyles_1 = require("../styles/globalStyles");
var InputComponent = function (props) {
    var value = props.value, onChange = props.onChange, affix = props.affix, placeholder = props.placeholder, suffix = props.suffix, isPassword = props.isPassword, allowClear = props.allowClear, type = props.type;
    var _a = react_1.useState(isPassword !== null && isPassword !== void 0 ? isPassword : false), isShowPass = _a[0], setIsShowPass = _a[1];
    return (react_1["default"].createElement(react_native_1.View, { style: [styles.inputContainer] },
        affix && affix,
        react_1["default"].createElement(react_native_1.TextInput, { style: [styles.input, globalStyles_1.globalStyles.text], value: value, placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : '', onChangeText: onChange, secureTextEntry: isShowPass, placeholderTextColor: '#747688', keyboardType: type !== null && type !== void 0 ? type : 'default' }),
        suffix && suffix,
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: isPassword ? function () { return setIsShowPass(!isShowPass); } : function () { return onChange(''); } }, isPassword ? (react_1["default"].createElement(FontAwesome_1["default"], { name: isShowPass ? 'eye-slash' : 'eye', size: 22, color: appColors_1.appColors.gray })) : (value.length > 0 && allowClear && (react_1["default"].createElement(AntDesign_1["default"], { size: 22, name: "close", color: appColors_1.appColors.gray }))))));
};
exports["default"] = InputComponent;
var styles = react_native_1.StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: appColors_1.appColors.gray3,
        width: '100%',
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: appColors_1.appColors.white,
        marginBottom: 19
    },
    input: {
        padding: 0,
        margin: 0,
        flex: 1,
        paddingHorizontal: 14,
        color: appColors_1.appColors.text
    }
});
