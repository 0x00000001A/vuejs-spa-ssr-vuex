import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(
  VueAxios,
  Axios.create({
    baseURL: 'http://localhost:9000/',
  })
);

import { createStore } from './store';
import { createRouter } from './router';

import App from './App.vue';

export function createApp(ssrContext) {
  const store = createStore();
  const router = createRouter();

  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App),
  });

  return { app, router, store };
}
