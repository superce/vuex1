import Vue from 'vue'
import Router from 'vue-router'
import post from '../components/post'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component: Home
    },
    {
      path:'/post/:id',
      component:post
    }
  ]
})
