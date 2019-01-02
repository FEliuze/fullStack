// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'
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
// Vue.use(Vs)
Vue.use(Axios)
Vue.use(echarts)
Vue.use(ElementUI)
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
