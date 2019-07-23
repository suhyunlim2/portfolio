import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home';
import Proj01 from '@/views/proj1';
import Proj02 from '@/views/proj2';
import Proj03 from '@/views/proj3';
import Proj04 from '@/views/proj4';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/proj01',
      name: 'proj01',
      component: Proj01,
    },
    {
      path: '/proj02',
      name: 'proj02',
      component: Proj02,
    },
    {
      path: '/proj03',
      name: 'proj03',
      component: Proj03,
    },
    {
      path: '/proj04',
      name: 'proj04',
      component: Proj04,
    },
    // {
    //   path: '/proj01',
    //   name: 'proj01',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/proj/proj01.vue'),
    // },
    // {
    //   path: '/proj02',
    //   name: 'proj02',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/proj/proj02.vue'),
    // },
    // {
    //   path: '/proj03',
    //   name: 'proj03',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/proj/proj03.vue'),
    // },
    // {
    //   path: '/proj04',
    //   name: 'proj04',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/proj/proj04.vue'),
    // },
  ],
});
