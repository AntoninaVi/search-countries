<template>
  <div>
    <div :class="{ dark: darkMode, light: !darkMode }">
      <div class="wrapper">
        <div class="container">
          <div class="main__filters">
            <div class="main__filters-search">
              <input
                class="main__filters-search-input"
                v-model="searchTerm"
                placeholder="Search for a country…"
              />
              <span class="main__filters-search-input-el"></span>
            </div>
            <v-col cols="6" md="6" lg="2" class="main__filters-select-wrapper">
              <v-select
                v-model="selectedContinent"
                :items="continents"
                label="Filter by Region"
                hide-selected
                dense
                solo
                class="main__filters-select"
              ></v-select>
            </v-col>
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
              </router-link>
              <div class="main__list-item-info">
                <p class="main__list-item-info-title">
                  {{ country.name.common }}
                </p>
                <p class="main__list-item-info-text">
                  Population: {{ country.population }}
                </p>
                <p class="main__list-item-info-text">
                  Region: {{ country.region }}
                </p>
                <p class="main__list-item-info-text">
                  Capital: {{ country.capital.join(", ") }}
                </p>
              </div>
            </li>
          </ul>
          <p v-if="filteredCountries.length === 0">
            Sorry, country wasn't found
          </p>
          <button class="main__list-button" @click="showMore">Show More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectedContinent: "",
      continents: ["Africa", "Asia", "Europe", "Oceania", "Americas"],
      searchTerm: "",
      visibleCountries: 8,
      darkMode: false,
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
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      console.log("Dark mode is now:", this.darkMode);
    },
  },
  created() {
    this.$store.dispatch("fetchCountries");
  },
};
</script>

<style lang="scss">
body {
  font-family: "Nunito Sans", sans-serif;
  color: #111517;
  font-style: normal;
}

.container {
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
a {
  text-decoration: none;
  color: #111517;
}

.main {
  &__filters {
    display: flex;
    align-items: center;
    max-width: 1286px;
    margin-top: 2em;
    margin-bottom: 3em;
    margin-left: auto;
    margin-right: auto;
  }

  &__filters-search {
    border-radius: 5px;
    width: 100%;
    &-input {
      position: relative;
      max-width: 30em;
      width: 100%;
      padding: 1.1em 1.1em 1.1em 3em;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      color: #848484;
      border-radius: 5px;
      background: #fff;
      box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
      border: none;
      &-el {
        background-image: url(/src/assets/img/search.svg);
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        top: 5em;
        left: 7%;
        width: 1.2em;
        height: 1.2em;
        color: #848484;
      }
    }
  }

  &__filters-select {
    border-radius: 5px;
    width: 15em;
    padding: 1.1em;
  }

  &__list {
    list-style-type: none;
    display: grid;
    grid-template-columns: 16em 16em 16em 16em;
    gap: 4.6em;
    justify-content: center;
    max-width: 1286px;
    margin-left: auto;
    margin-right: auto;
  }

  &__list-item {
    display: block;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);

    &-flag {
      max-width: 16.5em;
      width: 100%;
      height: 10em;
      margin-bottom: 1.5em;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  &__list-item-info {
    padding-left: 1.4em;

    &-title {
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 1em;
    }
    &-text {
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
      margin-bottom: 0.5em;
    }
  }

  &__list-button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3em;
    width: 10em;
    padding: 1em;
    background-color: transparent;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.10);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      background-color: #dddddd;
      transition: ease-in 0.3s;
    }
  }
}
//dropdown menu
.vs__dropdown-toggle {
  border-radius: 5px;
  border: none;
  background: #fff;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
}
.vs__open-indicator {
  color: #111517;
}
.vs--open.vs__dropdown-toggle {
  border-radius: 5px;
  border: none;
  background: #fff;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
}

.vs__dropdown-menu {
  width: 15em;
  display: block;
  list-style: none;
  margin: 0;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  overflow-y: auto;
  padding: 5px 0;
  position: absolute;
  text-align: left;
  top: calc(100% - var(--vs-border-width));
  z-index: var(--vs-dropdown-z-index);
}
</style>
