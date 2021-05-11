import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/friends',
    name:'Friends',
    component: () => import(/* webpackChunkName: "about" */ '../views/Friends.vue')
  },
  {
    path: '/shopp',
    name: 'Shopp',
    component: () => import(/* webpackChunkName: "about" */'../views/Shopp.vue')
  },
  {
    path:'/musicmen',
    name:'Muscimen',
    component: () => import(/* webpackChunkName: "about" */ '../views/Musicmen.vue')
  },
  {
    path:'/down',
    name:'Down',
    component: () => import(/* webpackChunkName: "about" */'../views/Down.vue')
  },
  {
    path:'/songlist',
    name:'Songlist',
    component: () => import(/* webpackChunkName: "about" */'../views/Songlist.vue')
  },
  {
    path:'/songs',
    name:'Songs',
    component: () => import(/* webpackChunkName: "about" */'../views/Songs.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
