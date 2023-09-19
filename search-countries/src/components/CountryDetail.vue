<template>
  <div>
    <h2>{{ country.name }}</h2>
    <p>Native Name: {{ country.nativeName }}</p>
    <p>Population: {{ country.population }}</p>
    <p>Region: {{ country.region }}</p>
    <p>Sub Region: {{ country.subregion }}</p>
    <p>Capital: {{ country.capital }}</p>

            <p>Top Level Domain: {{ country.domain }}</p>
                    <p>Currencies: {{ country.currencies }}</p>
        <p>Languages: {{ country.languages }}</p>

        

    <p>Border Countries: 
      <ul>
        <li v-for="border in country.borders">{{ border }}</li>
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
    };
  },
  async created() {
    const countryCode = this.$route.params.code;

    try {
      const response = await axios.get(`https://restcountries.com/v3.1/alpha/col`);
      this.country = response.data[0];
    } catch (error) {
      console.error('Error fetching country:', error);
    }
  },
};
</script>
