// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from '../plugins/echarts'
import VueProgressBar from 'vue-progressbar'

Axios.defaults.timeout = 5000
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueProgressBar, {
  color: '#1976D2',
  failedColor: '#D24D57',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 500
  },
  autoRevert: true,
  location: 'top',
  inverse: false
})
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = Axios
/* eslint-disable no-new */
new Vue({
  router,
  store
})
