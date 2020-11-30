import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import VueGoogleCharts from 'vue-google-charts'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueAxios, axios)
Vue.use(VueGoogleCharts)
Vue.use(VueClipboard)

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')