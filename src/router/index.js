import Vue from 'vue'
import Router from 'vue-router'
import FooterBar  from '@/components/FooterBar';
import header from '../components/header.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FooterBar',
      component: FooterBar,
    },
    {
      path: '/header',
      name: 'header',
      component: header,
    },
  ]
})
