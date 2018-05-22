<template>
    <div class="container">
        <!-- 顶部 -->
        <header>
            <router-link to="/info/0" class="head"></router-link>
            <div>消息</div>
            <a class="iconfont icon-jia right_words"></a>
        </header>

        <!-- 内容列表区域 -->
        <div class="content">
            <!-- 顶部搜索区域 -->
            <div class="search_box">
                <!-- 搜索框 -->
                <router-link class="search" tag="div" to="/search">
                    <!-- 搜索图标 -->
                    <div class="iconfont icon-sousuo">&nbsp;搜索</div>
                </router-link>
            </div>

            <!-- 消息列表 -->
            <!-- 寒心的消息列表 -->
            <router-link class="person_msg" to="/chating/1" tag="div">
                <!-- 消息列表头像 -->
                <div class="person_head pic1"></div>
                <!-- 联系人姓名及最后一条消息 -->
                <div class="person_box">
                    <!-- 姓名 -->
                    <div class="name">寒心</div>
                    <!-- 最后一条消息 -->
                    <div class="last_msg">{{ this.$store.state.talkList[this.$store.state.talkList.length - 1].text }}</div>
                </div>
                <!-- 聊天时间及消息条数 -->
                <div class="time">{{ this.hour }} : {{ this.min }}</div>
                <div class="num" v-if="this.$store.state.talkList.length < 20">{{this.$store.state.talkList.length}}</div>
                <div class="num" v-else>20+</div>
            </router-link>
            <!-- 恨雪的聊天 -->
            <router-link class="person_msg" to="/chating/2" tag="div">
                <!-- 消息列表头像 -->
                <div class="person_head pic2"></div>
                <!-- 联系人姓名及最后一条消息 -->
                <div class="person_box">
                    <!-- 姓名 -->
                    <div class="name">恨雪</div>
                    <!-- 最后一条消息 -->
                    <div class="last_msg">{{ this.$store.state.talkList2[this.$store.state.talkList2.length - 1].text }}</div>
                </div>
                <!-- 聊天时间及消息条数 -->
                <div class="time">{{ this.hour }} : {{ this.min }}</div>
                <div class="num" v-if="this.$store.state.talkList2.length < 20">{{this.$store.state.talkList2.length}}</div>
                <div class="num" v-else>20+</div>
            </router-link>
            <!-- 神鬼的聊天 -->
            <router-link class="person_msg" to="/chating/3" tag="div">
                <!-- 消息列表头像 -->
                <div class="person_head pic3"></div>
                <!-- 联系人姓名及最后一条消息 -->
                <div class="person_box">
                    <!-- 姓名 -->
                    <div class="name">神鬼</div>
                    <!-- 最后一条消息 -->
                    <div class="last_msg">{{ this.$store.state.talkList3[this.$store.state.talkList3.length - 1].text }}</div>
                </div>
                <!-- 聊天时间及消息条数 -->
                <div class="time">{{ this.hour }} : {{ this.min }}</div>
                <div class="num" v-if="this.$store.state.talkList3.length < 20">{{this.$store.state.talkList3.length}}</div>
                <div class="num" v-else>20+</div>
            </router-link>
            <!-- 莫敌的聊天 -->
            <router-link class="person_msg" to="/chating/4" tag="div">
                <!-- 消息列表头像 -->
                <div class="person_head pic4"></div>
                <!-- 联系人姓名及最后一条消息 -->
                <div class="person_box">
                    <!-- 姓名 -->
                    <div class="name">莫敌</div>
                    <!-- 最后一条消息 -->
                    <div class="last_msg">{{ this.$store.state.talkList4[this.$store.state.talkList4.length - 1].text }}</div>
                </div>
                <!-- 聊天时间及消息条数 -->
                <div class="time">{{ this.hour }} : {{ this.min }}</div>
                <div class="num" v-if="this.$store.state.talkList4.length < 20">{{this.$store.state.talkList4.length}}</div>
                <div class="num" v-else>20+</div>
            </router-link>
        </div>

            <!-- 底部 -->
        <footer>
            <ul>
                <router-link to="/" tag="li"><a class="choose"><p class="iconfont icon-icon_msg"></p><p>消息</p></a></router-link>
                <router-link to="/lianxiren" tag="li"><a><p class="iconfont icon-lianxiren"></p><p>联系人</p></a></router-link>
                <router-link to="/kandian" tag="li"><a><p class="iconfont icon-yanjing"></p><p>看点</p></a></router-link>
                <router-link to="/dongtai" tag="li"><a><p class="iconfont icon-xingxingkong"></p><p>动态</p></a></router-link>
            </ul>
        </footer>
    </div>
</template>
<script>
        export default {
          data(){
            return {
              hour:'',
              min:''
            }
          },
          methods: {
            toChatTable() {
              this.$router.push('chating')
            }
          },
          created(){
            let seconds = new Date()
            this.hour = seconds.getHours().toString().padStart(2,'0')//字符串填充
            this.min = seconds.getMinutes().toString().padStart(2,'0')
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
    .head {
      width: 2.13rem;
      height: 2.13rem;
      border-radius: 50%;
      background:url("../assets/images/my.jpg") no-repeat center center;
      background-size: cover;
    }
    // 右边的添加
    .right_words {
      font-size: 1.47rem;
      color: #fff;
    }
  }

  // 内容区域
  div.content {
    width: 100%;
    box-sizing: border-box;
    background: #f9f9fb;
    box-sizing: border-box;
    // 内容顶部搜索区域
    .search_box {
      height: 2.4rem;
      width: 100%;
      background: #fff;
      padding: 0.2rem 0.67rem;
      box-sizing: border-box;
      //搜索框
      .search {
        width: 100%;
        height: 100%;
        background: #f3f3f3;
        border-radius: 0.13rem;
        //搜索图标
        div {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 2rem;
          font-size: 0.75rem;
          color: #a1a1a1;
        }
      }
    }
    //渲染消息框
    .person_msg {
      background: #edfaff;
      border-bottom: 0.03rem solid #e0e1e2;
      width: 100%;
      height: 3.6rem;
      box-sizing: border-box;
      padding: 0.45rem 0.67rem;
      position: relative;
      //   左侧头像
      .person_head {
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
        float: left;
        margin-right: 0.67rem;
      }
      // 中间消息盒子
      .person_box {
        float: left;
        display: flex;
        width: 17.27rem;
        flex-direction: column; //垂直排列
        justify-content: space-between;
        height: 100%;
        // 名字
        .name {
          color: #000;
          font-size: 0.91rem;
          font-weight: 700;
        }
        //最后一条消息
        .last_msg {
          font-size: 0.8rem;
          color: #777676;
          white-space: nowrap; //强制一行显示
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      //时间及未读消息气泡
      .time,
      .num {
        position: absolute;
        right: 0.67rem;
        font-size: 0.59rem;
      }
      .time {
        top: 1.07rem;
        font-size: 0.48rem;
        color: #969696;
      }
      .num {
        width: 1.6rem;
        height: 0.8rem;
        background: skyblue;
        color: #fff;
        border-radius: 0.4rem;
        text-align: center;
        line-height: 0.8rem;
        top: 2.3rem;
      }
    }
  }

  //底部
  footer {
    height: 3.06rem;
    border-top: 0.03rem solid #e2e6e8;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 0.35rem 1.81rem;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      li {
          a {
              color:#7c8091;
            p {
                text-align: center;
                font-size: 0.53rem;
                &.iconfont {
                  font-size: 1.33rem;
                }
            }
            &.choose {
                color: #47bafe;
            }
          }
      }
    }
  }
}
</style>
