import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import jQuery from 'jquery'
import { store } from './store/store.js'

axios.defaults.baseURL = "https://wd2589686601iopaay.wilddogio.com/"

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

