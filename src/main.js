import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// start 引入loading
import loading from './loading/index';
import './style/loading.scss';
loading.install(Vue)
// end
new Vue({
  render: h => h(App),
}).$mount('#app')
