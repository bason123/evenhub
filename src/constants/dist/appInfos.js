"use strict";
exports.__esModule = true;
exports.appInfo = void 0;
var react_native_1 = require("react-native");
exports.appInfo = {
    sizes: {
        WIDTH: react_native_1.Dimensions.get('window').width,
        HEIGHT: react_native_1.Dimensions.get('window').height
    },
    BASE_URL: 'http://192.168.1.16:3001'
};
