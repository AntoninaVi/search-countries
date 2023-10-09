<template>
  <div>
    <h1>Countries</h1>
    <div class="search-input">
      <input v-model="searchTerm" placeholder="Search for a country…" />
    </div>
    <select v-model="selectedContinent">
      <option value="">All</option>
      <option v-for="continent in continents" :value="continent">{{ continent }}</option>
    </select>
    <ul>
      <li v-for="(country, index) in displayedCountries" :key="country.cca3">
        <router-link :to="'/country/' + country.cca3">
          <img
            :alt="`Flag of ${country.name.common}`"
            class="image"
            :src="country.flags.png"
          />
          {{ country.name.common }}
          <p>Population: {{ country.population }}</p>
          <p>Region: {{ country.region }}</p>
          <p>Capital: {{ country.capital }}</p>
        </router-link>
      </li>
    </ul>
    <p v-if="filteredCountries.length === 0">Sorry, country wasn't found</p>
    <button @click="showMore">Show More</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedContinent: '',
      continents: ['Africa', 'Asia', 'Europe', 'Oceania', 'Americas'],
      searchTerm: '',
      visibleCountries: 8, 
    };
  },
  computed: {
    countries() {
      return this.$store.state.countries;
    },
    filteredCountries() {
      let filtered = this.countries;

      if (this.selectedContinent) {
        filtered = filtered.filter((country) => country.region === this.selectedContinent);
      }

      if (this.searchTerm) {
        const searchTermLC = this.searchTerm.toLowerCase();
        filtered = filtered.filter((country) =>
          country.name.common.toLowerCase().includes(searchTermLC)
        );
      }

      return filtered;
    },
    displayedCountries() {
      return this.filteredCountries.slice(0, this.visibleCountries);
    },
  },
  methods: {
    showMore() {
      this.visibleCountries += 8;
    },
  },
  created() {
    this.$store.dispatch('fetchCountries');
  },
};
</script>

<style>
.search-input {
  margin-bottom: 10px;
}


input {
  padding: 5px;
  width: 30em;
}
</style>
