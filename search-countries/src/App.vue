<template>
  <v-app>
    <v-app-bar>
      <v-spacer>
        <div class="container">
           <nav class="main__navbar">
          <div class="main__navbar-content">
            <h1 class="main__title">Where in the world?</h1>
              <v-btn @click="toggleTheme">Toggle Theme</v-btn>
          </div>
        </nav>
        </div>
        
      </v-spacer>
      
   
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
<style lang="scss">
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