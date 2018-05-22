import Vue from 'vue'
import vuex from 'vuex'
// 引入其他属性
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// 注册vuex
Vue.use(vuex)

// 数据层
let state = {
    // 寒心的聊天数据
    talkList:[
        {
        text:'我们已经是好友了，开始聊天吧~'
        }
    ],
    //恨雪的聊天数据
    talkList2:[
        {
            text:'你是哪位？有什么事？'
        }
    ],
    // 神鬼的聊天数据
    talkList3:[
        {
            text:'加我干嘛？不说打死你！'
        }
    ],
    //莫敌的聊天数据
    talkList4:[
        {
            text:'你要请我吃饭吗？'
        }
    ],
    // 个人信息
    personal:[
        {
            name:'开发者(1712691422)',
            sub:'男 22岁 处女座',
            three:'群聊等级已达LV10',
            last:'最近发言于15分钟前',
            speed:'快速中',
            right:'TA还未开通任何特权服务',
            zone:'开发者的空间'
        },
        {
            name:'寒心(123321)',
            sub:'女 保密 狮子座',
            three:'群聊等级已达LV2',
            last:'最近发言于2分钟前',
            speed:'快速中',
            right:'超级QQ会员',
            zone:'寒心的空间'
        },
        {
            name:'恨雪(1234567)',
            sub:'女 17岁 摩羯座',
            three:'群聊等级已达LV8',
            last:'最近发言于1分钟前',
            speed:'快速中',
            right:'超级QQ会员',
            zone:'TA还未开通空间，快提醒TA吧'
        },
        {
            name:'神鬼(77889910)',
            sub:'男 16岁 牧羊座',
            three:'群聊等级已达LV6',
            last:'最近发言于5分钟前',
            speed:'慢速中',
            right:'TA还未开通任何特权服务',
            zone:'TA还未开通空间，快提醒TA吧'
        },
        {
            name:'莫敌(987654321)',
            sub:'女 18岁 天蝎座',
            three:'群聊等级已达LV7',
            last:'最近发言于5分钟前',
            speed:'快速中',
            right:'超级QQ会员',
            zone:'莫敌的空间'
        },
    ]
}

export default new vuex.Store({
    state,
    mutations,
    actions,
    getters
})