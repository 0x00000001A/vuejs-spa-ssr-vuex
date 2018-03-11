import Vue from 'vue';

export default {
  getAllKittens() {
    return Vue.axios.get('api/tiles');
  },
};
