import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

const state = () => ({
  error: ''
})
const getters = {
  isError: _state => _state.error
}

const mutations = {
  SET_ERROR (_state, payload) {
    _state.error = payload // TODO : status에 따른 표현
  }
}
const store = new Vuex.Store({
  modules,
  state,
  getters,
  mutations
})

export default store
