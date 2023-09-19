import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
        const response = await axios.get(' https://restcountries.com/v3.1/all');
        commit('setCountries', response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    },
  },
  modules: {},
})
