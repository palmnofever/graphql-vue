import Vue from "vue";
import Vuex from "vuex";

import { moduleA } from "./data/learningunitData";

import { defaultClient as apolloClient } from "./main";

import { GET_Learningunits } from "./queries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    learningunits: [],
  },

  mutations: {
    setLearningunits: (state, payload) => {
      state.learningunits = payload;
    },
  },

  actions: {
    showallLearningunits: ({ commit }) => {
      apolloClient
        .query({
          query: GET_Learningunits
        })
        .then(({ data }) => {
          commit("setLearningunits", data.showallLearningunits);
          console.log(data)
        })
        .catch(err => {
          console.error(err);
        });
    },
  },

  getters: {
    learningunits: state => state.learningunits
  },

  modules: {
    a: moduleA
  }
});
