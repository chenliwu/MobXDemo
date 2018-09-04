import React,{Component} from 'react';
import { 
    View,
    Text,
    Button
 } from 'react-native';
import {
    createStackNavigator
} from 'react-navigation';

/**
 * 个人中心页面
 * 
 * 使用StackNavigator
 * 
 * 为你的应用程序提供一种在每个新屏幕放置在堆栈顶部的屏幕之间转换的方法。
 * 
 */
export default class MyPage extends Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>My Page</Text>
                <Button title="进入设置页面" onPress={()=>{
                    this.props.navigation.navigate("SettingsPage");
                }}></Button>
            </View>
        );
    }

}

// const StackNavigator = createStackNavigator(
//     {
//         MyPage:{
//             screen:MyPage,
//             navigationOptions:{
//                 header:null,    //设置为 null 隐藏页眉。
//                 headerTitle:"我的",
//             }

//         },
//     },
//     {
//         initialRouteName:"MyPage",
//         //headerMode:'none',  //不呈现页眉
//         headerLayoutPreset:'center',
//     }
// );

// export default StackNavigator;

// export default class MyPageStackNavigator extends Component{
//     render(){
//         return (
//             <StackNavigator></StackNavigator>
//         );
//     }
// }


