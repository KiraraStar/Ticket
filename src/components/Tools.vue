<template>
	<div class="tools">
		<div class="purchase" @click="goBuy">
			<i class="el-icon-s-ticket"></i>
			<div>购买</div>
		</div>
		<div class="history" @click="goHistory">
			<i class="el-icon-refresh"></i>
			<div>历史</div>
		</div>
		<div class="check" @click="goTime">
			<i class="el-icon-search"></i>
			<div>查看</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Tools',
		data() {
			
		},
		methods:{
			goBuy(){
				this.$router.push('/purchase');
			},
			goTime() {
				this.$router.push('/bus/time');
			},
			goHistory() {
				this.$router.push('/history');
			}
		}
	}
</script>

<style scoped lang="scss">
	.tools{
		padding: 10px;
		border-radius: 10px;
		margin-bottom: 30px;
		background-color: white;
	}
	.tools>div{
		i{
			color: #409eef;
			line-height: 25px;
		}
		div{
			line-height: 25px;
		}
		box-sizing: border-box;
		padding: 10px;
		display: inline-block;
		width: 33.3%;
		height: 50px;
	}
</style>
