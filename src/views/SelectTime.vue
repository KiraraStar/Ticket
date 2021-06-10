<template>
	<div class="select">
		<el-page-header @back='goBackRe' content="选择时间">
			
		</el-page-header>
	
		<div class="select-page">
			<h3>华西————江安</h3>
			<el-date-picker
				v-model="dateValue"
				type="date"
				placeholder="选择日期"
				@change = 'docc'
				>
			</el-date-picker>
			<p id="p">没有查询结果！</p>
			<bus v-for="item in ticketInfo" :key='item' :ti='item'>
				
			</bus>
			<div style="padding-bottom: 8px;"></div>
		</div>
		<br>
		<br>
	</div>
</template>

<script>
	import Bus from '../components/Bus.vue';
	import axios from 'axios';
	export default{
		// props:
		data() {
			return{
				dateValue: '',
				postDate: '',
				select: '',
				ticketInfo: [
				],
				flag: false,
			}
		},
		mounted() {
			this.select =  this.$route.query.select;
			
		},
		methods: {
			goBackRe(){
				this.$router.go(-1);
			},
			test(){
				console.log(this.dateValue);
			},
			docc(){
				this.flag = true;
				console.log(this.flag)
			}
		},
		updated() {	
			this.postDate =  this.dateValue.getFullYear() + '-' + 
			(('0' + (this.dateValue.getMonth()+1)).slice(-2)) + '-' +
			(('0' + (this.dateValue.getDate())).slice(-2))
			
			let form = new FormData();
			form.append('section', this.select);
			form.append('date', this.postDate);
			let url = this.$store.state.urlPort + '/springboot/sftbtas';
			let that = this;
			if(this.flag === true){
				axios.post(url,form).then(res=>{
					that.ticketInfo = [];
					if(res.data.length == 0){
						document.querySelector('#p').style.display = 'block';
					}else{
						document.querySelector('#p').style.display = 'none';
					}
					for(let i=0;i< res.data.length;i++){
						console.log(i + 'is')
						// console.log(this)
						let obj = {};
						obj['time'] = res.data[i]['time'];
						obj['time1'] = res.data[i]['time'].slice(0,5) ;
						let time2 = res.data[i]['time'].slice(0,2);
						obj['time2'] = Number(time2) + 1  + res.data[i]['time'].slice(2,5) ;
						obj['price'] = res.data[i]['price']
						obj['left'] = res.data[i]['margin']
						obj['date'] = that.postDate;
						obj['section'] = that.$route.query.select;
						that.ticketInfo.push(obj);
						console.log(that.ticketInfo)
					}
					this.flag = false;
				})
			}
			console.log(this.flag)
			
			// console.log(this.ticketInfo)
		},
		components:{
			Bus,
		}
	}
</script>

<style scoped="" lang="scss">
	#p{
		display: none;
	}
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
