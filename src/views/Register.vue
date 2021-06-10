<template>
	<div class="login-main">
		<div class="return-arrow" @click="returnPrevious">
			<i class="el-icon-arrow-left"></i>
		</div>
		<div class="login"> 
			<h2>注册</h2>
			<el-form :model="ruleForm" label-width="60px" :label-position="labelPosition">
				<el-input type="text" v-model="ruleForm.account" autocomplete="off" placeholder="用户名" id="account"></el-input>
				<el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码至少六位且大写字母开头" id="password"></el-input>
				<el-input type="text" v-model="ruleForm.email" autocomplete="off" placeholder="邮箱" id="email"></el-input>
				<p class="error-p"></p>
				<div class="item">
					<button type="button" class="submit-btn primary" @click="submitForm">注册</button>
				</div>
			
			</el-form>
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
					email: '',
				},
			}
		},
		methods:{
			returnPrevious(){
				this.$router.go(-1);
			},
			submitForm(){
				let error = document.querySelector('.error-p');
				if(this.ruleForm.account === ''){
					error.style.display = 'block';
					error.innerHTML = '用户名为空！';
					return 0;
				}
				if(this.ruleForm.pass === ''){
					error.style.display = 'block';
					error.innerHTML = '密码为空！';
					return 0;
				}
				let exg = /^[A-Z]{1}[A-Za-z0-9]{5,}/;
				if(!exg.test(this.ruleForm.pass)){
					error.style.display = 'block';
					error.innerHTML = '密码格式错误！';
					return 0;
				}
				if(this.ruleForm.email === ''){
					error.style.display = 'block';
					error.innerHTML = '邮箱为空！';
					return 0;
				}
				let reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				if(!reg.test(this.ruleForm.email)){
					error.style.display = 'block';
					error.innerHTML = '邮箱格式错误！';
					return 0;
				}
				//axios
				let form = new FormData();
				form.append('account', this.ruleForm.account);
				form.append('password',this.ruleForm.pass);
				form.append('email',this.ruleForm.email);
				
				let url = this.$store.state.urlPort + '/springboot/Add';
				let that = this;
				axios.post(url,form).then(function(response){
					console.log(response);
					
					
					let ter = {};
					ter['name'] = response.data['name'];
					ter['sum'] = response.data['sum']
					that.$store.commit('updateUser',ter);
					
					localStorage.setItem('name', ter['name']);
					localStorage.setItem('pay',ter['sum']);
					localStorage.setItem('user',response.data['md5']);
					that.$store.commit('updateStatus',true);
					
					Cookies.set('name', 'login', { expires: 7, path: '/' });
					Cookies.set('user', response.data['md5'], { expires: 7, path: '/' });
					that.$router.push('/');
				})
				// this.$router.push('/profile');
			}
		}
	}
</script>

<style scoped="" lang="scss">
	.error-p{
		display: none;
		color: red;
		text-align: center;
	}
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
<style>
	.el-input__inner{
		height: 35px;
	}
</style>
