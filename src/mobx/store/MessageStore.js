import {
    observable,
    action,
    useStrict
} from 'mobx';
/**
 * 2018-11-04
 * chenlw
 * work:
 * （1）@observable：使用此标签监控要检测的数据。
 * （2）@action:使用此标签监控数据改变的自定义方法。
 */
/**
 * 启动严格模式：
 */
useStrict
class MessageStore {

    /**
     * 消息数量
     */
    @observable
    count = 0;

    /**
     * 消息列表
     */
    @observable
    messageList = [];

    /**
    * 设置数据
    */
    @action
    setDataList = (list) => {
        this.messageList = list;
    };

    /**
     * 添加数据
     */
    @action
    addData = (item) => {
        this.messageList.push(item);
    };

    /**
     * 移除数据
     */
    @action
    remove = (item) => {
        const list = this.messageList.filter(i => i.id !== item.id);
        this.setDataList(list);
    };

    /**
     * 获取消息数量
     */
    @action
    getMessageCount = () => {
        return this.count;
    };

    /**
     * 设置消息数量
     */
    @action
    setMessageCount = (count) => {
        this.count = count;
    };

    /**
     * 减少消息数量
     */
    @action
    reduceMessageCount = () => {
        this.count--;
    };
}

export default new MessageStore();