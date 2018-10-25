import Vue from 'vue'
import Vuex from 'vuex'

import stores from './store.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  store: stores
})
export default store
