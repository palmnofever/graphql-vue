import { defaultClient as apolloClient } from "../main";

import { GET_LearningunitById } from "../queries";

export default {
    state: {
        learningunitById: {}
    },
    
    mutations: {
        setLearningunitById: (state, payload) => {
          state.learningunitById = payload;
        }
      },
    
    actions: {
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
        learningunitById: state => state.learningunitById 
    },
}

