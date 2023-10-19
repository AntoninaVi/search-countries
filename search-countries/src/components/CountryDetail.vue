<template>
  <div>
    <div class="wrapper background">
      <div class="country__container background">
        <router-link to="/" class="primary">
          <span class="country__button-back">
            <i class="material-icons">arrow_back</i>
            <span :class="[$vuetify.theme.dark ? 'white--text' : 'primary']">
              Back
            </span>
          </span>
        </router-link>

        <div class="country__info" v-if="country">
          <img
            v-if="country"
            :alt="`Flag of ${country}`"
            class="country__flag"
            :src="country.flags.png"
          />
          <div class="country__info-items">
            <h2 class="country__title">{{ country.name.common }}</h2>
            <div class="country__info-items-text">
              <p class="country__info-item">
                Native Name: {{ formatNativeName(country.name.nativeName) }}
              </p>
              <p class="country__info-item">
                Population:
                <span class="country__info-data">{{ country.population }}</span>
              </p>
              <p class="country__info-item">
                Region:
                <span class="country__info-data">{{ country.region }}</span>
              </p>
              <p class="country__info-item">
                Sub Region:
                <span class="country__info-data">{{ country.subregion }}</span>
              </p>
              <p class="country__info-item">
                Capital:
                <span class="country__info-data">{{
                  country.capital.join(", ")
                }}</span>
              </p>
              <p class="country__info-item">
                Top Level Domain:
                <span class="country__info-data">{{
                  country.tld.join(", ")
                }}</span>
              </p>
              <p class="country__info-item">
                Currencies:
                <span class="country__info-data">{{
                  getCurrenciesList(country.currencies)
                }}</span>
              </p>
              <p class="country__info-item">
                Languages:
                <span class="country__info-data">{{
                  getLanguagesList(country.languages)
                }}</span>
              </p>
            </div>
            <div class="country__info-borders">
              Border Countries: &nbsp;
              <ul class="country__info-borders-list">
                <li
                  class="country__info-borders-list-item primary"
                  :class="{ primary: $vuetify.theme.dark }"
                  v-for="border in borderCountries"
                  :key="border"
                >
                  <router-link :to="'/country/' + border">
                    {{ getCountryNameByCode(border) }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
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

      return (
        this.$store.getters.getCountryByCode(countryCode) ||
        this.loadCountryFromLocalStorage(countryCode)
      );
    },
    borderCountries() {
      return this.country.borders || [];
    },
  },
  methods: {
    loadCountryFromLocalStorage(countryCode) {
      const countryData = localStorage.getItem(`country_${countryCode}`);
      if (countryData) {
        return JSON.parse(countryData);
      }
      return null;
    },
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
    formatNativeName(nativeName) {
      if (nativeName) {
        const names = Object.values(nativeName).map(
          (entry) => entry.common || entry.official
        );
        return names.join(", ");
      } else {
        return "N/A";
      }
    },
  },
  watch: {
    country: {
      handler(newVal) {
        if (newVal) {
          localStorage.setItem(
            `country_${newVal.cca3}`,
            JSON.stringify(newVal)
          );
        }
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss">
.country__container {
  max-width: 1286px;
  margin-left: auto;
  margin-right: auto;
  padding: 4em 1em;
}
a {
  text-decoration: none;
  color: #111517;
}

.country {
  &__flag {
    max-width: 35em;
    width: 100%;
    min-height: 25em;
    max-height: 25em;
    margin-right: 7.5em;
    margin-top: 3em;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    @media screen and(max-width:670px) {
      max-width: 40em;
      min-height: 13em;
    }
  }

  &__title {
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    margin-bottom: 1.4em;
  }

  &__info {
    display: grid;
    grid-template-columns: 50% 45%;
    gap: 1em;
    align-items: center;
    @media screen and(max-width:1023px) {
      grid-template-columns: 100%;
    }
  }
  &__info-data {
    font-weight: 300;
    line-height: 32px;
  }
  &__info-items {
    display: flex;
    flex-direction: column;
    align-self: end;
  }
  &__info-items-text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4em;
    margin-bottom: 4.2em;
    @media screen and(max-width:1200px) {
      column-gap: 1em;
    }
    @media screen and(max-width:670px) {
      grid-template-columns: 1fr;
    }
  }
  &__info-item {
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    white-space: nowrap;

    @media screen and(max-width:500px) {
      font-size: 14px;
      white-space: pre-line;
    }
  }

  &__info-borders {
    display: flex;
    grid-column: 2;
    align-items: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    white-space: nowrap;
    @media screen and(max-width:670px) {
      flex-direction: column;
      gap: 1em;
      align-items: baseline;
    }
  }

  &__info-borders-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.6em;
    list-style-type: none;
     @media screen and(max-width:670px){
       padding: 0!important;
     }
  }

  &__info-borders-list-item {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border-radius: 2px;
    border: 0px solid #979797;
    background: #fff;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
  }
}
.country__info-borders-list-item a {
  color: #111517;
}
.v-application a {
  color: #72838b !important;
}
//back button
.country__button-back {
  display: flex;
  align-items: center;
  color: #111517;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
}
.country__button-back i {
  color: #fff;
}
.theme--light .country__button-back i {
  color: #111517;
}
.router-link-active {
  display: flex;
  justify-content: center;
  align-items: unset;
  margin: 3em 0;
  max-width: 7.5em;
  width: 100%;
  padding: 0.7em;
  border-radius: 6px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
  @media screen and(max-width:1023px) {
    margin: 0;
  }
  @media screen and(max-width:670px) {
    max-width: 6.5em;
    padding: 0.3em;
  }
}
.material-icons {
  margin-right: 0.6rem;
}
</style>
