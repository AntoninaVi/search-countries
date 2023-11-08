<template>
  <div>
    <div class="wrapper background">
      <div class="country__container background">
        <router-link to="/" class="back-button">
          <span class="country__button-back">
            <i class="material-icons">arrow_back</i>
            Back
          </span>
        </router-link>
        <div class="country__info" v-if="countryDetail">
          <img
            :alt="`Flag of ${countryDetail.name.common}`"
            class="country__flag"
            :src="countryDetail.flags.png"
          />
          <div class="country__info-items">
            <h2 class="country__title">{{ countryDetail.name.common }}</h2>
            <div class="country__info-items-text">
              <p class="country__info-item">
                Native Name:
                {{ formatNativeName(countryDetail.name.nativeName) }}
              </p>
              <p class="country__info-item">
                Population:
                <span class="country__info-data">{{
                  countryDetail.population
                }}</span>
              </p>
              <p class="country__info-item">
                Region:
                <span class="country__info-data">{{
                  countryDetail.region
                }}</span>
              </p>
              <p class="country__info-item">
                Sub Region:
                <span class="country__info-data">{{
                  countryDetail.subregion
                }}</span>
              </p>
              <p class="country__info-item">
                Capital:
                <span class="country__info-data">{{
                  countryDetail.capital.join(", ")
                }}</span>
              </p>
              <p class="country__info-item">
                Top Level Domain:
                <span class="country__info-data">{{
                  countryDetail.tld.join(", ")
                }}</span>
              </p>
              <p class="country__info-item">
                Currencies:
                <span class="country__info-data">{{
                  getCurrenciesList(countryDetail.currencies)
                }}</span>
              </p>
              <p class="country__info-item">
                Languages:
                <span class="country__info-data">{{
                  getLanguagesList(countryDetail.languages)
                }}</span>
              </p>
            </div>

            <div class="country__info-borders" key="border">
              Border Countries: &nbsp;
              <div class="country__info-borders-list">
                <router-link
                  v-for="border in countryDetail.borders"
                  :key="border"
                  :to="'/country/' + border"
                  class="country__info-borders-list-item"
                >
                  {{ getCountryNameByCode(border) }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE_URL } from "@/store/api";
import store from '@/store';

export default {
  name: "CountryDetail",
  data() {
    return {
      countryDetail: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    const countryCode = to.params.code;

    axios
      .get(`${API_BASE_URL}/alpha?codes=${countryCode}`)
      .then((response) => {
        next((vm) => vm.setData(response.data[0]));
      })
      .catch((error) => {
        next(false);
      });
  },
  computed: {
    borderCountries() {
      return this.countryDetail ? this.countryDetail.borders || [] : [];
    },
  },

  methods: {
    setData(data) {
      this.countryDetail = data;
    },
    getCountryNameByCode(code) {
      const country = this.$store.getters.getCountryByCode(code);
      return country ? country.name.common : code;
    },
    getCurrenciesList(currencies) {
      return currencies
        ? Object.values(currencies)
            .map((currency) => `${currency.name} (${currency.symbol})`)
            .join(", ")
        : "";
    },
    getLanguagesList(languages) {
      return languages ? Object.values(languages).join(", ") : "";
    },
    formatNativeName(nativeName) {
      return nativeName
        ? Object.values(nativeName)
            .map((entry) => entry.common || entry.official)
            .join(", ")
        : "N/A";
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #111517;
}
.wrapper {
  padding-bottom: 2em;
}
.country__container {
  max-width: 1286px;
  margin-left: auto;
  margin-right: auto;
  padding: 3em 1em;
}
.country {
  &__flag {
    max-width: 35em;
    width: 100%;
    min-height: 25em;
    max-height: 25em;
    margin-right: 7.5em;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    @media screen and(max-width:712px) {
      margin-bottom: 2.7em;
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
    @media screen and(max-width:712px) {
      grid-template-columns: 1fr;
    }
  }
  &__info-item {
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    white-space: pre-line;

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
    @media screen and(max-width:712px) {
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
    @media screen and(max-width:712px) {
      padding: 0 !important;
    }
  }

  &__info-borders-list-item {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border-radius: 2px;
    border: 0px solid #979797;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    cursor: pointer;
  }
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

//  .country__button-back i {
//   color: #111517;
// }
.back-button {
  display: flex;
  justify-content: center;
  align-items: unset;
  margin-bottom: 4em;
  max-width: 7.5em;
  width: 100%;
  padding: 0.7em;
  border-radius: 6px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
  @media screen and(max-width:712px) {
    max-width: 6.5em;
    padding: 0.3em;
  }
}
.material-icons {
  margin-right: 0.6rem;
}
</style>
