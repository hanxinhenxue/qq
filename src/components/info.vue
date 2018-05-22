<template>
    <div class="container">
        <!-- 顶部 -->
        <header>
            <a class="icon-jiantou iconfont"  @click="prePage">返回</a>
            <div>更多</div>
        </header>
        <!-- 背景图 -->
        <div class="bg bg0" v-if="this.$route.params.id == 0"></div>
        <div class="bg bg1" v-if="this.$route.params.id == 1"></div>
        <div class="bg bg2" v-if="this.$route.params.id == 2"></div>
        <div class="bg bg3" v-if="this.$route.params.id == 3"></div>
        <div class="bg bg4" v-if="this.$route.params.id == 4"></div>
        <!-- 头像 -->
        <div class="head pic0" v-if="this.$route.params.id == 0"></div>
        <div class="head pic1" v-if="this.$route.params.id == 1"></div>
        <div class="head pic2" v-if="this.$route.params.id == 2"></div>
        <div class="head pic3" v-if="this.$route.params.id == 3"></div>
        <div class="head pic4" v-if="this.$route.params.id == 4"></div>
        <!-- 姓名 -->
        <div class="name" v-if="this.$route.params.id == 0">开发者_也就是我</div>
        <div class="name" v-else-if="this.$route.params.id == 1">寒心</div>
        <div class="name" v-else-if="this.$route.params.id == 2">恨雪</div>
        <div class="name" v-else-if="this.$route.params.id == 3">神鬼</div>
        <div class="name" v-else-if="this.$route.params.id == 4">莫敌</div>

        <ul class="infomation">
            <li v-for="(item,i) in $store.state.personal[$route.params.id]" :key="i">
                <div class="iconfont icon-lianxiren">&nbsp;&nbsp;{{item}}</div><div class="iconfont icon-jiantou4"></div>                
            </li>
        </ul>

        <!-- 底部 -->
        <footer>
            <div class="left">送礼物</div>
            <div class="right">发消息</div>
        </footer>
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
// 开发者
.bg0 {
    background: url("../assets/images/my.jpg") no-repeat;
    background-size: cover;
}.bg1 {
    background: url("../assets/images/han.jpg") no-repeat;
    background-size: cover;
}.bg2 {
    background: url("../assets/images/hen.jpg") no-repeat;
    background-size: cover;
}.bg3 {
    background: url("../assets/images/shen.jpg") no-repeat;
    background-size: cover;
}.bg4 {
    background: url("../assets/images/mo.jpg") no-repeat;
    background-size: cover;
}
.pic0 {
    background: url("../assets/images/my.jpg") no-repeat center center;
    background-size: cover;
}
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
  padding-bottom: 3.06rem;
  background: #fff;

  // 顶部
  header {
    height: 3.06rem;
    width: 100%;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background: rgba(255,255,255,0);
    justify-content: space-between;
    text-align: center;
    line-height: 3.06rem;
    padding: 0 0.61rem;
    box-sizing: border-box;
    font-size: 1.07rem;
    color: #fff;
    display: flex;
    a {
        float: left;
        color: #fff;
    }
    div {
        text-align: center;
        color: #fff;
    }
  }
//   背景图
  .bg {
      width: 100%;
      height: 9.6rem;
      margin-bottom: 3.2rem;
  }
//   头像
    .head {
        width: 5.47rem;
        height: 5.47rem;
        border-radius: 50%;
        border: 0.03rem solid #ccc;
        position: absolute;
        left: 50%;
        top: 6.4rem;
        margin-left: -2.73rem;
    }
    // 姓名
    .name {
        text-align: center;
        color: #000;
        font-weight: 700;
        font-size: 1.33rem;
    }
    //个人信息
    .infomation {
        width: 100%;
        li {
            display: flex;
            box-sizing: border-box;
            justify-content: space-between;
            padding: 0 0.53rem 0 0.93rem;
            font-size: 0.67rem;
            color: #000;
            height: 3.13rem;
            line-height: 3.13rem;
            border-bottom: 0.01rem solid #e2e3e3;
        }
    }

    // 底部
    footer {
        height: 2.93rem;
        width: 100%;
        box-sizing: border-box;
        padding: 0.4rem 0.67rem;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #f9f9f9;
        border-top: 0.01rem solid #f9f9f9;
        .left,.right {
            width: 9rem;
            height: 2.27rem;
            text-align: center;
            line-height: 2.27rem;
            font-size: 1.07rem;
            border-radius: 0.2rem;
            box-shadow: 0px 0px 4px #ccc;
        }
        .left {
            color: #000;
            font-weight: 700;
            float: left;
            background: #fff;;
        }
        .right {
            float: right;
            color: #fff;
            font-weight: 700;
            background: #1eb9f2;
        }
    }
}
</style>
