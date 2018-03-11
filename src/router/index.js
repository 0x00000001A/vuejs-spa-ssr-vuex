import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueMeta);

import Home from '../pages/Home.vue';

const About = () => System.import('../pages/About.vue');
const Kitten = () => System.import('../pages/Kitten.vue');
const Whatever = () => System.import('../pages/Whatever.vue');
const NotFound = () => System.import('../pages/NotFound.vue');

export function createRouter() {
  return new VueRouter({
    mode: 'history',
    scrollBehavior() {
      return { y: 0 };
    },
    linkActiveClass: 'menu__item_active',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/kitten/:id',
        props: true,
        name: 'kitten',
        component: Kitten,
      },
      {
        path: '/about',
        name: 'about',
        component: About,
      },
      {
        path: '/whatever',
        name: 'whatever',
        component: Whatever,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  });
}
