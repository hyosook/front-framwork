import axios from 'axios'
import Cookies from 'js-cookie'
// TODO : 공통 로그인/아웃 처리 FUNC
const state = () => ({
  accessToken: Cookies.get('accessToken') || '',
  user: Cookies.get('user') || null
})

const getters = {
  authStatus: _state => _state.status,
  isUser: _state => Boolean(_state.accessToken) && Boolean(_state.user),
  isGuest: _state => !_state.accessToken,
  isAuthenticated: _state => Boolean(_state.accessToken),
  loggedInUser: _state => _state.user
}

const mutations = {
  SET_ACCESS_TOKEN (_state, accessToken) {
    _state.accessToken = accessToken
  },
  SET_USER (_state, user) {
    _state.user = user
  },
  LOGOUT (_state) {
    _state.status = ''
    _state.accessToken = null
    _state.user = null
  }
}

const actions = {
  login ({ commit }, user) {
    return new Promise((resolve, reject) => {
      axios({
        url: 'http://localhost:3000/login',
        data: user,
        method: 'POST'
      })
        .then(resp => {
          const accessToken = resp.data.accessToken
          const user = resp.data.user
          commit('SET_ACCESS_TOKEN', accessToken)
          commit('SET_USER', user)
          Cookies.set('accessToken', accessToken, {
            expires: 1
          })
          Cookies.set('user', user, { expires: 1 })
          axios.defaults.headers.common['Authorization'] = accessToken
          resolve(resp)
        })
        .catch(err => {
          commit('SET_ERROR', err, { root: true }) // root에 접근
          commit('LOGOUT')
          delete axios.defaults.headers.common['Authorization']
          Cookies.remove('accessToken')
          Cookies.remove('user')
          reject(err)
        })
    })
  },
  register ({ commit }, user) {
    return new Promise((resolve, reject) => {
      axios({
        url: 'http://localhost:3000/register',
        data: user,
        method: 'POST'
      })
        .then(resp => {
          const accessToken = resp.data.accessToken
          const user = resp.data.user
          commit('SET_ACCESS_TOKEN', accessToken)
          commit('SET_USER', user)
          Cookies.set('accessToken', accessToken, {
            expires: 1
          })
          Cookies.set('user', user, { expires: 1 })
          axios.defaults.headers.common['Authorization'] = accessToken
          resolve(resp)
        })
        .catch(err => {
          commit('SET_ERROR') //
          commit('LOGOUT')
          delete axios.defaults.headers.common['Authorization']
          Cookies.remove('accessToken')
          Cookies.remove('user')
          reject(err)
        })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('LOGOUT')
      delete axios.defaults.headers.common['Authorization']
      Cookies.remove('accessToken')
      Cookies.remove('user')
      resolve()
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
