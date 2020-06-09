import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from '@/router';
import views from '@/views';
Vue.config.productionTip = false;
Vue.prototype.$views = views;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
