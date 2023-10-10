<template>
  <div>
    <nav class="main__navbar">
      <div class="main__navbar-content">
        <h1 class="main__title">Where in the world?</h1>
      </div>
    </nav>

    <div class="container">
      <router-link to="/">Back</router-link>
      <div class="country__info">
        <img
          :alt="`Flag of ${country}`"
          class="country__flag"
          :src="country.flags.png"
        />
        <div class="country__info-items">
          <h2 class="country__title">{{ country.name.common }}</h2>
          <p class="country__info-item">
            Native Name: {{ country.name.native }}
          </p>
          <p class="country__info-item">Population: {{ country.population }}</p>
          <p class="country__info-item">Region: {{ country.region }}</p>
          <p class="country__info-item">Sub Region: {{ country.subregion }}</p>
          <p class="country__info-item">
            Capital: {{ country.capital.join(", ") }}
          </p>
          <p class="country__info-item">
            Top Level Domain: {{ country.tld.join(", ") }}
          </p>
          <p class="country__info-item">
            Currencies: {{ getCurrenciesList(country.currencies) }}
          </p>
          <p class="country__info-item">
            Languages: {{ getLanguagesList(country.languages) }}
          </p>
        </div>
        <div class="country__info-borders">
        Border Countries: 
        <ul class="country__info-borders-list">
          <li
            class="country__info-borders-list-itel"
            v-for="border in borderCountries"
            :key="border"
          >
            <router-link :to="'/country/' + border">{{
              getCountryNameByCode(border)
            }}</router-link>
          </li>
        </ul>
      </div>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryDetail",
  computed: {
    country() {
      const countryCode = this.$route.params.code;
      return this.$store.getters.getCountryByCode(countryCode);
    },
    borderCountries() {
      return this.country.borders || [];
    },
  },
  methods: {
    getCountryNameByCode(code) {
      const country = this.$store.getters.getCountryByCode(code);
      return country ? country.name.common : code;
    },
    getCurrenciesList(currencies) {
      if (currencies) {
        const currencyList = Object.values(currencies).map((currency) => {
          return `${currency.name} (${currency.symbol})`;
        });
        return currencyList.join(", ");
      } else {
        return "";
      }
    },
    getLanguagesList(languages) {
      if (languages) {
        return Object.values(languages).join(", ");
      } else {
        return "";
      }
    },
  },
};
</script>
<style lang="scss">
.container {
  max-width: 1286px;
  margin-left: auto;
  margin-right: auto;
 
}
a{
  text-decoration: none;
    color: #111517;
}
.country {
  &__flag {
    max-width: 35em;
    width: 100%;
    height: 25em;
    margin-right: 7.5em;
    margin-top: 5.6em;
  }

  &__title {
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
  }

  &__info {
        display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    
  }
 &__info-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  &__info-item {
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
  }

  &__info-borders {
    display: flex;
    grid-column: 2;
    align-items: center;
  }

  &__info-borders-list {
    display: flex;
    list-style-type: none;
  }

  &__info-borders-list-itel {
  }
}
</style>
