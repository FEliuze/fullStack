// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from '../plugins/echarts'
import VueProgressBar from 'vue-progressbar'
// import Vs from 'd3-vs'

const barOptions = {
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
}

let Intercept = function (Vue, router) {
  // 路由拦截
  router.beforeEach((to, from, next) => {
    // if (to.path !== '/' && !localStorage.getItem('domain')) {
    //   next({
    //     path: '/'
    //   })
    // } else {
    //   next()
    // }
  })
  // request拦截设置
  Vue.prototype.$axios.interceptors.request.use(function (config) {
    Vue.prototype.$Progress.start()
    return config
  }, error => {
    Vue.prototype.$Progress.finish()
    Message.error({
      message: '请求超时'
    })
    return Promise.reject(error)
  })
  // response拦截设置
  Vue.prototype.$axios.interceptors.response.use(data => { // 响应成功关闭loading
    Vue.prototype.$Progress.finish()
    if (data.data.status === 401 || data.data.status === 400) {
      let t = sessionStorage.getItem('interval')
      clearInterval(t)
      sessionStorage.clear()
      router.push('/')
    } else {
      return data
    }
  }, error => {
    Vue.prototype.$Progress.finish()
    return Promise.reject(error)
  })
}

// Vue.use(Vs)
Vue.use(Axios)
Vue.use(echarts)
Vue.use(ElementUI)
Vue.use(Intercept, router)
Vue.use(VueProgressBar, barOptions)

Vue.directive('drag', (el, bindings) => {
  el.onmousedown = (e) => {
    let disx = e.pageX - el.offsetLeft
    let disy = e.pageY - el.offsetTop
    document.onmousemove = (e) => {
      el.style.left = e.pageX - disx + 'px'
      el.style.top = e.pageY - disy + 'px'
    }
    document.onmouseup = () => {
      document.onmousemove = document.onmouseup = null
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
