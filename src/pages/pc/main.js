import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../../assets/styles/pc-index.css'

import vueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(vueAwesomeSwiper);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#index')
