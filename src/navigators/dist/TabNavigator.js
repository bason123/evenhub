"use strict";
exports.__esModule = true;
var react_1 = require("react");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var screens_1 = require("../screens");
var TabNavigator = function () {
    var Tab = bottom_tabs_1.createBottomTabNavigator();
    return (react_1["default"].createElement(Tab.Navigator, { screenOptions: {
            headerShown: false
        } },
        react_1["default"].createElement(Tab.Screen, { name: 'HomeScreen', component: screens_1.HomeScreen })));
};
exports["default"] = TabNavigator;
