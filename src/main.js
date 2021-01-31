import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import VueGoogleCharts from 'vue-google-charts'
import VueClipboard from 'vue-clipboard2'
import VueCardFormat from 'vue-credit-card-validation'
import io from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended'
import VueApexCharts from 'vue-apexcharts'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// const socket = io('http://localhost:3000')
const socket = io('wss://api.narr.ng')

Vue.use(VueAxios, axios)
Vue.use(VueGoogleCharts)
Vue.use(VueClipboard)
Vue.use(VueCardFormat)
Vue.use(VueSocketIOExt, socket, { store })
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(Toast)

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['x-token'] = token
}

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
