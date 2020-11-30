import '@fortawesome/fontawesome-free/css/all.css'
import "material-design-icons-iconfont/dist/material-design-icons.css"
import '@mdi/font/css/materialdesignicons.css'
import 'typeface-roboto/index.css'
import Vue from 'vue'
import VueCardFormat from 'vue-credit-card-validation'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);
Vue.use(VueCardFormat);
export default new Vuetify({
    icons: {
        iconfont: 'mdi' || 'fa'
    },
    theme: {
        themes: {
            light: {
                accent: '#00a368',
            },
        }
    }
});