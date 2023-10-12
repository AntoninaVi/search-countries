import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#FFFFFF",
            background: "#FAFAFA",
            input: "#848484",
            text: "#111517",
          },
          dark: {
            primary: "#003A70",
            background: "#202C36",
            text: "#FFF",
            input: "#FFF",
          },
        },
      },
});

export default vuetify;
