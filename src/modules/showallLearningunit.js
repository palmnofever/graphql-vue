import { defaultClient as apolloClient } from "../main";

import { GET_Learningunits } from "../queries";

export default {
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
                query: GET_Learningunits,
                variables: {
                    filter: {
                        where: JSON.stringify({ mc: { eq: "061837cb-5ae1-4804-9d5d-37a7d2313c75" } })
                    }
                }
            })
            .then(({ data }) => {
            commit("setLearningunits", data.showallLearningunits);
            console.log(data)
            })
            .catch(err => {
            console.error(err);
            });
        }
    },

    getters: {
        learningunits: state => state.learningunits,
    },
}