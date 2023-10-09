<template>
  <div>
    <div class="wrapper">
      <nav class="main__navbar">
        <h1 class="main__title">Where in the world?</h1>
      </nav>
      <div class="container">
        <div class="main__filters">
          <div class="main__filters-search">
            <input
              class="main__filters-search-input"
              v-model="searchTerm"
              placeholder="Search for a country…"
            />
          </div>
          <select class="main__filters-select" v-model="selectedContinent">
            <option value="">All</option>
            <option v-for="continent in continents" :value="continent">
              {{ continent }}
            </option>
          </select>
        </div>

        <ul class="main__list">
          <li
            class="main__list-item"
            v-for="country in displayedCountries"
            :key="country.cca3"
          >
           
            <router-link :to="'/country/' + country.cca3">
             <img
              :alt="`Flag of ${country.name.common}`"
              class="main__list-item-flag"
              :src="country.flags.png"
            />
              <p class="main__list-item-info-title">
                {{ country.name.common }}
              </p>
              <p class="main__list-item-info">
                Population: {{ country.population }}
              </p>
              <p class="main__list-item-info">Region: {{ country.region }}</p>
              <p class="main__list-item-info">Capital: {{ country.capital }}</p>
            </router-link>
          </li>
        </ul>
        <p v-if="filteredCountries.length === 0">Sorry, country wasn't found</p>
        <button class="main__list-button" @click="showMore">Show More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedContinent: "",
      continents: ["Africa", "Asia", "Europe", "Oceania", "Americas"],
      searchTerm: "",
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
        filtered = filtered.filter(
          (country) => country.region === this.selectedContinent
        );
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
    this.$store.dispatch("fetchCountries");
  },
};
</script>

<style lang="scss">
body {
  background-color: var(--background-color-light);
  color: var(--text-color-light);
  font-family: "Nunito Sans", sans-serif;
}
.wrapper {
}
.container {
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.main {
  &__navbar {
    display: flex;
    align-items: center;
    padding: 1.4em;
    background: #2b3844;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
    margin-bottom: 3em;
  }

  &__title {
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    color: #ffffff;
  }

  &__filters {
    display: flex;
    align-items: center;
    margin-bottom: 3em;
  }

  &__filters-search {
    border-radius: 5px;
    width: 100%;
    &-input {
      max-width: 30em;
      width: 100%;
      padding: 1.1em;
    }
  }

  &__filters-select {
    border-radius: 5px;
    max-width: 12.5em;
    width: 100%;
    padding: 1.1em;
  }

  &__list {
    list-style-type: none;
   display: grid;
   grid-template-columns: 16.5em 16.5em 16.5em 16.5em;
   gap: 4.6em;
   justify-content: center;
  }

  &__list-item {
    display: block;
    &-flag{
      max-width: 16.5em;
      width: 100%;
    }
  }

  &__list-item-info {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;

    &-title {
      font-size: 18px;
      line-height: 26px;
    }
  }

  &__list-button {
  }
}
.image {
}
</style>
