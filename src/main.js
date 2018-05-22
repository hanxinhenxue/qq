// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
Vue.config.productionTip = false
// 加载icon图标字体
import './assets/fonts/fonts/iconfont.css'
import './assets/fonts/fonts/iconfont.eot'
import './assets/fonts/fonts/iconfont.ttf'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
