import Vue from 'vue';
import App from './App.vue';
import Mistify from '../src/mistify';

import './assets/css/tailwind.css';

Vue.config.productionTip = false;

Vue.use(Mistify);

new Vue({
  render: h => h(App),
}).$mount('#app');
