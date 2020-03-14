import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './src/components/index/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  }
]

const router = new VueRouter({
  routes
})

// 导出router对象
export default router
