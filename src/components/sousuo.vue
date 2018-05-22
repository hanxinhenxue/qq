<template>
    <div class="container">
        <!-- 搜索框 -->
        <div class="search_box">
            <div class="search" contenteditable="true" @focus="flag = false"></div>
            <router-link tag="div" to="/" class="cancel">取消</router-link>
        </div>
        <!-- 图标 -->
        <div class="iconfont icon-sousuo symbol" v-show="flag">&nbsp;搜索</div>

        <!-- 选项 -->
        <ul class="item">
            <li>
                <p class="iconfont icon-iconfontzuoye"></p>
                <p>个签</p>
            </li>
            <li>
                <p class="iconfont icon-lianxiren"></p>
                <p>头像</p>
            </li>
            <li>
                <p class="iconfont icon-shipin"></p>
                <p>视频</p>
            </li>
            <li>
                <p class="iconfont icon-img"></p>
                <p>图片</p>
            </li>
            <li>
                <p class="iconfont icon-yanjing"></p>
                <p>看点</p>
            </li>
            <li>
                <p class="iconfont icon-zhangpeng"></p>
                <p>部落</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                flag:true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 100%;
        background: #fff;
        box-sizing: border-box;
        padding: 0.4rem 0.53rem 0;
        position: relative;
        // 搜索框盒子
        .search_box {
            width: 100%;
            height: 1.73rem;
            display: flex;
            justify-content: space-between;
            // 左侧搜索框
            .search {
                width: 80%;
                min-height: 1.73rem;
                line-height: 1.73rem;
                background: #f3f3f3;
                border-radius: 0.13rem;
                outline: none;
                box-sizing: border-box;
                padding-left: 0.27rem;
            }
            // 右侧取消
            .cancel {
                width: 15%;
                height: 1.73rem;
                line-height: 1.73rem;
                color: #16ade2;
                font-size: 0.9rem;
                font-weight: 700;
                text-align: center;
            }
        }
            // 按钮定位
            .symbol {
                position: absolute;
                top: 0.6rem;
                left:0.66rem;
                color: #a7a7a7;
                font-size: 0.8rem;
            }
            .item {
                display: flex;
                justify-content: space-between;
                padding: 0 1.07rem;
                margin-top: 1.33rem;
                color: #797d8e;
                text-align: center;
                li {
                    p:first-child {
                        font-size: 1.3rem;
                    }
                    p:last-child {
                        font-size: 1rem;
                    }
                }
            }
    }
</style>
