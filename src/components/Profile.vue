<template>
	<div class="profile">
		<div class="head no-login" v-if="$store.state.loginStatus === false"> 
			<div @click="go">
				<el-avatar shape="square" :size="40" :src="squareUrl" class="img-pro"></el-avatar>
				<a>
					<div class="pro-login">未登录</div>
				</a>
			</div>
		</div>
		<div class="head have-login" v-if="$store.state.loginStatus === true">
			<div class="usr-info">
				<el-avatar shape="square" :size="40" :src="squareUrl" class="img-pro"></el-avatar>
				<div class="usr-name">{{name}}</div>
				<div style="clear: both;"></div>
			</div>
			<div class="remoney">
				<div>余额<span>{{pay}}</span></div>
				<div @click="rec">
					<i>充值</i>
				</div>
			</div>
			<div class="exit">
				<div @click="exit">退出登录</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Cookies from 'js-cookie';
	export default{
		data() {
			return{
				squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
				pay: '',
				name: '',
			}
		},
		
		methods:{
			go(){
				console.log('go');
				this.$router.push({
					name: 'Login',
				})
			},
			rec(){
				this.$router.push('/recharge');
			},
			exit(){
				localStorage.removeItem('name');
				localStorage.removeItem('pay');
				localStorage.removeItem('user');
				
				Cookies.remove('user');
				Cookies.remove('name');
				this.$store.commit('updateStatus',false);
				console.log('succ');
				this.$router.push('/');
			}
		},
		
		created() {
			console.log(this.$store.state.loginStatus)
		},
		mounted() {
			document.getElementById('mainPageIndex').style.color = 'black';
			document.getElementById('profileIndex').style.color = '#409eef';
			document.getElementById('top').innerHTML = '个人中心';
			console.log(this.$store.state.user);
			
			console.log('this')
			console.log(localStorage.getItem('pay'))
			console.log(localStorage.getItem('name'))
		
			this.pay = localStorage.getItem('pay');
			this.name = localStorage.getItem('name');
		}
	}
</script>

<style scoped="" lang="scss">
	.usr-name::after{
		clear: both;
	}
	/*余额*/
	.profile{
		padding-top: 8px;
	}
	.remoney{
		background-color: white;
		display: flex;
		padding: 8px 0;
		border-radius: 8px;
		margin-top: 8px;
	}
	.remoney>div{
		width: 50%;
	}
	.remoney>div:nth-child(1){
		font-weight: bolder;
		font-size: 16px;
	}
	.remoney>div:nth-child(2){
		i{
			font-style: normal;
			background-color: #409EEf;
			color: white;
			border-radius: 20px;
			padding: 4px 16px;
		}
	}
	.profile{
		background-color: #f5f6f7;
		padding: 0 30px;
		padding-top: 8px;
		min-height: 100vh;
		top: 0;
	}
	.head{
		width: 85%;
		background-color: white;
		border-radius: 7px;
		height: 50px;
		margin: 0 auto;
		box-shadow: 2px 2px 3px #aaa;
	}
	.pro-login{
		float: right;
		font-size: 18px;
		margin: 5px 30px 5px 0;
		height: 40px;
		line-height: 40px;
	}
	a>div{
		line-height: 50px;
		font-size: 25px;
		font-weight: bolder;
	}
	.usr-name{
		float: right;
		margin: 5px 30px;
		height: 40px;
		line-height: 50px;
		font-weight: bolder;
		font-size: 16px;
	}
	.exit{
		background-color: white;
		display: flex;
		padding: 12px 0;
		border-radius: 8px;
		margin-top: 8px;
		min-height: 40px;
	}
	.exit>div{
		width: 60%;
		background-color: #409eef;
		color: white;
		height: 20px;
		border-radius: 8px;
		text-align: center;
		margin: 10px auto;
		line-height: 20px;
		vertical-align: center;
	}
</style>
<style>
	.img-pro{
		float: left;
		margin: 5px 0 5px 40px;
		height: 40px;
		width: 40px;
	}
</style>
