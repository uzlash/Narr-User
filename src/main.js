import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import vuetify from "./plugins/vuetify";
import VueGoogleCharts from "vue-google-charts";
import VueClipboard from "vue-clipboard2";
import VueCardFormat from "vue-credit-card-validation";
import io from "socket.io-client";
import VueSocketIOExt from "vue-socket.io-extended";
import VueApexCharts from "vue-apexcharts";

const socket = io("/socketServer");

Vue.use(VueAxios, axios);
Vue.use(VueGoogleCharts);
Vue.use(VueClipboard);
Vue.use(VueCardFormat);
Vue.use(VueSocketIOExt, socket);
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

// axios.defaults.baseURL = 'https://narr.ng'
const token = localStorage.getItem("user-token");
if (token) {
  axios.defaults.headers.common["x-token"] = token;
}

//TODO: Set base URL axios

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
