import React,{Component} from 'react';
import { 
    View,
    Text,
    Button,
    TextInput
 } from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';
/**
 * 登录页面
 */
export default class LoginPage extends Component{

    constructor(props){
        super(props);
        this.setState={
            account:"",
            password:"",
        };
    }

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Login Page</Text>
                <Button title="返回启动页" onPress={()=>{
                    this.props.navigation.goBack();
                }}></Button>
                <Button title="进入主页" onPress={()=>{
                    this.props.navigation.navigate("MainPage");
                }}></Button>
            </View>
        );
    }

}