<!-- 
	购买选票的区间
	用1-6来标识
 -->
<template>
	<div class="purchase">
		<el-page-header @back='goBack' content="购买车票">
			
		</el-page-header>
		<div class="choose-position">
			<div class="c-board">
				<div class="c-header">
					<i>区间</i>
				</div>
				<div class="c-tri"></div>
			</div>
			
			<div class="c-content">
				<div class="trans-position">
					<div >
						<el-radio 

						v-model="radio" style="display: inline-block;float: left;width: 10%;margin-top: 4px;margin-right: 0;" name="radio1" label='1' class="is-focus" 
						@click = 'cli'></el-radio>
						<div>
							<i id="huaxi1">华西</i>
							<i class="el-icon-refresh" @click="changePosition1"></i>
							<i id="jiangan1">江安</i>
						</div>
						<div style="clear: both;"></div>
					</div>
				</div>
				<div class="line"></div>
				<div class="trans-position">
					<div>
						<el-radio v-model="radio" style="display: inline-block;float: left;width: 10%;margin-top: 4px;margin-right: 0;" name="radio2" label='3' 
						@click = 'cli'></el-radio>
						<div>
							<i id="huaxi2">华西</i>
							<i class="el-icon-refresh" @click="changePosition2"></i>
							<i id="wangjiang2">望江</i>
						</div>
						<div style="clear: both;"></div>
					</div>
				</div>
				<div class="line"></div>
				<div class="trans-position">
					<div>
						<el-radio v-model="radio" style="display: inline-block;float: left;width: 10%;margin-top: 4px;margin-right: 0;" name="radio3" label='5' 
						@click = 'cli'></el-radio>
						<div>
							<i id="wangjiang3">望江</i>
							<i class="el-icon-refresh" @click="changePosition3"></i>
							<i id="jiangan3">江安</i>
						</div>
						<div style="clear: both;"></div>
					</div>
				</div>
				<button class="btn-purchase" id="btnSearch" @click="btnSearch">查询</button>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				transBox: {
					'box1': false,
					'box2': false,
					'box3': false,
				},
				radio: '1',
				chooseInterval: 1,
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},			
			changePosition1(){
				if(this.radio == 1){
					if(this.transBox.box1 === false){
						document.getElementById('huaxi1').style.float = 'right';
						document.getElementById('jiangan1').style.float = 'left';
						this.chooseInterval = 2;
						this.transBox.box1 = true;
						console.log(this.chooseInterval);
					}else{
						document.getElementById('huaxi1').style.float = 'left';
						document.getElementById('jiangan1').style.float = 'right';
						this.chooseInterval = 1;
						this.transBox.box1 = false;
						console.log(this.chooseInterval);
					}
				}
			},
			changePosition2(){
				if(this.radio == 3){
					if(this.transBox.box2 === false){
						document.getElementById('huaxi2').style.float = 'right';
						document.getElementById('wangjiang2').style.float = 'left';
						this.chooseInterval = 4;
						this.transBox.box2 = true;
						console.log(this.chooseInterval);
					}else{
						document.getElementById('huaxi2').style.float = 'left';
						document.getElementById('wangjiang2').style.float = 'right';
						this.chooseInterval = 3;
						this.transBox.box2 = false;
						console.log(this.chooseInterval);
					}
				}
			},
			changePosition3(){
				if(this.radio == 5){
					if(this.transBox.box3 === false){
						document.getElementById('wangjiang3').style.float = 'right';
						document.getElementById('jiangan3').style.float = 'left';
						this.chooseInterval = 6;
						this.transBox.box3 = true;
						console.log(this.chooseInterval);
					}else{
						document.getElementById('wangjiang3').style.float = 'left';
						document.getElementById('jiangan3').style.float = 'right';
						this.chooseInterval = 5;
						this.transBox.box3 = false;
						console.log(this.chooseInterval);
					}
				}
			}
		},
		mounted() {
			var that = this;
			document.querySelector('#btnSearch').onclick = function() {
				if(that.radio == 1 && that.chooseInterval != 1 && that.chooseInterval != 2){
					that.transBox.box1 === false ? that.chooseInterval = 1 :that.chooseInterval = 2;
					that.$router.push({path: '/purchase/time', query:{select: that.chooseInterval}});
				}
				if(that.radio == 3 && that.chooseInterval != 3 && that.chooseInterval != 4){
					that.transBox.box1 === false ? that.chooseInterval = 3 :that.chooseInterval = 4;
					that.$router.push({path: '/purchase/time', query:{select: that.chooseInterval}});
				}
				if(that.radio == 5 && that.chooseInterval != 5 && that.chooseInterval != 6){
					that.transBox.box1 === false ? that.chooseInterval = 5 :that.chooseInterval = 6;
					that.$router.push({path: '/purchase/time', query:{select: that.chooseInterval}});
				}
				that.$router.push({path: '/purchase/time', query:{select: that.chooseInterval}});
				console.log(that.radio)
			}
		},
		updated() {
			console.log(this.chooseInterval);
		},
		
	}
