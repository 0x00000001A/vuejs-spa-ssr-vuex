import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import kittens from './modules/kittens';

export function createStore() {
  return new Vuex.Store({
    modules: {
      kittens,
    },
    strict: true,
  });
}
