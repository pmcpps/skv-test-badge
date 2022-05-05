import Vue from 'vue';
import Vuetify, {
  VBadge,
  VIcon,
  VApp,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

Vue.use(Vuetify, {
  components: {
    VBadge,
    VIcon,
    VApp,
  },
  directives: {
    Ripple,
  },
});

const opts = {};

export default new Vuetify(opts);
