<template>
	<div class="main-page-main">
		<div class="top-bar"></div>
		<tools></tools>
		<!-- <div class="task">
			<div style="font-weight: bolder;">计划任务</div>
			<div>暂无任务</div>
		</div> -->
		<el-collapse class="task" style="font-size: 16px;">
			<el-collapse-item title="计划任务">
				<div>
					当前有以下事务：<el-badge class="mark" value="new"></el-badge>
				</div>
				<div v-for="item in tickets" :key='item'>
					{{item.section}}  {{item.date}}  {{item.time}}
				</div>
			</el-collapse-item>
		</el-collapse>
		<div class="now-time">
			<span style="font-weight: bolder;">当前时间:</span>
			<br>
			<span id="date"></span>
		</div>
		<!-- <el-collapse class="collapse" style="font-size: 16px;">
			<el-collapse-item title="车辆时刻表">
				<div>fhahfhfah</div>
			</el-collapse-item>
		</el-collapse> -->
	</div>
</template>

<script>
	import axios from 'axios';
	// import Cookies from 'js-cookie'
	import Tools from './Tools.vue';
	export default {
		name: 'MainPage',
		data() {
			return{
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
		components: {
			Tools,
		},
		methods: {
			updateDate() {
				var date = new Date();
				var year = date.getFullYear(); //获取当前年份 
				var mon = date.getMonth() + 1; //获取当前月份 
				var da = date.getDate(); //获取当前日 
				// var day=date.getDay(); //获取当前星期几 
				var h = date.getHours(); //获取小时 
				var m = date.getMinutes(); //获取分钟 
				var s = date.getSeconds(); //获取秒 
				if (h < 10) {
					h = '0' + h;
				}
				if (m < 10) {
					m = '0' + m;
				}
				if (s < 10) {
					s = '0' + s;
				}
				var d = document.getElementById('date');
				d.innerHTML = year + '年' + mon + '月' + da + '日' + ' ' + h + ':' + m + ':' + s;
			}
		},
		mounted() {
			//获得事务
			this.tickets = [];
			if(localStorage.getItem('user') !== null){
				this.tickets = [];
				let url = this.$store.state.urlPort + '/springboot/UnUsed';
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
			
			
			this.tickets = this.$store.state.tickets;
			console.log('piao');
			console.log(this.tickets);
			document.getElementById('mainPageIndex').style.color = '#409eef';
			document.getElementById('profileIndex').style.color = 'black';
			document.getElementById('top').innerHTML = '首页';
			this.updateDate();
			this.timer = setInterval(function() {
				var date = new Date();
				var year = date.getFullYear(); //获取当前年份 
				var mon = date.getMonth() + 1; //获取当前月份 
				var da = date.getDate(); //获取当前日 
				var h = date.getHours(); //获取小时 
				var m = date.getMinutes(); //获取分钟 
				var s = date.getSeconds(); //获取秒 
				if (h < 10) {
					h = '0' + h;
				}
				if (m < 10) {
					m = '0' + m;
				}
				if (s < 10) {
					s = '0' + s;
				}
				var d = document.getElementById('date');
				d.innerHTML = year + '年' + mon + '月' + da + '日' + ' ' + h + ':' + m + ':' + s;
			}, 1000);
		},
		updated() {

		},
		unmounted() {
			clearInterval(this.timer);
		}

	}
</script>

<style lang="scss">
	.main-page-main {
		background-color: #f5f6f7;
		padding: 0 30px;
		min-height: 100vh;
	}

	.task {
		// padding: 5px;
		// text-align: left;
		// border-radius: 10px;
		// background-color: white;
		// min-height: 50px;
		// margin-bottom: 30px;
	}

	.top-bar {
		padding: 20px;
	}

	.now-time {
		text-align: left;
		background-color: white;
		border-radius: 10px;
		padding: 5px;
		margin-bottom: 30px;
	}

	.el-collapse {
		margin-bottom: 30px;
	}

	.el-collapse-item__header {
		font-weight: bolder;
		font-size: 16px;
		padding: 5px;
		border-radius: 10px 10px 0 0;
	}

	.el-collapse-item__content {
		border-radius: 10px;
	}
</style>
