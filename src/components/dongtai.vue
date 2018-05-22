<template>
    <div class="container">
        <!-- 顶部 -->
        <header>
            <a class="head"></a>
            <div>动态</div>
            <a class="right_words">更多</a>
        </header>

        <!-- 内容列表区域 -->
        <div class="content">
            <!-- 顶部搜索区域 -->
            <div class="search_box">
                <!-- 搜索框 -->
                <div class="search">
                    <!-- 搜索图标 -->
                    <div class="iconfont icon-fangdajing">&nbsp;搜索</div>
                </div>
            </div>

            
        </div>
        
        <!-- 好友动态、附近、兴趣部落 -->
        <div class="friends">
            <div class="friend_status"><p class="iconfont icon-kongjian"></p><p>好友动态</p></div>
            <div class="near_hear"><p class="iconfont icon-weizhi"></p><p>附近</p></div>
            <div class="interest"><p class="iconfont icon-zhangpeng"></p><p>兴趣部落</p></div>
        </div>

        <!-- 动态列表 -->
        <div class="status_li">
            <div class="iconfont icon-youxi game"><span>&nbsp;&nbsp;游戏</span></div>
            <div class="iconfont icon-jiantou4"></div>
        </div>
        <div class="status_li">
            <div class="iconfont icon-zanting sun"><span>&nbsp;&nbsp;日迹</span></div>
            <div class="iconfont icon-jiantou4"></div>
        </div>
        <div class="status_li">
            <div class="iconfont icon-liwu-copy gift"><span>&nbsp;&nbsp;鹅漫U品</span></div>
            <div class="iconfont icon-jiantou4"></div>
        </div>
        <div class="status_li">
            <div class="iconfont icon-dongman cartoon"><span>&nbsp;&nbsp;动漫</span></div>
            <div class="iconfont icon-jiantou4"></div>
        </div>
        <div class="status_li status_special">
            <div class="iconfont icon-sport sport"><span>&nbsp;&nbsp;运动</span></div>
            <div class="iconfont icon-jiantou4"></div>
        </div>

            <!-- 底部 -->
        <footer>
            <ul>
                <router-link to="/" tag="li"><a><p class="iconfont icon-icon_msg"></p><p>消息</p></a></router-link>
                <router-link to="/lianxiren" tag="li"><a><p class="iconfont icon-lianxiren"></p><p>联系人</p></a></router-link>
                <router-link to="/kandian" tag="li"><a><p class="iconfont icon-yanjing"></p><p>看点</p></a></router-link>
                <router-link to="/dongtai" tag="li"><a class="choose"><p class="iconfont icon-xingxingkong"></p><p>动态</p></a></router-link>
            </ul>
        </footer>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
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

  }
    // 空间动态、附近
  .friends {
        height: 5.07rem;
        width: 100%;
        background: #fff;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0.93rem 1.73rem;
        text-align: center;
        margin-bottom: 1.07rem;
        // 好友动态
        .friend_status {
            p:first-child {
                font-size: 1.87rem;
                color: #ffd051;
                margin-bottom: 0.53rem;
            }
            p:last-child {
                font-size: 0.67rem;
                font-weight: 700;
                color: #000;
            }
            
        }
        // 附近
        .near_hear {
            p:first-child {
                font-size: 1.87rem;
                color: #f25d5d;
                margin-bottom: 0.53rem;
            }
            p:last-child {
                font-size: 0.67rem;
                font-weight: 700;
                color: #000;
            }

        }
        // 兴趣部落
        .interest {
            p:first-child {
                font-size: 1.87rem;
                color: #ffd053;
                margin-bottom: 0.53rem;
            }
            p:last-child {
                font-size: 0.67rem;
                font-weight: 700;
                color: #000;
            }

        }
    }

    // 列表
    .status_li {
        width: 100%;
        background: #fff;
        height: 2.53rem;
        box-sizing: border-box;
        padding: 0.67rem 0.53rem 0.67rem 1.07rem;
        display: flex;
        justify-content: space-between;
        align-items: cneter;
        border-bottom: 0.01rem solid #e9ebeb;
        &.status_special {
            margin-top: 1.15rem;
            border-bottom: 0.01rem solid #e9ebeb;
            border-top: 0.01rem solid #e9ebeb;
        }
        span {
            color: #000;
        }
        .game {
            color: #12b7f5;
        }
        .sun {
            color: #fea356;
        }
        .gift {
            color: #ffc037;
        }
        .cartoon {
            color: #5670f5;
        }
        .sport {
            color: #00b4f7;
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
