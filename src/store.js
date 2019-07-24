import Vue from "vue";
import Vuex from "vuex";

import { moduleA } from "./data/learningunitData";

import { defaultClient as apolloClient } from "./main";

import { GET_Learningunits, GET_LearningunitById } from "./queries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    learningunits: [],
    learningunitById: {}
  },

  mutations: {
    setLearningunits: (state, payload) => {
      state.learningunits = payload;
    },
    setLearningunitById: (state, payload) => {
      state.learningunitById = payload;
    }
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
    learningunit: ({ commit }) => {
      apolloClient
        .query({
          query: GET_LearningunitById
        })
        .then(({ data }) => {
          commit("setLearningunitById", data.learningunit);
          console.log(data)
        })
        .catch(err => {
          console.log(err);
        })
    }
  },

  getters: {
    learningunits: state => state.learningunits,
    learningunitById: state => state.learningunitById 
  },

  // modules: {
  //   a: moduleA
  // }
});
