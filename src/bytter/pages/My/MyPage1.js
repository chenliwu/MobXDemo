import React,{Component} from 'react';
import { 
    View,
    Text,
    Button
 } from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';

import SettingsPage from './SettingsPage';

/**
 * 个人中心页面
 * 
 * 使用SwitchNavigator
 * 
 * SwitchNavigator 的用途是一次只显示一个页面。 默认情况下，它不处理返回操作，并在你切换时将路由重置为默认状态。
 * 
 * SwitchNavigator不像StackNavigator那样有navigationOptions的配置，因此有局限性。
 * 如果需要设置页面的页眉或配置navigationOptions，则需要使用StackNavigator。
 * 
 */
class MyPage extends Component{

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

const SwitchNavigator = createSwitchNavigator(
    {
        MyPage:{
            screen:MyPage,
            navigationOptions:{
                headerTitle:"我的"
            }

        },
        SettingsPage:{
            screen:SettingsPage,
        },
    },
    {
        initialRouteName:"MyPage",
        //headerMode:'none',  //不呈现页眉
        headerLayoutPreset:'center',
    }
);

export default SwitchNavigator;

// export default class MyPageStackNavigator extends Comment{
//     render(){
//         return (
//             <StackNavigator></StackNavigator>
//         );
//     }
// }


