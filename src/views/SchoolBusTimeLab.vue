<template>
	<div class="bus-time">
		<el-page-header @back='goBackRe' content="校车时刻表">
			
		</el-page-header>
		<img src="https://imgwfw.scu.edu.cn/image/11/9684c659d0792d2ecff0c0c0e4d19461.png" alt=""/>
	</div>
</template>

<script>
	export default{
		name: 'BusTime',
		methods:{
			goBackRe() {
				this.$router.back(-1);
			}
		}
	}
</script>

<style scoped="">
	.bus-time{
		padding: 10px;
		background-color: #f5f6f7;
		min-height: calc( 100vh - 20px);
	}
	img{
		padding: 16px;
		max-width: 90%;
		margin: 0 auto;
	}
</style>
