<template>
	<div class="select">
		<el-page-header @back='goBackRe' content="选择时间">
			
		</el-page-header>
	
		<div class="select-page">
			<h3>华西————江安</h3>
			<el-date-picker
				v-model="dateValue"
				type="date"
				placeholder="选择日期">
			</el-date-picker>
			<bus></bus>
			<div class="line"></div>
			<bus></bus>
			<div style="padding-bottom: 8px;"></div>
		</div>
		<br>
		<br>
	</div>
</template>

<script>
	import Bus from '../components/Bus.vue';
	export default{
		// props:
		data() {
			return{
				dateValue: '',
			}
		},
		methods: {
			goBackRe(){
				this.$router.go(-1);
			},
			test(){
				console.log(this.dateValue);
			}
		},
		components:{
			Bus,
		}
	}
</script>

<style scoped="" lang="scss">
	.line{
		margin: 12px auto;
		width: -webkit-calc(100%  - 20px);
		height: 1px;
		background-image: linear-gradient(to right, black 0%, black 50%, transparent 50%);
		background-size: 8px 1px;
		background-repeat: repeat-x;
	}
	h3{
		margin: 8px auto;
		padding-top: 8px;
		padding-bottom: 8px;
		background-color: #409eef;
		color: white;
		border-radius: 7px 7px 0 0;
	}
	.select{
		padding: 10px;
		background-color: #f5f6f7;
		min-height: -webkit-calc( 100vh - 20px );
	}
	.select-page{
		width: 80%;
		height: auto;
		background-color: white;
		border-radius: 7px;
		box-shadow: 2px 2px 3px #aaa;
		margin: 10px auto;
	}
</style>
<style>
	.el-date-editor{
		margin: 8px auto;
	}
	
</style>
