import React,{Component} from 'react';
import { 
    View,
    Text
 } from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';
/**
 * 报表页面
 */
export default class ChartsPage extends Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Charts Page</Text>
            </View>
        );
    }

}