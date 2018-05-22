<template>
    <div class="container">
        <!-- 顶部 -->
        <header>
            <a class="head"></a>
            <div>看点</div>
            <a class="iconfont icon-icon-p_lianxirenguanli right_words"></a>
        </header>

        <!-- 内容列表区域 -->
        <div class="content">
            <!-- 顶部搜索区域 -->
            <div class="search_box">
                <!-- 搜索框 -->
                <div class="search">
                    <!-- 搜索图标 -->
                    <div class="iconfont icon-sousuo">&nbsp;漫威 跑男</div>
                </div>
            </div>


        </div>

            <!-- 底部 -->
        <footer>
            <ul>
                <router-link to="/" tag="li"><a><p class="iconfont icon-icon_msg"></p><p>消息</p></a></router-link>
                <router-link to="/lianxiren" tag="li"><a><p class="iconfont icon-lianxiren"></p><p>联系人</p></a></router-link>
                <router-link to="/kandian" tag="li"><a class="choose"><p class="iconfont icon-yanjing"></p><p>看点</p></a></router-link>
                <router-link to="/dongtai" tag="li"><a><p class="iconfont icon-xingxingkong"></p><p>动态</p></a></router-link>
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
      font-size: 1.47rem;
      color: #fff;
    }
  }

  // 内容区域
  div.content {
    width: 100%;
    box-sizing: border-box;
    background: #f9f9fb;
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
        border-radius: 0.8rem;
        //搜索图标
        div {
          width: 100%;
          height: 100%;
          text-align: left;
          line-height: 2rem;
          font-size: 0.75rem;
          padding-left: 0.8rem;
          color: #a1a1a1;
          box-sizing: border-box;
        }
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
    overflow: hidden;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      box-sizing: border-box;
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
