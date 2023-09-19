<template>
  <div>
    <select v-model="selectedContinent">
      <option value="">All</option>
      <option v-for="continent in continents" :value="continent">{{ continent }}</option>
    </select>
    <ul>
      <li v-for="country in filteredCountries" :key="country.alpha2Code">
<router-link :to="'/country/' + country.name">{{ country.name }}</router-link>



 


      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      selectedContinent: '',
      continents: ['Africa', 'Asia', 'Europe', 'Oceania', 'Americas'],
    };
  },
  computed: {
    countries() {
      return this.$store.state.countries;
    },
    filteredCountries() {
      if (this.selectedContinent) {
        return this.countries.filter((country) => country.region === this.selectedContinent);
      } else {
        return this.countries;
      }
    },
  },
  created() {
    this.$store.dispatch('fetchCountries');
  },
};
</script>
