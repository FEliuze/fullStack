import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Svg from '@/components/svg/Svg'
import Biu from '@/components/biu'
import Drag from '@/components/drag'

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
    },
    {
      path: '/page/biu',
      name: 'Biu',
      component: Biu
    },
    {
      path: '/page/drag',
      name: 'Drag',
      component: Drag
    }
  ]
})
