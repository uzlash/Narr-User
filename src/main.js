import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import uploader from 'vue-simple-uploader';
import axios from 'axios';


const base = axios.create({
  baseURL: "http://192.168.1.4:3000/api/v1"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;

Vue.use(uploader);



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
