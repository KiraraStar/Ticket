<template>
	<div class="recharge-a">
		<el-page-header @back='goBackRe' content="充值">

		</el-page-header>
		<div class="bg-g">
			<label for="recharge">充值金额</label>
			<br>
			<input name="recharge" type="text" id="recharge" v-model="money" />
			<br>
			<button @click="rec">确认</button>
		</div>

	</div>
</template>

<script>
	import axios from 'axios';
	// import Cookies from 'js-cookie'
	export default {
		data() {
			return {
				money: '0',
			}
		},
		methods: {
			goBackRe() {

				this.$router.go(-1);

			},
			rec() {
				let form = new FormData();
				form.append('account', localStorage.getItem('user'));
				form.append('money', this.money)
				let url = this.$store.state.urlPort + '/springboot/recharge';

				axios.post(url, form).then(res => {
					if(res.data['RechargeCode'] == 1){
						localStorage.setItem('pay', res.data['Sum']);
						this.$message({
							type: 'success',
							message: '充值成功!'
						});
					}
					setTimeout(()=>{
						this.$router.push('/profile')
					},500)
				})
				
			}
		}
	}
</script>

<style scoped="">
	label {
		font-size: 20px;
		color: black;
	}

	.bg-g {
		padding: 10px;
		border-radius: 10px;
		margin: 30px auto;
		background-color: white;
	}

	#recharge {
		padding: 0;
		margin: 20px;
		border: 1px solid #6495ED;
		width: 100px;
	}

	.recharge-a {
		padding: 10px;
		background-color: #f5f6f7;
		min-height: calc(100vh - 20px);
	}

	button {
		/* 文字颜色 */
		color: #0099CC;
		/* 清除背景色 */
		background: transparent;
		/* 边框样式、颜色、宽度 */
		border: 2px solid #0099CC;
		/* 给边框添加圆角 */
		border-radius: 6px;
		/* 字母转大写 */
		border: none;
		color: white;
		padding: 4px 20px;
		text-align: center;
		display: inline-block;
		font-size: 20px;
		margin: 4px 2px;
		-webkit-transition-duration: 0.4s;
		/* Safari */
		transition-duration: 0.4s;
		cursor: pointer;
		text-decoration: none;
		text-transform: uppercase;
	}

	button {
		background-color: white;
		color: #6495ED;
		border: 2px solid #008CBA;
	}

	/* 悬停样式 */
	button:hover {
		background-color: #008CBA;
		color: white;
	}
</style>
