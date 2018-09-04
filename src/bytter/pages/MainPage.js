import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {
    createStackNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SettingsPage from './My/SettingsPage';

import AppTheme from './../theme/theme';


const SwitchNavigator = createStackNavigator(
    {
        MainPage: {
            screen: MainTabNavigator,
            navigationOptions: {
                header: null,    //设置Tab的页面都不显示页眉
            }
        },
        SettingsPage: {
            screen: SettingsPage,
            SettingsPage: {
                screen: SettingsPage,
                navigationOptions: {    //这里的navigationOptions设置无效
                    headerTitle: "设置",
                }
            },
        },
    },
    {
        initialRouteName: "MainPage",
        headerLayoutPreset: 'center',    //页眉居中显示
        headerMode: 'float',
        headerTransitionPreset: 'fade-in-place', //指定页眉如何从一个屏幕过度到另一个屏幕
        navigationOptions: {
            headerStyle: {
                backgroundColor: AppTheme.primaryColor,
            },
            headerTitleStyle: {
                fontSize:18,
                color:AppTheme.defaultColor,
            },
            headerBackTitleStyle:{
                backgroundColor:AppTheme.defaultColor,
            },
            gesturesEnabled: true,   //是否允许使用手势来关闭页面，在 iOS 上默认为true，在 Android 上默认为false。
        }
    }
);

export default class MainPage extends Component {
    render() {
        return (
            <SwitchNavigator></SwitchNavigator>
        );
    }
}



