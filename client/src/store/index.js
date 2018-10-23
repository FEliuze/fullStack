/**
 * Created by xufengchao on 16/8/24.
 */
import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import utils from './utils'
import * as types from './mutations'
import domainLogo from '../assets/images/logo.png'

Vue.use(Vuex)
Vue.prototype.VuexUtils = utils
Vue.prototype.VuexMutations = types

const state = {
  testData: null,
  domainLogo,
  domainTitle: 'system manager',
  domainId: null,
  status: {
    testData: {
      update: null
    }
  }
}

const mutations = {
  setDomainLogoAndDomainTitle (state) {
    state.domainTitle = localStorage.getItem('domainTitle')
    state.domainLogo = localStorage.getItem('domainLogo')
  },
  [types.TEST_DATA_UPDATE_SUCCESS] (state, data) {
    state.testData = data
    utils.setStatus(state, 'testData.update', types.TEST_DATA_UPDATE_SUCCESS)
  },
  [types.TEST_DATA_UPDATE_FAILED] (state) {
    utils.setStatus(state, 'testData.update', types.TEST_DATA_UPDATE_FAILED)
  }
}

export default new Vuex.Store({
  strict: true,
  state,
  mutations
})
