<template>
  <v-app>
    <v-app-bar class="primary">
      <v-spacer>
        <header>
          <div class="main__container primary">
            <nav class="main__navbar">
              <div class="main__navbar-content">
                <h1 class="main__title">Where in the world?</h1>
                <v-btn class="theme-button" icon @click="toggleTheme">
                  <v-icon
                    v-if="!$vuetify.theme.dark"
                    class="mr-1"
                    color="blue-grey darken-4"
                  >
                    mdi-weather-night
                  </v-icon>
                  <v-icon v-else class="mr-1" color="yellow darken-3">
                    mdi-weather-sunny
                  </v-icon>
                  <span class="theme-text" v-if="!$vuetify.theme.dark"
                    >Dark Mode</span
                  >
                  <span class="theme-text" v-else>Light Mode</span>
                </v-btn>
              </div>
            </nav>
          </div>
        </header>
      </v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style lang="scss">
.wrapper{
  padding: 1em 1em 4em;
}
.main {
  &__navbar {
    max-width: 1286px;
    margin-left: auto;
    margin-right: auto;
  }
  &__navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1286px;
    margin-left: auto;
    margin-right: auto;
  }
  &__title {
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    @media screen and(max-width:430px) {
      font-size: 14px;
    }
  }
}
.col-lg-2 {
  padding: 0;
}
.v-input__slot {
  padding: 12px !important;
  max-width: 12.5em;
  min-width: 12.5em;
  width: 100%;
  @media screen and (max-width: 670px) {
    margin-top: 2.5em;
  }
}
.theme--dark.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  color: #fff;
  background-color: #2b3844;
}
.v-menu__content .menuable__content__active {
  top: 10.5em;
}
.theme-text {
  text-transform: none;
}
.theme-button {
  display: block !important;
  width: 10em !important;
  text-align: left !important;
  background-color: transparent !important;
  transition: none !important;
  border-radius: 5px !important;
}
</style>
