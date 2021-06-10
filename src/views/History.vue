<template>
	<div class="history">
		<el-page-header @back='goBackRe' content="历史记录">

		</el-page-header>
		<div class="history-list">
			<div class="history-list-item" v-for="item in tickets" :key="item" >
				<span>{{item.date}}</span> <span>{{item.time}}</span> <span>{{item.section}}</span>
				<div class="line"></div>
			</div>
			
			
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import axios from 'axios';
	// import Cookies from 'js-cookie'
	export default {
		name: 'History',
		data(){
			return {
				tickets: [],
				box: {
					'1': '华西——江安',
					'2': '江安——华西',
					'3': '华西——望江',
					'4': '望江——华西',
					'5': '望江——江安',
					'6': '江安——望江',
				}
			}
		},
		methods: {
			goBackRe() {
				this.$router.back(-1);
			}
		},
		mounted() {
			if(localStorage.get('user') !== undefined){
				let url = this.$store.state.urlPort + '/springboot/history';
				let form = new FormData();
				form.append('account',localStorage.getItem('user'))
				axios.post(url,form).then(res=>{
					this.tickets = []
					console.log(res);
					for(let i in res.data){
						let obj = {};
						obj['section'] = this.box[res.data[i]['section']];
						obj['date'] = res.data[i]['date'];
						obj['time'] = res.data[i]['time'].slice(0,5);
						this.tickets.push(obj);
					}
				})
			}
			
			
			$('.line').eq(-1).css({
				display: 'none',
			})
			
			
		},
		updated() {
			// document.querySelector('.line:nth-last-child').style.display = 'none';
			console.log('updated');
		}
	}
</script>

<style scoped="">
	.history {
		padding: 10px;
		background-color: #f5f6f7;
		min-height: calc(100vh - 20px);
	}

	.history-list {
		padding: 0 0;
		margin: 16px auto;
		width: 80%;
		background-color: white;
		border-radius: 8px;
	}

	.history-list-item {
		margin: 4px 0;
		padding: 4px 0;
		overflow: hidden;
		display: block;
	}

	.history-list-item>span:nth-child(1) {
		color: cornflowerblue;

	}

	.history-list-item>span:nth-child(2) {
		color: red;
	}

	.line {
		margin: 0 auto;
		margin-bottom: 0;
		width: -webkit-calc(100% - 20px);
		height: 1px;
		background-image: linear-gradient(to right, black 0%, black 50%, transparent 50%);
		background-size: 8px 1px;
		background-repeat: repeat-x;
	}
</style>
