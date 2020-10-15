import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

import user from './user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  state() { return {} },
  mutations: { },
  actions: { },
  getters: { },
  plugins: [ pathify.plugin ],
})
