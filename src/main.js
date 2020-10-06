import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import uploader from 'vue-simple-uploader'

axios.defaults.baseURL = 'http://192.168.1.4:3000/api/v1/auth/login'
Vue.use(uploader, VueAxios, axios);



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
