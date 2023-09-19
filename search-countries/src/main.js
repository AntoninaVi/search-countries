import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Home from './components/Home.vue';
import CountryDetail from './components/CountryDetail.vue';
import axios from 'axios';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/country/:name', component: CountryDetail, name: 'country-detail' }


  ],
});

const store = new Vuex.Store({
  state: {
    countries: [],
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
  },
  actions: {
    async fetchCountries({ commit }) {
      try {
        const response = await axios.get(' https://restcountries.com/v3.1/all');
        commit('setCountries', response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    },
  },
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
