import React,{Component} from 'react';
import { 
    View,
    Text,
    Button
 } from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';

import LoginPage from './LoginPage';
import MainPage from './MainPage';


/**
 * 启动页面
 */
class LaunchPage extends Component{

    /**
     * 跳转到主页
     */
    _toMainPage = ()=>{
        this.props.navigation.navigate("MainPage");
    }

    /**
     * 跳转到登录页
     */
    _toLoginPage = ()=>{
        this.props.navigation.navigate("LoginPage");
    }

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Launch Page</Text>
                <Text>如果用户已经登录则跳转到主页，否则跳转到登录页</Text>
                <Button title="跳转到主页" onPress={()=>{
                    this._toMainPage();
                }}></Button>
                <Button title="跳转到登录页" onPress={()=>{
                    this._toLoginPage();
                }}></Button>
            </View>
        );
    }

}


const LaunchSwitchNavigator = createSwitchNavigator(
    {
        LaunchPage:LaunchPage,
        MainPage:MainPage,
        LoginPage:LoginPage,
    },
    {
        initialRouteName:"LaunchPage"
    }
);

export default class Launch extends Component{
    render(){
        return (
            <LaunchSwitchNavigator></LaunchSwitchNavigator>
        );
    }
}



