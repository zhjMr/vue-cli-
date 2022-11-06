// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//rem.js 自动适配适配
import './utils/rem'
//浏览器初始化样式
import './assets/styles/reset.css'
//移动端边框一像素问题
import './assets/styles/border.css'
//矢量图标引入
import 'styles/iconfont.css'
// 300毫秒点击延迟问题：{穿透问题}
// click事件延迟300ms执行
import fastClick from 'fastclick'
fastClick.attach(document.body)
Vue.config.productionTip = false
//swiper 轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css"
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
