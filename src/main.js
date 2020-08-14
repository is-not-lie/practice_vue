import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antdComponent from './config/antd'
Vue.config.productionTip = false
Vue.use(antdComponent)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
