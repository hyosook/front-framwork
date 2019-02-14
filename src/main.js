import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// TODO : store처럼 전체import하기
import './plugins/vue-kindergarten.js'
import './plugins/vue-axios.js'

import metaInfo from './mixins/meta-info'
import error from './mixins/error-handler'
Vue.mixin(metaInfo, error)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
