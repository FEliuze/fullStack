import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Svg from '@/components/svg/Svg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page/svg',
      name: 'Svg',
      component: Svg
    }
  ]
})
