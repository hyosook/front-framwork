import Vue from 'vue'
import Axios from 'axios'
import Cookies from 'js-cookie'

Vue.prototype.$http = Axios

const accessToken = Cookies.get('accessToken')
if (accessToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}
