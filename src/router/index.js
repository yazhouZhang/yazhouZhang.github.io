import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Anecdote from '@/pages/life/anecdote'
import LeaveMessages from '@/pages/contact/leaveMessages'
import writeArticles from '@/pages/home/writeArticles'
import Details from '@/pages/home/details'

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

// Vue.use(mavonEditor)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Anecdote',
      name: 'Anecdote',
      component: Anecdote
    },
    {
      path: '/LeaveMessages',
      name: 'LeaveMessages',
      component: LeaveMessages
    },
    {
      path: '/writeArticles',
      name: 'writeArticles',
      component: writeArticles
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    }
  ]
})
