<template>
  <div>
    <img
      :alt="`Flag of ${country.name.common}`"
      class="image"
      :src="country.flags.png"
    />
    <h2>{{ country.name.common }}</h2>
    <p>Native Name: {{ country.name.native }}</p>
    <p>Population: {{ country.population }}</p>
    <p>Region: {{ country.region }}</p>
    <p>Sub Region: {{ country.subregion }}</p>
    <p>Capital: {{ country.capital }}</p>
    <p>Top Level Domain: {{ country.tld }}</p>
    <p>Currencies: {{ getCurrenciesList(country.currencies) }}</p>
    <p>Languages: {{ getLanguagesList(country.languages) }}</p>
    <p>Border Countries:
      <ul>
        <li v-for="border in borderCountries" :key="border">
          <router-link :to="'/country/' + border">{{ getCountryNameByCode(border) }}</router-link>
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CountryDetail',
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
        return currencyList.join(', ');
      } else {
        return '';
      }
    },
    getLanguagesList(languages) {
      if (languages) {
        return Object.values(languages).join(', ');
      } else {
        return '';
      }
    },
  },
};
</script>
