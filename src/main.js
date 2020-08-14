import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antdComponent from './components/antd'
import ajax from './config/ajax'

Vue.prototype.$ajax = ajax
Vue.config.productionTip = false
Vue.use(antdComponent)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
