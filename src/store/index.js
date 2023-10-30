import Vue from 'vue';
import Vuex from 'vuex';
import { API_BASE_URL } from './api'; 

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    flags: {},
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
  },
  actions: {
    async fetchCountries({ commit }) {
      try {
        const response = await fetch(`${API_BASE_URL}/all`);
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
