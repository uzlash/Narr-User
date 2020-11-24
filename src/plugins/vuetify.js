import '@fortawesome/fontawesome-free/css/all.css'
import "material-design-icons-iconfont/dist/material-design-icons.css"
import Vue from 'vue';
import VueCardFormat from 'vue-credit-card-validation';
import Vuetify from 'vuetify/lib';
// import { colors } from 'vuetify/lib';
import vueGoogleCharts from 'vue-google-charts'

Vue.use(Vuetify);
Vue.use(vueGoogleCharts);
Vue.use(VueCardFormat);
export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    },
    theme: {
        themes: {
            light: {
                accent: '#00a368',
            },
        }
    }
});
