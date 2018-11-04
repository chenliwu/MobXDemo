import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import { observer, inject } from 'mobx-react/native';

/**
 * @observer：此标签用于标注当数据变化要更新页面的组件，将组件变成响应式组件。
 * @inject表示调用缓存,observer表示当缓存数据生效时，刷新当前页面。
 */

@inject("messageStore")
@observer
export default class TestMobxPage extends React.Component {
    /**
     * mobx实现存储和更新应用状态，页面同步渲染数据。
     * （1）点击设置消息数量按钮时，页面显示的消息数量会变成50。
     * （2）点击减少消息数量按钮时，页面显示的消息数量会减少1。
     */
    render() {
        //获取存储在state的messageStore
        const messageStore = this.props.messageStore;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="设置消息数量" onPress={() => {
                    //测试50
                    messageStore.setMessageCount(50);
                }}></Button>
                <Button title="减少消息数量" onPress={() => {
                    messageStore.reduceMessageCount();
                }}></Button>
                <Text>消息数量：{messageStore.count}</Text>
            </View>
        )
    }
}
