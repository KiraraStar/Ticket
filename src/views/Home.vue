<template>
	<div class="home">
		<div class="top" >
			<p id="top">首页</p>
		</div>
		<router-view></router-view>
		<div class="bottom">
			<div>
				<router-link to="/mainpage" id="mainPageIndex">
					<i class="el-icon-house"></i>
					<div>首页</div>
				</router-link>
			</div>
			<div>
				<router-link to='/profile' id="profileIndex">
					<i class="el-icon-user"></i>
					<div>我的</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import MainPage from '../components/MainPage.vue';
export default {
    name: 'Home',
	// components:{
	// 	MainPage,
	// }
	methods:{
		changeColor1() {
			document.getElementById('mainPageIndex').style.color = 'green';
			document.getElementById('profileIndex').style.color = 'black';
		}
	}
}
</script>
<style scoped lang="scss">
	.top{
		background-color: #409eef;
		color: white;
		p{
			width: 100%;
			height: auto;
			padding: 20px 0;
			margin: 0;
			font-size: 24px;
			font-weight: bolder;
		}
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		height: 50px;
		width: 100%;
		background-color: white;
	}
	.bottom>div{
		display: inline-block;
		height: 50px;
		width: 50%;
		font-size: 18px;
		a{
			text-decoration: none;
			i{
				line-height: 25px;
			}
			div{
				height: 25px;
				font-size: 18px;
				text-align: center;
			}
		}
	}
</style>
