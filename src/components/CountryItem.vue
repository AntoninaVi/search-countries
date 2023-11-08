<template>
  <div class="main__list-item primary">
    <router-link :to="'/country/' + country.cca3">
      <img
        :alt="`Flag of ${country.name.common}`"
        class="main__list-item-flag"
        :src="country.flags.png"
      />
    </router-link>
    <div class="main__list-item-info">
      <p class="main__list-item-info-title">{{ country.name.common }}</p>
      <p class="main__list-item-info-text">
        <span class="main__list-item-info-text-label">Population: </span>
        <span class="main__list-item-info-text-value">{{
          country.population
        }}</span>
      </p>
      <p class="main__list-item-info-text">
        <span class="main__list-item-info-text-label">Region: </span>
        <span class="main__list-item-info-text-value">{{
          country.region
        }}</span>
      </p>
      <p class="main__list-item-info-text">
        <span class="main__list-item-info-text-label">Capital: </span>
        <span class="main__list-item-info-text-value">
          {{ country.capital.join(", ") }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: Object, 
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
      border: none;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      &-el {
        background-image: url(/src/assets/img/search.svg);
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        top: 4em;
        margin-left: 1em;
        width: 1.2em;
        height: 1.2em;
        color: #848484;
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
    background-color: transparent;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      background-color: #dddddd;
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
</style>
