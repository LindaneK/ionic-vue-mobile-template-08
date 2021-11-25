import { createStore } from 'vuex'
import {
  db, auth, firebase
} from '../config';

export default createStore({
  state: {
    name: []
  },
  getters: {
    getSaveAllUsers(state) {
      return state.name;
    },
  },
  mutations: {
    saveAllUsers(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    saveAllUsers({ commit }) {
      return commit('saveAllUsers', ["Linda", "Simza"]);
    },
  },
  modules: {
  }
})
