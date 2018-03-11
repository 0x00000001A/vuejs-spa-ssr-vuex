import api from '../../api/kittens';

// why there is no types ?
// see:
// https://github.com/vuejs/vuex/pull/1137
// and
// https://habrahabr.ru/post/350290/

export default {
  namespaced: true,
  state: () => ({
    all: [],
    selected: {},
  }),
  actions: {
    getAllKittens({ commit, state }) {
      return api.getAllKittens().then(response => {
        commit('setKittens', response.data.tiles);
      });
    },

    getKitten({ state, commit, dispatch }, id) {
      if (!state.all.length) {
        return dispatch('getAllKittens').then(() => {
          commit(
            'selectKitten',
            state.all.find(kitten => {
              return kitten.id === id;
            })
          );
        });
      }

      return commit(
        'selectKitten',
        state.all.find(kitten => {
          return kitten.id === id;
        })
      );
    },
  },
  mutations: {
    setKittens(state, kittens) {
      state.all = kittens;
    },

    selectKitten(state, kitten) {
      state.selected = kitten;
    },
  },
};
