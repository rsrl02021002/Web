import Vue from 'vue'
import VueRouter from 'vue-router'
// 一：引入TvPlay页面
import TvPlay from '../views/tvplay/TvPlay.vue'

Vue.use(VueRouter)

const routes = [
  // 二：配置路由
  {
    path: '/',
    // path: '/',表示默认页面
    name: 'TvPlay',
    component: TvPlay
  },
  {
    path: '/music',
    name: 'Music',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/music/Music.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/book/Book.vue')
  },
  {
    path: '/talk',
    name: 'Talk',
    component: () => import('../views/talk/Talk.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
