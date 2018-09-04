import React,{Component} from 'react';
import { 
    View,
    Text
 } from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';
/**
 * 消息页面
 */
export default class NotificationPage extends Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Notification Page</Text>
            </View>
        );
    }

}