<template>
  <div id="app">
    <header class="app-bar primary">
      <div class="main__navbar">
        <div class="main__navbar-content">
          <h1 class="main__title">Where in the world?</h1>
          <button class="theme-button" @click="toggleTheme">
            <span class="theme-icon" v-if="!isDarkTheme">🌞</span>
            <span class="theme-icon" v-else>🌙</span>
            <span class="theme-text" v-if="!isDarkTheme">Light Mode</span>
            <span class="theme-text" v-else>Dark Mode</span>
          </button>
        </div>
      </div>
    </header>

    <main class="background">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isDarkTheme: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      localStorage.setItem("theme", this.isDarkTheme ? "dark" : "light");
      this.updateTheme();
    },
    updateTheme() {
      if (this.isDarkTheme) {
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.remove("dark-theme");
      }
    },
  },
  created() {
    const savedTheme = localStorage.getItem("theme");
    this.isDarkTheme = savedTheme === "dark";
    this.updateTheme();
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Nunito Sans", sans-serif;
  color: #111517;
  font-style: normal;
  background-color: #fafafa;
  transition: background-color 0.4s;
}

.app-bar {
  background-color: #fff;
  color: #111517;
  padding: 1em;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
    @media screen and(max-width: 430px) {
      font-size: 14px;
    }
  }
}

.theme-button {
  display: block;
  width: 10em;
  text-align: left;
  background-color: transparent;
  transition: background-color 0.3s;
  border: none;
  color: #111517;
  cursor: pointer;

  .theme-icon {
    margin-right: 8px;
  }
}

.dark-theme {
  background-color: #202c36;
  color: #fff;

  .theme-button,
  .main__title {
    color: #fff;
  }

  .main__list-item,
  .custom-select-dropdown,
  .app-bar,
  .main__list-button,
  .primary,
  .material-icons {
    background-color: #2b3844;
      color: #fff;
  }
  .custom-select-label,
  .country__info-borders-list-item a {
    color: #fff;
  }
  .custom-select-container,
  .custom-select-option,
  .main__filters-search-input {
    background-color: #2b3844;
    color: #fff;
  }
}
</style>
