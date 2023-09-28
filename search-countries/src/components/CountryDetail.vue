<template>
  <div>
    <h2>{{ country.name }}</h2>
    <p>Native Name: {{ country.nativeName }}</p>
    <p>Population: {{ country.population }}</p>
    <p>Region: {{ country.region }}</p>
    <p>Sub Region: {{ country.subregion }}</p>
    <p>Capital: {{ country.capital }}</p>
    <p>Top Level Domain: {{ country.topLevelDomain }}</p>
    <p>Currencies: {{ country.currencies }}</p>
    <p>Languages: {{ country.languages}}</p>

    <p>Border Countries:
      <ul>
        <li v-for="border in borderCountries" :key="border.alpha3Code">
          <router-link :to="'/country/' + border.alpha3Code">{{ border.name }}</router-link>
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CountryDetail',
  data() {
    return {
      country: {},
      borderCountries: [],
    };
  },
  mounted() {
    const countryCode = this.$route.params.code;

    axios
      .get(`https://restcountries.eu/rest/v3.1/alpha/${countryCode}`)
      .then((response) => {
        this.country = response.data;

        const borderCodes = this.country.borders.join(';');
        axios
          .get(`https://restcountries.eu/rest/v3.1/alpha?codes=${borderCodes}`)
          .then((response) => {
            this.borderCountries = response.data;
          })
          .catch((error) => {
            console.error('Error fetching border countries:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching country:', error);
      });
  },
};
</script>
