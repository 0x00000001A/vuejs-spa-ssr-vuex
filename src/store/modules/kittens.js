import api from '../../api/kittens';

export default {
  namespaced: true,
  state: () => ({
    all: [],
    selected: null,
    error: false,
    loading: false
  }),
  actions: {
    getAllKittens({ commit, state }) {
      commit('setLoading', true)

      return api.getAllKittens().then(response => {
        commit('setKittens', response.data.tiles);
        commit('setLoading', false)
        commit('setError', false)
      }).catch(() => {
        commit('setLoading', false)
        commit('setError', true)
      });
    },

    getKitten({ state, commit, dispatch }, id) {
      commit('selectKitten', null)

      const request = state.all.length ? Promise.resolve() : dispatch('getAllKittens')

      return request.then(() => {
        commit('selectKitten', state.all.find((kitten) => kitten.id === id))
      })
    },
  },
  mutations: {
    setKittens(state, kittens) {
      state.all = kittens;
    },

    selectKitten(state, kitten) {
      state.selected = kitten;
    },

    setLoading(state, value) {
      state.loading = value;
    },

    setError(state, value) {
      state.error = value;
    }
  },
};
