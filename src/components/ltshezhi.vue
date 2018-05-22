<template>
    <div class="container">
        <!-- 顶部 -->
        <header>
            <a class="icon-jiantou iconfont"  @click="prePage">返回</a>
            <div>聊天设置</div>
        </header>

        <!-- 内容列表区域 -->
        <div class="content">
            <!-- 顶部个人信息 -->
            <div class="personal_info">
            <div class="head pic1" v-if="this.$route.params.id == 1"></div>
            <div class="head pic2" v-if="this.$route.params.id == 2"></div>
            <div class="head pic3" v-if="this.$route.params.id == 3"></div>
            <div class="head pic4" v-if="this.$route.params.id == 4"></div>
                <div class="person_name" v-if="this.$route.params.id == 1">寒心</div>
                <div class="person_name" v-if="this.$route.params.id == 2">恨雪</div>
                <div class="person_name" v-if="this.$route.params.id == 3">神鬼</div>
                <div class="person_name" v-if="this.$route.params.id == 4">莫敌</div>
                <span class="iconfont icon-jiantou4"></span>
            </div>
            <!-- 发起群聊 -->
            <div class="talk_more">
                <span class="iconfont icon-icon02"></span>
                <span>发起群聊</span>
            </div>

            <!-- 聊天相关 -->
            <div class="talk_about">
                <div class="left">聊天记录</div>
                <div class="iconfont icon-jiantou4"></div>
            </div>
            <div class="talk_about">
                <div class="left">聊天文件</div>
                <div class="iconfont icon-jiantou4"></div>
            </div>
            <div class="talk_about">
                <div class="left">聊天背景</div>
                <div class="iconfont icon-jiantou4"></div>
            </div>
            <div class="talk_about">
                <div class="left">特别关心</div>
                <div class="iconfont icon-jiantou4"></div>
            </div>
            <div class="talk_about">
                <div class="left">屏蔽此人</div>
                <div class="iconfont icon-jiantou4"></div>
            </div>

            <!-- 添加快捷方式 -->
            <div class="other">添加桌面快捷方式</div>

            <!-- 删除好友 -->
            <div class="delete">
                删除好友
            </div>

            <!-- 骚扰 -->
            <div class="p">被骚扰了？举报该用户</div>
        </div>
    </div>
</template>
<script>
    export default {
        methods:{
            // 点击返回
            prePage() {
                this.$router.go(-1);
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
    justify-content: space-between;
    text-align: center;
    line-height: 3.06rem;
    padding: 0 0.61rem;
    box-sizing: border-box;
    font-size: 1.07rem;
    color: #fff;
    a {
        float: left;
    }
    div {
        text-align: center;
    }
  }

  // 内容区域
  div.content {
    width: 100%;
    box-sizing: border-box;
    background: #f9f9fb;
    // 个人信息
    .personal_info {
        margin-top: 1.2rem;
        background: #fff;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 0.01rem solid #dddfdf;
        padding: 0.53rem;
        position: relative;
        .head {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
        }
        .person_name {
            color: #000;
            font-weight: 700;
            margin-left: 0.53rem;
        }
        .iconfont {
            position: absolute;
            right: 0.53rem;
            color: #c9c9c9;
        }
    }
    //发起群聊
    .talk_more {
        height: 2.8rem;
        line-height: 2.8rem;
        box-sizing: border-box;
        background: #fff;
        padding-left: 2rem;
        border-bottom: 0.01rem solid #dddfdf;
        margin-bottom: 1.07rem;
        span:first-child {
            color: #00a3df;
            font-size: 1.6rem;
            float: left;
            height: 2.8rem;
            line-height: 2.8rem;
        }
        span:last-child {
            color: #00a3df;
            height: 2.8rem;
            line-height: 2.8rem;
            font-size: 0.85rem;
            float: left;
            margin-left: 2rem;
        }
    }
    //列表
    .talk_about {
        background: #fff;
        height: 2.53rem;
        line-height: 2.53rem;
        border-bottom: 0.01rem solid #dddfdf;
        padding: 0 0.59rem;
        display: flex;
        justify-content: space-between;
        &:first-child {
            border-top: 0.01rem solid #dddfdf;
        }
        .left {
            color: #000;
            font-size: 0.8rem;
            font-weight: 700;
        }
        .iconfont {
            color: #c8c8c8;
            font-size: 0.8rem;
        }
    }
    // 添加桌面
    .other {
        background: #fff;
        margin-top: 1.07rem;
        margin-bottom: 1.33rem;
        height: 2.53rem;
        line-height: 2.53rem;
        border-bottom: 0.01rem solid #dddfdf;
        border-top: 0.01rem solid #dddfdf;
        padding: 0 0.59rem;
        display: flex;
        justify-content: space-between;
        color: #00a0de;
        font-weight: 700;
        font-size: 0.85rem;
    }
    // 删除好友
    .delete {
        width: 18.67rem;
        height: 2.13rem;
        background: #fb6155;
        color: #fff;
        font-size: 0.96rem;
        text-align: center;
        line-height: 2.13rem;
        margin: 0 auto;
        border-radius: 0.2rem;
    }
    .p {
        text-align: center;
        width: 100%;
        margin-top: 0.67rem;
        color: #009edd;
        font-weight: 700;
    }
  }
}
</style>
