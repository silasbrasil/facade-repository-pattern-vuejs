import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company: {
      id: 1
    }
  },
  getters: {
    company: state => state.company
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
