import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuexI18n from 'vuex-i18n'

import translationsptBr from './languages/pt-Br'
import translationsenUs from './languages/en-Us'
 
const store = new Vuex.Store();
 
Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('pt', translationsptBr);
Vue.i18n.add('en', translationsenUs);
Vue.i18n.set(navigator.language);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
