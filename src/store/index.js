import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events:{}
  },
  getters:{
    events (state) {
      return state.events
    }
  },
  mutations: {
    fetchEvents(state, payload) {
      state.events = payload
    }
  },
  actions: {
    fetchEvents({ commit }) {
      axios.get(process.env.BASE_URL + 'bts.json').then(response => {
        console.log(response)
          commit("fetchEvents", response.data)
        })
    
    }
  }
})
