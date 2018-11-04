import React from 'react';
// 获取store实例
import rootStore from './mobx/store/RootStore';
// 全局注册并注入mobx
import { Provider } from 'mobx-react/native';

import TestMobxPage from './pages/TestMobxPage';


export default class TestMobApp extends React.Component {
    render() {
        return (
            <Provider {...rootStore}>
                <TestMobxPage></TestMobxPage>
            </Provider>
        )
    }
}