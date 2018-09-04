import React,{Component} from 'react';
import { 
    View,
    Text
 } from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';
/**
 * 审批页面
 */
export default class ApprovePage extends Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Approve Page</Text>
            </View>
        );
    }

}