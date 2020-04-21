import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#970747',
        secondary: '#EA7926',
        anchor: '#8c9eff',
      },
    },
  },
});

export default vuetify;
