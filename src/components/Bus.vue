<template>
	<div class="bus" @click="buyConfirm">
		<div class="bus-top">
			<div class="bus-time">
				<div>{{ti.time1}}</div>
				<i class="el-icon-minus"></i>
				<div>{{ti.time2}}</div>
			</div>
			<div class="bus-ticket"> ￥<span>{{ti.price}}</span></div>
		</div>
		<div class="bus-bottom">
			余票{{left}}张
		</div>
		<div class="line"></div>
	</div>
</template>

<script>
	import axios from 'axios';
	// import Cookies from 'js-cookie';
	export default{
		name: 'Bus',
		props:['ti'],
		data() {
			return{
				like: '',
				left: 0,
			}
		},
		methods:{
			buyConfirm(){
				this.$confirm('确认购买?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					// console.log(this.$store.state.loginStatus);
					console.log(localStorage.getItem('user'));
					if((localStorage.getItem('user') == null)){
						this.$message({
							type: 'info',
							message: '未登录!'
						});
					}else{
						let form = new FormData();
						form.append('account',localStorage.getItem('user'));
						form.append('date',this.ti.date);
						form.append('time',this.ti.time);
						form.append('section',this.ti.section);
						let url = this.$store.state.urlPort + '/springboot/BuyTicket';
						console.log('post')
						axios.post(url,form).then(res=>{
							if(res.data['Buycode'] == 1){
								this.left = this.left - 1;
								this.$message({
									type: 'success',
									message: '购买成功!'
								});
							}else if (res.data['Buycode'] == 5){
								this.$message({
									type: 'info',
									message: '已经购买当前车次的票!'
								});
							}
							else if (res.data['Buycode'] == 2){
								this.$message({
									type: 'info',
									message: '余额不足!'
								});
							}else if (res.data['Buycode'] == 3){
								this.$message({
									type: 'info',
									message: '余票不足!'
								});
							}
							
						})
						
					}
					
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消购买'
					});
				});
			}
		},
		mounted() {
			console.log(this.ti)
			this.left = Number(this.ti.left)
		}
	}
</script>

<style scoped="" lang="scss">
	.line{
		margin: 20px auto;
		margin-bottom: 0;
		width: -webkit-calc(100%  - 20px);
		height: 1px;
		background-image: linear-gradient(to right, black 0%, black 50%, transparent 50%);
		background-size: 8px 1px;
		background-repeat: repeat-x;
	}
	.bus{
		margin: 8px 4px;
		border-radius: 7px;
		background-color: white;
		font-size: 20px;
		
	}
	.bus-top{
		height: 30px;
		line-height: 30px;
	}
	.bus-time{
		float: left;
		width: 80%;
	}
	.bus-time>div{
		font-weight: bolder;
		width: 40%;
		float: left;
	}
	.bus-time>div:nth-child(1){
		color: #409EEF;
	}
	.bus-time>i{
		margin-top: 5px;
		width: 20%;
		float: left;
	}
	.bus-ticket{
		float: right;
		width: 20%;
		span{
			font-weight: bolder;
		}
	}
	.bus-bottom{
		font-size: 16px;
	}
</style>
<style>
	.el-message-box{
		width: 90%;
		margin: 50% auto;
	}
</style>
