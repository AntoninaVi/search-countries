<template>
  <div>
    <h2>{{ country.name.common }}</h2>
    <p>Native Name: {{ country.name.native }}</p>
    <p>Population: {{ country.population }}</p>
    <p>Region: {{ country.region }}</p>
    <p>Sub Region: {{ country.subregion }}</p>
    <p>Capital: {{ country.capital }}</p>
    <p>Top Level Domain: {{ country.tld }}</p>
    <p>Currencies: {{ country.currencies | currencyList }}</p>
    
    <p>Languages: {{ country.languages | languageList }}</p>
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
  },
  filters: {
    currencyList(currencies) {
      return currencies ? Object.values(currencies).join(', ') : '';
    },
    languageList(languages) {
      return languages ? Object.values(languages).join(', ') : '';
    },
  },
};
</script>
