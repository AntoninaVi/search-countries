// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     countries: [],
//   },
//   mutations: {
//     setCountries(state, countries) {
//       state.countries = countries;
//     },
//   },
//   actions: {
//     async fetchCountries({ commit }) {
//       try {
//         const response = await axios.get(' https://restcountries.com/v3.1/all');
//         commit('setCountries', response.data);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     },
//   },
//   modules: {},
// })
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: []
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries
    }
  },
  actions: {
    async fetchCountries({ commit }) {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        commit('SET_COUNTRIES', response.data)
      } catch (error) {
        console.error('Error fetching countries:', error)
      }
    }
  },
  getters: {
    filteredCountries: state => continent => {
      if (!continent) return state.countries
      return state.countries.filter(country => country.region === continent)
    }
  },
  modules: {}
})
