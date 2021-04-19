<template>
	<div class="bus" @click="buyConfirm">
		<div class="bus-top">
			<div class="bus-time">
				<div>09:05</div>
				<i class="el-icon-minus"></i>
				<div>06:17</div>
			</div>
			<div class="bus-ticket"> ￥<span>5</span></div>
		</div>
		<div class="bus-bottom">
			余票10张
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Bus',
		data() {
			
		},
		methods:{
			buyConfirm(){
				this.$confirm('确认购买?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '购买成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消购买'
					});
				});
			}
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
