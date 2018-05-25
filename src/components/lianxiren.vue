<template>
    <div class="container">
        <!-- 顶部 -->
        <header>
            <a class="head"></a>
            <div>联系人</div>
            <a class="right_words">添加</a>
        </header>

        <!-- 内容列表区域 -->
        <div class="content">
            <!-- 顶部搜索区域 -->
            <div class="search_box">
                <!-- 搜索框 -->
                <div class="search">
                    <!-- 搜索图标 -->
                    <div class="iconfont icon-sousuo">&nbsp;搜索</div>
                </div>
            </div>

            <!-- 顶部两行 -->
            <div class="item_top_first">
              <div>新朋友</div>
              <div class="iconfont icon-jiantou4"></div>
            </div>
            <div class="item_top_last">
              <div>创建群聊</div>
              <div class="iconfont icon-jiantou4"></div>
            </div>
           
            <!-- 好友列表头部 -->
            
           
            <!-- 好友列表头部 -->
            <ul class="friend_top">
              <li class="active">好友</li>
              <li>群聊</li>
              <li>设备</li>
              <li>通讯录</li>
              <li>公众号</li>
            </ul>
            <!-- 分组 -->
            <div class="list_item">
              <!-- 第一个分组 -->
              <div class="list_name" @click="flag=!flag">
                <div class="icon-jiantou-copy-copy iconfont" v-if="flag"><span>我的好友</span></div>
                <div class="icon-jiantou4 iconfont" v-else><span>我的好友</span></div>
                <div class="list_r">4/4</div>
              </div>
              <!-- 第一个分组内的好友 -->
              <ul class="list" v-show="flag">
                <router-link tag="li" to="/chating/1">
                  <div class="lt pic1"></div>
                  <div class="rt">
                    <p class="name">寒心</p>
                    <p class="status">[WIFI在线] 逆天寒心了解一下？</p>
                  </div>
                </router-link>
                <router-link tag="li" to="/chating/2">
                  <div class="lt pic2"></div>
                  <div class="rt">
                    <p class="name">恨雪</p>
                    <p class="status">[移动4g] 无妄参合，想试试吗？</p>
                  </div>
                </router-link>
                <router-link tag="li" to="/chating/3">
                  <div class="lt pic3"></div>
                  <div class="rt">
                    <p class="name">神鬼</p>
                    <p class="status">[WIFI在线] 呵呵~</p>
                  </div>
                </router-link>
                <router-link tag="li" to="/chating/4">
                  <div class="lt pic4"></div>
                  <div class="rt">
                    <p class="name">莫敌</p>
                    <p class="status">[3g] 男人都是大猪蹄子</p>
                  </div>
                </router-link>
              </ul>
            </div>
        </div>

            <!-- 底部 -->
        <footer>
            <ul>
                <router-link to="/" tag="li"><a><p class="iconfont icon-icon_msg"></p><p>消息</p></a></router-link>
                <router-link to="/lianxiren" tag="li"><a class="choose"><p class="iconfont icon-lianxiren"></p><p>联系人</p></a></router-link>
                <router-link to="/kandian" tag="li"><a><p class="iconfont icon-yanjing"></p><p>看点</p></a></router-link>
                <router-link to="/dongtai" tag="li"><a><p class="iconfont icon-xingxingkong"></p><p>动态</p></a></router-link>
            </ul>
        </footer>
    </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    };
  }
};
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
      font-size: 1.07rem;
      color: #fff;
    }
  }

  // 内容区域
  div.content {
    width: 100%;
    box-sizing: border-box;
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

    //顶部两行
    .item_top_first,
    .item_top_last {
      width: 100%;
      height: 2.53rem;
      font-size: 0.96rem;
      padding: 0 0.91rem;
      background: #fff;
      color: #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-top: 0.03rem solid #e1e2e2;
    }
    .item_top_last {
      border-bottom: 0.03rem solid #e1e2e2;
      margin-bottom: 0.53rem;
    }

    //好友列表头部
    .friend_top {
      width: 100%;
      height: 2.53rem;
      display: flex;
      box-sizing: border-box;
      background: #fff;
      padding: 0 0.8rem 0 0.93rem;
      justify-content: space-between;
      border-top: 0.03rem solid #e1e2e2;
      border-bottom: 0.03rem solid #e1e2e2;
      li {
        height: 100%;
        box-sizing: border-box;
        line-height: 2.53rem;
        &.active {
          border-bottom: 0.21rem solid #12b7f5;
          color: #12b7f5;
        }
      }
    }

    //好友分组项
    .list_item {
      width: 100%;
      box-sizing: border-box;
      background: #fff;
      line-height: 2.4rem;
      // 分组名字
      .list_name {
        display: flex;
        padding: 0 0.67rem;
        height: 2.4rem;
        justify-content: space-between;
        color: #8a8a8a;
        box-sizing: border-box;
        .iconfont {
          span {
            color: #000;
            padding-left: 0.8rem;
            font-size: 0.88rem;
            font-weight: 700;
          }
        }
        .list_l {
          span {
            color: #000;
            padding-left: 0.8rem;
            font-size: 0.88rem;
            font-weight: 700;
          }
        }
        .list_r {
          font-size: 0.53rem;
        }
      }
      //展开列表展示
      .list {
        //好友
        li {
          width: 100%;
          height: 3.47rem;
          box-sizing: border-box;
          background: #fff;
          border-bottom: 0.03rem solid #edeeee;
          padding-left: 0.67rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 0.01rem solid #ccc;
          //好友左侧头像
          .lt {
            width: 2.27rem;
            height: 2.27rem;
            border-radius: 50%;
            margin-right: 0.67rem;
          }
          //好友姓名及签名
          .rt {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            .name {
              font-size: 0.93rem;
              color: #000;
              font-weight: 700;
              text-align: left;
              height: 1.73rem;
              line-height: 1.73rem;
            }
            .status {
              line-height: 1.73rem;
              height: 1.73rem;
              text-align: left;
              font-size: 0.8rem;
              color: #757575;
            }
          }
        }
      }
    }
  }

  //底部
  footer {
    height: 3.06rem;
    border-top: 0.03rem solid #e2e6e8;
    background: #f0f2f8;
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
          color: #7c8091;
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
