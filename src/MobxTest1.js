import React,{Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import {
    addNavigationHelpers,
    StackNavigator,
    SwitchNavigator
} from 'react-navigation';
import { observable, action } from 'mobx';
import { Provider, observer } from 'mobx-react';

import MainPage from './bytter/pages/MainPage';
import LoginPage from './bytter/pages/LoginPage';

/**
 * 启动页面
 */
class LaunchPage extends Component {

    /**
     * 跳转到主页
     */
    _toMainPage = () => {
        this.props.navigation.navigate("MainPage");
    }

    /**
     * 跳转到登录页
     */
    _toLoginPage = () => {
        this.props.navigation.navigate("LoginPage");
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Launch Page</Text>
                <Text>如果用户已经登录则跳转到主页，否则跳转到登录页</Text>
                <Button title="跳转到主页" onPress={() => {
                    this._toMainPage();
                }}></Button>
                <Button title="跳转到登录页" onPress={() => {
                    this._toLoginPage();
                }}></Button>
            </View>
        );
    }

}


const AppNavigator = SwitchNavigator(
    {
        LaunchPage: LaunchPage,
        MainPage: MainPage,
        LoginPage: LoginPage,
    },
    {
        initialRouteName: "LaunchPage"
    }
);

@observer
export default class AppNavigation extends Component {

    @observable.ref navigationState = {
        index: 0,
        routes: [
            { key: 'LaunchPage', routeName: 'LaunchPage' },
            { key: 'MainPage', routeName: 'MainPage' },
            { key: 'LoginPage', routeName: 'LoginPage' }
        ],
    }

    @action.bound dispatchNavigation = (action, stackNavState = true) => {
        const previousNavState = stackNavState ? this.navigationState : null
        this.navigationState = this.AppNavigator.router.getStateForAction(action, previousNavState)
        return this.navigationState
    }

    render() {
        return (
            <Provider
                dispatchNavigation={this.dispatchNavigation}
                navigationState={this.navigationState}
            >
                {/* <AppNavigator navigation={{
                    dispatch:this.dispatchNavigation,
                    state:this.navigationState
                }}/> */}
                <AppNavigator />
            </Provider>
        );
    }
}




