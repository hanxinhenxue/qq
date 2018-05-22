import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 首页消息
import xiaoxi from '../components/xiaoxi.vue'
//聊天窗口
import chating from '../components/liaotian.vue'
//联系人
import lianxiren from '../components/lianxiren.vue'
//看点
import kandian from '../components/kandian.vue'
//动态
import dongtai from '../components/dongtai.vue'
//聊天设置
import ltshezhi from '../components/ltshezhi.vue'
//搜索页
import search from '../components/sousuo.vue'
//个人信息页
import info from '../components/info.vue'
export default new Router({
  routes: [
    {
      path:'/',
      redirect:"/message"
    },
    {
      path:"/message",
      component:xiaoxi,
    },
    {
      path:"/chating/:id",
      component:chating,
    },
    {
      path:'/lianxiren',
      component:lianxiren
    },
    {
      path:'/kandian',
      component:kandian
    },
    {
      path:'/dongtai',
      component:dongtai
    },
    {
      path:'/ltshezhi/:id',
      component:ltshezhi,
      name:'ltsz'
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/info/:id',
      component:info
    }
  ]
})
