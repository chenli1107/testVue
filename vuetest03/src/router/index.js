import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tofirstrouter',
      name: 'HelloWorld',
      component: () => import('@/components/Myrouter'), 
      hidden: true 
    },
        {
      path: '/a',
      component: () => import('@/components/Myaaaa'),
    },
        {
      path: '/b',
      component: () => import('@/components/Myuser'),
    },
        {
      path: '/c',
      component: () => import('@/components/Myaaaa'),
    },
  ]
})
