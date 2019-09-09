import Vue from 'vue'
import Vuex from 'vuex'
import News from './new'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    modules: {
      news: News
    }
  })
