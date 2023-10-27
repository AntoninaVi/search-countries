import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CountryDetail from '../views/CountryDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/country/:code',
    name: 'CountryDetail',
    component: CountryDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
