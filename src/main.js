import Vue from 'vue';
import VueVega from 'vue-vega';
import App from './App.vue';


Vue.use(VueVega);


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
