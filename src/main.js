import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import {IconsPlugin} from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(IconsPlugin)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
