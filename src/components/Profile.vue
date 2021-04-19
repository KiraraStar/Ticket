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
				<div class="usr-name">usr1112</div>
				<div style="clear: both;"></div>
			</div>
			<div class="remoney">
				<div>余额<span>150</span></div>
				<div>
					<i>充值</i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
				
			}
		},
		
		methods:{
			go(){
				console.log('go');
				this.$router.push({
					name: 'Login',
				})
			}
		},
		created() {
			console.log(this.$store.state.loginStatus)
		},
		mounted() {
			document.getElementById('mainPageIndex').style.color = 'black';
			document.getElementById('profileIndex').style.color = '#409eef';
			document.getElementById('top').innerHTML = '个人中心';
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
		margin: 5px 30px;
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
</style>
<style>
	.img-pro{
		float: left;
		margin: 5px 40px;
		height: 40px;
		width: 40px;
	}
</style>
