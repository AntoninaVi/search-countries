<template>
  <v-app>
    <v-app-bar class="primary">
      <v-spacer>
        <header>
          <div class="main__container primary">
            <nav class="main__navbar">
              <div class="main__navbar-content">
                <h1 class="main__title">Where in the world?</h1>
                <v-btn icon v-if="!$vuetify.theme.dark" @click="toggleTheme()">
                  <v-icon class="mr-1" color="blue-grey darken-4"
                    >mdi-lightbulb</v-icon
                  >
                </v-btn>
                <v-btn icon v-if="$vuetify.theme.dark" @click="toggleTheme()">
                  <v-icon color="yellow darken-3">mdi-lightbulb-outline</v-icon>
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
.theme--dark.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  color: #fff;
  background-color: #2b3844;
}
.v-menu__content .menuable__content__active{
top: 10.5em;
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
  &__theme-toggle {
  }
  &__title {
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
}
</style>
