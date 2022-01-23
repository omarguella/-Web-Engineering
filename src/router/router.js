import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    linkExactActiveClass: 'active',
    mode: 'history',
    routes: [
      {
        path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Login.vue')
      }],
    })
export default router;