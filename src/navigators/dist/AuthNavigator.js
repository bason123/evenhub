"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_stack_1 = require("@react-navigation/native-stack");
var screens_1 = require("../screens");
var OnbroadingScreen_1 = require("../screens/auth/OnbroadingScreen");
var AuthNavigator = function () {
    var Stack = native_stack_1.createNativeStackNavigator();
    return (react_1["default"].createElement(Stack.Navigator, { screenOptions: {
            headerShown: false
        } },
        react_1["default"].createElement(Stack.Screen, { name: 'OnbroadingScreen', component: OnbroadingScreen_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: 'LoginScreen', component: screens_1.LoginScreen }),
        react_1["default"].createElement(Stack.Screen, { name: 'SignUpScreen', component: screens_1.SignUpScreen }),
        react_1["default"].createElement(Stack.Screen, { name: 'ForgotPassword', component: screens_1.ForgotPassword }),
        react_1["default"].createElement(Stack.Screen, { name: 'Verication', component: screens_1.Verication })));
};
exports["default"] = AuthNavigator;
