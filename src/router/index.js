import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience'
import Portfolio from '../views/Portfolio'
import Blog from '../views/Blog'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
