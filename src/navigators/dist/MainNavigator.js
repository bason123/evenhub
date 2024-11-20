"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_stack_1 = require("@react-navigation/native-stack");
var TabNavigator_1 = require("./TabNavigator");
var MainNavigator = function () {
    var Stack = native_stack_1.createNativeStackNavigator();
    return (react_1["default"].createElement(Stack.Navigator, { screenOptions: {
            headerShown: false
        } },
        react_1["default"].createElement(Stack.Screen, { name: 'Main', component: TabNavigator_1["default"] })));
};
exports["default"] = MainNavigator;
