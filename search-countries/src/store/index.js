import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
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
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        commit('setCountries', countries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    },
  },
  getters: {
    getCountryByCode: (state) => (code) => {
      return state.countries.find((country) => country.cca3 === code);
    },
  },
  modules: {},
});
