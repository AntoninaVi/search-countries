import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    flags: {},
    darkMode: false,
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
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
    toggleDarkMode({ commit }) {
      commit('toggleDarkMode');
    },
  },
  getters: {
    getCountryByCode: (state) => (code) => {
      return state.countries.find((country) => country.cca3 === code);
    },
  },
  modules: {},
});
