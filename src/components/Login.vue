<template>
	<div class="login-main">
		<div class="return-arrow" @click="returnPrevious">
			<i class="el-icon-arrow-left"></i>
		</div>
		<div class="login"> 
			<h2>欢迎使用校车购票系统</h2>
			<el-form :model="ruleForm" label-width="60px" :label-position="labelPosition">
				<el-input type="text" v-model="ruleForm.account" autocomplete="off" placeholder="用户名"></el-input>
				<el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码"></el-input>
				<div class="forget"><span>忘记密码？</span></div>
				
				<div class="item">
					<button type="button" class="submit-btn primary" @click="submitForm('ruleForm')">登录</button>
					<!-- <button type="button" class="submit-btn" @click="resetForm('ruleForm')">重置</button> -->
				</div>
			</el-form>
			<div class="sign-up">
				<span>没有账号？</span><span @click="goRegister">立即注册</span>
			</div>
		</div>
		
	</div>
</template>


<script>
	import axios from 'axios';
	import Cookies from 'js-cookie';
	export default{
		data(){
			return{
				labelPosition: 'left',
				ruleForm: {
					account: '',
					pass: '',
				},
			}
		},
		methods:{
			submitForm() {
				console.log(this.ruleForm);
				// let that = this;
				if(this.ruleForm.account === 'test' && this.ruleForm.pass === 'test'){
					this.$store.commit('updateStatus',true);
					Cookies.set('name', 'login', { expires: 7, path: '/' });
					this.$router.push('/profile');
					return 0;
				}
				let form = new FormData();
				form.append('account', this.ruleForm.account);
				form.append('password',this.ruleForm.pass);
				let url = this.$store.state.urlPort + '/springboot/login';
				let that = this;
				axios.post(url,form).then(function(response){
					console.log(response);
					console.log(response.data['LoginCode']);
					
					if(response.data['LoginCode'] == 1){
						that.$store.commit('updateStatus',true);
						let ter = {};
						ter['name'] = response.data['name'];
						ter['sum'] = response.data['sum']
						that.$store.commit('updateUser',ter);
						
						//此处保存了md5码
						localStorage.setItem('name', ter['name']);
						localStorage.setItem('pay',ter['sum']);
						localStorage.setItem('user',response.data['md5']);
						
						Cookies.set('name', 'login', { expires: 7, path: '/' });
						Cookies.set('user', response.data['md5'], { expires: 7, path: '/' });
						that.$router.push('/profile');
					}
					// that.$store.commit('updateStatus',true);
					// Cookies.set('name', 'login', { expires: 7, path: '/' });
					// that.$router.push('/profile');
				})
				// let form = new FormData();
				// form.append('account', 'zbw');
				// form.append('password','123');
				// axios.post('http://192.168.99.134:8080/springboot/login',form).then(function(res){
				// 	console.log(res);
				// })
			},
			resetForm() {
				this.resetFields();
			},
			resetFields() {
				for(let i in this.ruleForm){
					this.ruleForm[i] = '';
				}
			},
			returnPrevious(){
				this.$router.go(-1);
			},
			goRegister(){
				this.$router.push('/register');
			}
		}
	}
</script>

<style scoped lang="scss">
	.login-main{
		position: relative;
		background-color: #f5f6f7;
		height: 100vh;
		overflow: hidden;
	}
	.return-arrow{
		margin-top: 20px;
		margin-bottom: 50px;
		width:60px;
		height: 60px;
		i{
			line-height: 60px;
			text-align: center;
			font-size: 26px;
		}
	}
	.login{
		box-sizing: border-box;
		width: 80%;
		margin: 0 auto;
		background-color: white;
		padding: 20px;
		border-radius: 7px;
		box-shadow: 2px 2px 3px #aaaaaa;
	}
	.el-form{
		margin: 0 auto;
		
	}
	.el-input{
		margin-bottom: 20px;
		width: 100%;
	}
	.item{
		
	}
	.forget{
		text-align: right;
		margin-bottom: 20px;
	}
	.submit-btn{
		width: 60%;
		display: inline-block;
		line-height: 1;
		min-height: 40px;
		white-space: nowrap;
		cursor: pointer;
		background: lightgray;
		color: #606266;
		-webkit-appearance: none;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		outline: 0;
		margin: 0 10px;
		-webkit-transition: .1s;
		transition: .1s;
		font-weight: 500;
		padding: 12px 20px;
		font-size: 20px;
		line-height: 20px;
		height: 20px;
		vertical-align: center;
		border-radius: 15px;
		border: none;
	}
	.submit-btn:focus,.submit-btn:hover{
		color: #409EFF;
		border-color: #c6e2ff;
		background-color: #ecf5ff;
	}
	.primary{
		color: #FFF;
		background-color: #409EFF;
		border-color: #409EFF;
	}
	.primary:focus,.primary:hover{
		background: #66b1ff;
		border-color: #66b1ff;
		color: #FFF;
	}
	.sign-up{
		margin-top: 20px;
		font-size: 17px;
	}
	.sign-up>span{
		vertical-align: top;
	}
	.sign-up>span:nth-child(2){
		
		color: #409eef;
	}
</style>
