import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import VuePageTransition from 'vue-page-transition';
import BackToTop from 'vue-backtotop';

library.add(faUserSecret)
library.add(faFontAwesome)
library.add(faSpinner, faAlignLeft)
library.add(faFacebook)
library.add(faTwitter)
library.add(faGithub)
library.add(faLinkedin)
library.add(faInstagram)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VuePageTransition)
Vue.use(BackToTop)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
