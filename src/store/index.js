import { createStore } from 'vuex'

export default createStore({
  state: {
	loginStatus: false,
  },
  mutations: {
	updateStatus(state,bool){
		state.loginStatus = bool;
	}
  },
  actions: {
  },
  modules: {
  }
})
