<template>
  <div :class="{ dark: darkMode, light: !darkMode }">
    <div class="wrapper background">
      <div class="main__container">
        <div class="main__filters">
          <div class="main__filters-search">
            <input
              class="main__filters-search-input"
              v-model="searchTerm"
              placeholder="Search for a country…"
              :class="{ dark: darkMode }"
            />
            <span class="main__filters-search-input-el"></span>
          </div>
          <div class="custom-select-container" @click="toggleSelect">
            <span class="custom-select-label">Filter by Region</span>
            <div
              class="custom-select-dropdown"
              :class="{ active: selectActive }"
            >
              <div
                class="custom-select-option"
                v-for="continent in continents"
                :key="continent"
                @click="selectContinent(continent)"
              >
                {{ continent }}
              </div>
            </div>
          </div>
        </div>

        <v-progress-circular
          v-if="isLoading"
          :size="94"
          :width="10"
          indeterminate
          color="green"
          class="loader"
        ></v-progress-circular>

        <div class="main__list">
          <CountryItem
            v-for="country in displayedCountries"
            :key="country.cca3"
            :country="country"
          />
          <p class="error-message" v-if="filteredCountries.length === 0">
            Sorry, country wasn't found
          </p>
        </div>
      </div>

      <button class="main__list-button primary" @click="showMore">
        Show More
      </button>
    </div>
  </div>
</template>

<script>
import CountryItem from "@/components/CountryItem";
import { API_BASE_URL } from '../store/api';

export default {
  components: {
    CountryItem,
  },
  data() {
    return {
      isLoading: true,
      selectedContinent: "",
      continents: ["Africa", "Asia", "Europe", "Oceania", "Americas"],
      searchTerm: "",
      visibleCountries: 8,
      darkMode: false,
      selectActive: false,
    };
  },
  computed: {
    countries() {
      return this.$store.state.countries;
    },
    filteredCountries() {
      return this.countries.filter((country) => {
        const byContinent =
          !this.selectedContinent || country.region === this.selectedContinent;
        const bySearch =
          !this.searchTerm ||
          country.name.common
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase());

        return byContinent && bySearch;
      });
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
    selectContinent(continent) {
      this.selectedContinent = continent;
    },
    toggleSelect() {
      this.selectActive = !this.selectActive;
    },
  },
  created() {
    this.$store
      .dispatch("fetchCountries")
      .then(() => {
        this.isLoading = false;
      })
      .catch((error) => {
        console.error("Error loading countries:", error);
      });
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper {
  padding-bottom: 2em;
}
.custom-select {
  padding: 0 !important;
  flex-basis: max-content !important;
}
.main__container {
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
}
a {
  text-decoration: none;
  color: #111517;
}

.main {
  &__filters {
    display: flex;
    max-width: 1286px;
    margin-top: 2em;
    margin-bottom: 3em;
    margin-left: auto;
    margin-right: auto;
    @media screen and(max-width:712px) {
      flex-wrap: wrap;
    }
  }

  &__filters-search {
    position: relative;
    border-radius: 5px;
    width: 100%;

    &-input {
      position: relative;
      max-width: 30em;
      width: 100%;
      padding: 1.3em 1.1em 1.3em 3em;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;

      border-radius: 5px;

      border: none;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      &-el {
        background-image: url(/src/assets/img/search.svg);
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        top: 1em;
        margin-left: 1em;
        width: 1.2em;
        height: 1.2em;
        color: #848484;
      }
      @media screen and(max-width:712px) {
        margin-bottom: 2.5em;
      }
      &.dark {
        color: #ffffff;
        background-color: red;
      }
    }
  }

  &__list {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16.5em, 16em));
    gap: 4.6em;
    justify-content: center;
    max-width: 1286px;
    margin-left: auto;
    margin-right: auto;
  }

  &__list-item {
    display: block;
    border-radius: 5px;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);

    &-flag {
      max-width: 16.5em;
      width: 100%;
      height: 10em;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  &__list-item-info {
    padding: 1em 1.4em 1em;

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
      &-label {
        font-weight: 600;
      }
      &-value {
        font-weight: 300;
      }
    }
  }

  &__list-button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3em;
    width: 10em;
    padding: 1em;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      transition: ease-in 0.3s;
    }
  }
}
.loader {
  position: absolute;
  top: 10em;
  left: 46%;
  @media screen and(max-width:540px) {
    top: 4em;
    left: 37%;
  }
}
.custom-select-container {
  cursor: pointer;
  position: relative;
  padding: 1.1em;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  max-width: 12.5em;
  width: 100%;
}

.custom-select-label {
  display: block;
  width: 12em;

  border-radius: 5px;
}

.custom-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  flex-direction: column;
  background-color: #fff;
  color: #111517;
  border-radius: 5px;
  overflow-y: auto;
  max-width: 12.5em;
  width: 100%;
  margin-top: 4px;

  &.active {
    display: flex;
  }

  .custom-select-option {
    padding: 12px;
    cursor: pointer;
  }
}
</style>
