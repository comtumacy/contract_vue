import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: 'null',
  username: ''
}

const getters = {
  token_getters (state) {
    if (state.token === 'null') {
      if (sessionStorage.getItem('token') === null) {
        return 'null'
      } else {
        state.token = sessionStorage.getItem('token')
        return sessionStorage.getItem('token')
      }
    } else {
      return state.token
    }
  },
  username_getters (state) {
    if (state.username === '') {
      if (sessionStorage.getItem('username') === '') {
        return 'null'
      } else {
        state.username = sessionStorage.getItem('username')
        return sessionStorage.getItem('username')
      }
    } else {
      return state.username
    }
  }
}

const mutations = {
  token_mutations (state, token) {
    sessionStorage.setItem('token', token)
    state.token = token
  },
  username_mutations (state, username) {
    sessionStorage.setItem('username', username)
    state.username = username
  }
}

const actions = {
  token_actions (context, token) {
    context.commit('token_mutations', token)
  },
  username_actions (context, username) {
    context.commit('username_mutations', username)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// 导出store对象
export default store
