import Vue from 'vue'
import App from './App.vue'
import router from './router'
import init_data from "./data.js"

Vue.config.productionTip = false

let data = init_data;

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
