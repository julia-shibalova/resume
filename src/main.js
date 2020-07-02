import Vue from 'vue'
import VueResource from 'vue-resource';
import Vmodal from 'vue-js-modal';
import VueCookies from 'vue-cookies';

//icon
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';
import './ml'

// styles
import './assets/styles/index.scss';

Vue.use(VueResource);
Vue.use(Vmodal);
Vue.use(VueCookies);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false


library.add();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
