import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common_view.css'
import jQuery from 'jquery'
import { store } from './store/store.js'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
Vue.prototype.$http = axios
axios.defaults.baseURL = "https://wd2589686601iopaay.wilddogio.com/"

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

Vue.use(vueEventCalendar, {locale: 'en'}) 
Vue.use(ElementUI)
window.eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

