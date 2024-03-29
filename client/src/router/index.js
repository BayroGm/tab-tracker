import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'
import songsnames from '@/components/songsnames'
import Users from '@/components/Users'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/login',
      name: 'login',
      component: Login

    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong

    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songsnames',
      name: 'songsnames',
      component: songsnames
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
})
