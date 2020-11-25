import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'

//Vue clipboard
import VueClipboard from 'vue-clipboard2'

// Vue Cropper
// import VueCropper from 'vue-cropperjs';
// import 'cropperjs/dist/cropper.css';
// Vue.use(VueCropper);

//Socket for socket io extended
// import VueSocketIOExt from 'vue-socket.io-extended'
// import io from 'socket.io-client'

// const socket = io('http://localhost:3366');
 
// Vue.use(VueSocketIOExt, socket);

// import VueFriendlyIframe from 'vue-friendly-iframe'

Vue.use(VueAxios, axios)
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