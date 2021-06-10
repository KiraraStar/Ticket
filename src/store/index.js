import {
	createStore
} from 'vuex'

export default createStore({
	state: {
		loginStatus: false,
		user: {
			name: '',
			pay: '',
		},
		tickets: [{
			date: '2021-12-06',
		}],
		urlPort : 'http://192.168.99.134:8080',
	},
	mutations: {
		updateStatus(state, bool) {
			state.loginStatus = bool;
		},
		updateTicketsStatus(state, status) {
			state.tickets = status;
		},
		updateUser(state, ter){
			console.log(ter);
			state.user.name = ter.name;
			state.user.pay = ter.sum;
		}
	},
	actions: {},
	modules: {}
})