</script>

<style lang="scss" scoped=""> 
	
	.line{
		margin: 20px auto;
		margin-bottom: 0;
		width: -webkit-calc(100%  - 20px);
		height: 1px;
		background-image: linear-gradient(to right, black 0%, black 50%, transparent 50%);
		background-size: 8px 1px;
		background-repeat: repeat-x;
	}
	.trans-position{
		margin-top: 16px;
	}
	.trans-position>div{
		
		margin-bottom: 20px;
	}
	.trans-position>div>div{
		box-sizing: border-box;
		margin: 0 40px;
	}
	.trans-position:nth-child(1){
		margin-top: 10px;
	}
	.trans-position i:nth-child(1){
		float: left;
		font-size: 20px;
		font-weight: bolder;
	}
	.trans-position i:nth-child(2){
		color: #409eef;
		font-size: 20px;
		font-weight: bolder;
	}
	.trans-position i:nth-child(3){
		float: right;
		font-size: 20px;
		font-weight: bolder;
	}
	i{
		font-style: normal;
	}
	.purchase{
		padding: 10px;
		background-color: #f5f6f7;
		min-height: calc(100vh - 20px);
	}
	.c-board{
		opacity: .8;
		box-sizing: border-box;
		background-color: #aaa;
		width: 100%;
		height: auto;
		border-radius: 7px 7px 0 0;
		padding: 5px;
		padding-bottom: 0;
		border: 0;
	}
	.choose-position{
		width: 80%;
		height: auto;
		background-color: white;
		border-radius: 7px;
		box-shadow: 2px 2px 3px #aaa;
		margin: 16px auto;
		
		.c-header{
			i{
				font-style: normal;
			}
			position: relative;
			margin: 0;
			text-align: left;
			font-weight: bolder;
			background-color: #409eef;
			border-radius: 20px;
			width: 30%;
			font-size: 20px;
			padding: 3px;
			color: white;
			text-align: center;
			padding: 5px;	
		}
	}
	.c-content{
		position: relative;
		padding: 10px;
		padding-bottom: 20px;
	}
	.c-tri{
		// width: 0;
		// height: 0;
		// left: 0;
		// bottom: 0;
		// // transform: translate(100%,-50%);
		// border-top-color: black;
		// border-top-width: 10px;
		// border-top-style: solid;
		width: 0;
		height:0;
		margin-left: 35px;
		border-left:8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 8px solid white; 
	}
	.btn-purchase{
		display: inline-block;
		line-height: 1;
		min-height: 20px;
		white-space: nowrap;
		cursor: pointer;
		background: #FFF;
		color: #606266;
		-webkit-appearance: none;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		outline: 0;
		margin: 0;
		-webkit-transition: .1s;
		transition: .1s;
		font-weight: 500;
		padding: 3px 5px;
		font-size: 18px;
		border-radius: 16px;
		color: #FFF;
		background-color: #409EFF;
		// border-color: #409EFF;
		border: none;
		line-height: 26px;
		margin: 0 8px;
		width: 90%;
		text-align: center;
	}
	.btn-purchase:hover{
		background: #66b1ff;
		border-color: #66b1ff;
		color: #FFF;
		
	}
</style>
<style>
	.el-radio__label{
		display: none !important;
	}
</style>
