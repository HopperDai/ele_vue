import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Detail from '@/components/Detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/detail/:id/',
    name: 'Detail',
    component: Detail
  }]
})
