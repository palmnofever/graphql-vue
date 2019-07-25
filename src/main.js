import Vue from "vue";
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createProvider } from './vue-apollo'
import VueResource from 'vue-resource'

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(BootstrapVue)
Vue.use(VueApollo)
Vue.use(VueResource)

// Setup ApolloClient
export const defaultClient = new ApolloClient({
  uri: "http://localhost:20004/graphql"
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false;

//Filters
Vue.filter('snippet', function(value){
  return value.slice(0,130) + ' ...'
});

new Vue({
  provide: apolloProvider,
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
