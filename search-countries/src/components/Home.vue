<template>
  <div>
    <h1>Countries</h1>
    <select v-model="selectedContinent">
      <option value="">All</option>
      <option v-for="continent in continents" :value="continent">
        {{ continent }}
      </option>
    </select>
    <ul>
      <li v-for="country in filteredCountries" :key="country.cca3">
        <router-link :to="'/country/' + country.cca3">
          <img
            :alt="`Flag of ${country.name.common}`"
            class="image"
            :src="country.flags.png"
          />
          {{ country.name.common }}
          <p>Population: {{ country.population }}</p>
          <p>Region: {{ country.region }}</p>
          <p>Capital: {{ country.capital }}</p></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedContinent: "",
      continents: ["Africa", "Asia", "Europe", "Oceania", "Americas"],
    };
  },
  computed: {
    countries() {
      return this.$store.state.countries;
    },
    filteredCountries() {
      if (this.selectedContinent) {
        return this.countries.filter(
          (country) => country.region === this.selectedContinent
        );
      } else {
        return this.countries;
      }
    },
  },
  created() {
    this.$store.dispatch("fetchCountries");
  },
};
</script>
