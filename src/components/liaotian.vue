<template>
    <div class="container">
        <!-- 顶部 -->
        <header>
            <a class="icon-jiantou iconfont" @click="prePage"></a>
            <div class="person_name" v-if="this.$route.params.id == 1">寒心</div>
            <div class="person_name" v-if="this.$route.params.id == 2">恨雪</div>
            <div class="person_name" v-if="this.$route.params.id == 3">神鬼</div>
            <div class="person_name" v-if="this.$route.params.id == 4">莫敌</div>
            <a class="iconfont icon-icon-p_lianxirenguanli right_words" @click="shezhi($route.params.id)"></a>
        </header>

        <!-- 内容列表区域 -->
        <!-- 寒心的聊天盒子 -->
        <div class="content" v-if="this.$route.params.id==1">
            <!-- 聊天人 -->
            <div class="person_chat" v-if="!item._id" v-for="(item,i) in this.$store.state.talkList" :key="i" v-scroll>
                <!-- 头像 -->
                <router-link to="/info/1" tag="div" class="person_head pic1"></router-link>
                <!-- 聊天盒子 -->
                <div class="person_chatbox">
                    {{ item.text }}
                </div>
            </div>
            <!-- 我 -->
            <div class="my_chat" v-else v-scroll>
                <!-- 聊天盒子 -->
                <div class="person_chatbox">
                    {{ item.text }}
                </div>
                <!-- 头像 -->
                <router-link tag="div" to="/info/0" class="person_head"></router-link>
            </div>
        </div>

        <!-- 恨雪的聊天盒子 -->
        <div class="content" v-if="this.$route.params.id==2">
            <!-- 聊天人 -->
            <div class="person_chat" v-if="!item._id" v-for="(item,i) in this.$store.state.talkList2" :key="i" v-scroll>
                <!-- 头像 -->
                <router-link to="/info/2" tag="div" class="person_head pic2"></router-link>
                <!-- 聊天盒子 -->
                <div class="person_chatbox">
                    {{ item.text }}
                </div>
            </div>
            <!-- 我 -->
            <div class="my_chat" v-else v-scroll>
                <!-- 聊天盒子 -->
                <div class="person_chatbox">
                    {{ item.text }}
                </div>
                <!-- 头像 -->
                <router-link tag="div" to="/info/0" class="person_head"></router-link>
            </div>
        </div>

        <!-- 神鬼的聊天盒子 -->
        <div class="content" v-if="this.$route.params.id==3">
            <!-- 聊天人 -->
            <div class="person_chat" v-if="!item._id" v-for="(item,i) in this.$store.state.talkList3" :key="i" v-scroll>
                <!-- 头像 -->
                <router-link to="/info/3" tag="div" class="person_head pic3"></router-link>
                <!-- 聊天盒子 -->
                <div class="person_chatbox">
                    {{ item.text }}
                </div>
            </div>
            <!-- 我 -->
            <div class="my_chat" v-else v-scroll>
                <!-- 聊天盒子 -->
                <div class="person_chatbox">
                    {{ item.text }}
                </div>
                <!-- 头像 -->
                <router-link tag="div" to="/info/0" class="person_head"></router-link>
            </div>
        </div>

        <!-- 莫敌的聊天盒子 -->
        <div class="content" v-if="this.$route.params.id==4">
            <!-- 聊天人 -->
            <div class="person_chat" v-if="!item._id" v-for="(item,i) in this.$store.state.talkList4" :key="i" v-scroll>
                <!-- 头像 -->
                <router-link to="/info/4" tag="div" class="person_head pic4"></router-link>
                <!-- 聊天盒子 -->
                <div class="person_chatbox">
                    {{ item.text }}
                </div>
            </div>
            <!-- 我 -->
            <div class="my_chat" v-else v-scroll>
                <!-- 聊天盒子 -->
                <div class="person_chatbox">
                    {{ item.text }}
                </div>
                <!-- 头像 -->
                <router-link tag="div" to="/info/0" class="person_head"></router-link>
            </div>
        </div>


            <!-- 底部 -->
        <footer>
            <!-- 底部上方输入框 -->
            <div class="sendMsg_box">
                <input v-model.trim="msg" type="text" name="" id="" class="chatTab" v-focus>
                <input type="button" value="发送" :class="{blue:msg}" @click="send">
            </div>
            <!-- 底部下方功能栏 -->
            <div class="tools_bar">
                <a class="icon-huatong iconfont"></a>
                <a class="icon-tukuxiangce iconfont"></a>
                <a class="icon-camera1 iconfont"></a>
                <a class="icon-shouzhi iconfont"></a>
                <a class="icon-ai-hongbao iconfont"></a>
                <a class="icon-shipin iconfont"></a>
                <a class="icon-biaoqing iconfont"></a>
                <a class="icon-icon02 iconfont"></a>
            </div>
        </footer>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        data(){
            return {
                msg:''
            }
        },
        methods: {
            // 点击返回
            prePage() {
                this.$router.go(-1);
            },
            //发送信息
            async send() {
                if (this.msg) {//如果不为空数据
                    let val = {
                        id:this.$route.params.id,
                        val:this.msg
                    }
                    this.$store.commit('sendMsg',val)
                    this.msg = ''//清空输入框
                }
            },
            shezhi(id){
                this.$router.push({name:'ltsz',params:{id:id}})
            }
        },
        directives:{
            scroll:{
                inserted(el){
                    el.scrollIntoView()
                }
            },
            focus: {
                inserted(el){
                    el.focus()
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.pic1 {
    background: url("../assets/images/han.jpg") no-repeat center center;
    background-size: cover;
}
.pic2 {
    background: url("../assets/images/hen.jpg") no-repeat center center;
    background-size: cover;
}
.pic3 {
    background: url("../assets/images/shen.jpg") no-repeat center center;
    background-size: cover;
}
.pic4 {
    background: url("../assets/images/mo.jpg") no-repeat center center;
    background-size: cover;
}
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  padding-top: 3.06rem;
  padding-bottom: 3.06rem;
  background: #f0f2f8;

  // 顶部
  header {
    height: 3.06rem;
    width: 100%;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background: -webkit-linear-gradient(left, #508cfe, #39b8fe);
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 3.06rem;
    align-items: center;
    padding: 0 0.61rem;
    box-sizing: border-box;
    font-size: 1.07rem;
    color: #fff;
    // 头像
    .person_name {
      font-size: 1.07rem;
      color: #fff;
      white-space: nowrap; //强制一行显示
      text-overflow: ellipsis;
      overflow: hidden;
      width: 9rem;
    }
    // 右边的添加
    a {
      font-size: 1.47rem;
      color: #fff;
    }
  }

  // 内容区域
  div.content {
    width: 100%;
    box-sizing: border-box;
    padding: 1.33rem 0.53rem 4.26rem;
    background: #f0f2f8;
    // 左侧聊天人
    .person_chat {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 1.2rem;
        background: #f0f2f8;
        // 头像
        .person_head {
            width: 2.13rem;
            height: 2.13rem;
            border-radius: 50%;
            margin-right: 1.67rem;
        }
        // 聊天框
        .person_chatbox {
            max-width: 12rem;
            box-sizing: border-box;
            padding: 0.93rem 0.67rem;
            background: -webkit-linear-gradient(top,#6dbcfd,#b4defd);
            border-radius: 0.63rem;
            color: #3e4f5c;
            font-size: 0.85rem;
            position: relative;
            box-shadow: -0.1rem 0.1rem 0.1rem 0.1rem #ccc;
            &::before {
                content:'';
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 1.13rem 1.13rem 0;
                border-color: transparent #6dbcfd transparent transparent;
                position: absolute;
                left: -1.0rem;
                top: 0.33rem;
            }
        }
    }
    // 右侧自己
    .my_chat {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1.2rem;
        background: #f0f2f8;
        // 头像
        .person_head {
            width: 2.13rem;
            height: 2.13rem;
            border-radius: 50%;
            background: url("../assets/images/my.jpg") no-repeat center center;
            background-size: cover;
            margin-left: 1.67rem;
        }
        // 聊天框
        .person_chatbox {
            max-width: 12rem;
            box-sizing: border-box;
            padding: 0.93rem 0.67rem;
            background: -webkit-linear-gradient(top,#6dbcfd,#b4defd);
            border-radius: 0.63rem;
            color: #3e4f5c;
            font-size: 0.85rem;
            position: relative;
            box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #ccc;
            &::before {
                content:'';
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 1.13rem 1.13rem 0 0;
                border-color: #6dbcfd transparent transparent transparent;
                position: absolute;
                right: -1.0rem;
                top: 0.33rem;
            }
        }
    }
    
  }

  //底部
  footer {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background: #f0f2f8;
    // 地部上侧输入框
    .sendMsg_box {
        padding: 0.45rem 0.45rem 0.59rem;
        display: flex;
        justify-content: space-between;
        // 文本框
        .chatTab {
            width: 100%;
            margin-right: 0.5rem;
            min-height: 2rem;
            background: #fff;
            outline: none;
            border: none;
            border-radius: 0.4rem;
            padding-left: 0.4rem;
            font-size: 0.85rem;
        }
        //按钮
        input[type=button] {
            outline: none;
            border: none;
            width:2.8rem;
            height: 2rem;
            background: #dddee2;
            color: #fff;
            border-radius: 0.4rem;
            &.blue {
                background: #27c1fd;
                color: #fff;
            }
        }
    }
    //底部下方工具栏
    .tools_bar {
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.67rem 0.53rem;
        display: flex;
        justify-content: space-between;
        a {
            font-size: 1.33rem;
        }
    }
  }
}
</style>
