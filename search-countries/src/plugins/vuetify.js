import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true, 
    },
    themes: {
      light: {
        primary: '#FFFFFF',
        background: '#FAFAFA',
        input: '#848484',
        text: '#111517',
        icon: '#000000',
      },
      dark: {
        primary: '#2B3844',
        background: '#202C36',
        text: '#2B3844',
        input: '#FFF',
        icon: '#FFF',
      },
    },
  },
});
