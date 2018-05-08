<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-container>
			<div class="date_wrap">
				<el-date-picker 
					type="dates" 
					v-model="dateValue"
					@focus="handleFoucs" 
					placeholder="请选择选择日期">
				</el-date-picker>
			</div>
			<dl class="time_wrap">
				<dt>开市时间：</dt>
				<dd>
					<el-input v-model="formInline.userName" placeholder="开始时间" size="small"></el-input>
					<span>至</span>
					<el-input v-model="formInline.userName" placeholder="开始时间" size="small"></el-input>
				</dd>
			</dl>
			<div class="time_add">
				<el-button type="primary" @click="init" size="small">+添加</el-button>
		    	<el-button @click="handleReset" size="small">删除最后一行</el-button>
			</div>

	    </el-container>
	    <el-footer>
	    	<el-button type="primary" @click="init" size="small">保存</el-button>
		    <el-button @click="handleReset" size="small">取消</el-button>
	    </el-footer>
	</div> 
</template>
<script>
	export default {
		name: 'Index',
		data(){
			return {
				msg: '交易开闭市维护',
				formInline: {
					userName: '',
					trueUserName: '',
					departName: '',
					roleName: '',
					userStatus: ''
				},
				dateValue: []
			}
		},
		created(){
			//this.init();
		},
		methods: {
			handleSubmit(){
				console.log('sumit');
			},
			handleReset(formName){
				console.log('reset');
			},
		    init(){
				console.log('date');

				document.querySelector('.account').addEventListener('click', function(){
					console.log('ce');
					$('.el-picker-panel').show();
				})
				/*this.$axios.post('http://192.168.11.31:9001/v1/basics/access/listAccess', sParams , {
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
							if(res.status == 200){
								console.log(res);
							}
					})
					.catch(function (error) {
						console.log(error);
					})*/
		    },
		    handleFoucs(){
		    	console.log('focus');
		    },
		    handleSetDate(){
		    	this.$route.push();
		    }
		}
	}
</script>
<style scoped lang="scss">
	.date_wrap{
		width: 400px;
		height: 500px;
		border:1px solid #ccc;
		float: left;
	}
	.el-footer{
		padding: 0;
		.el-pagination{
			padding:0;
			margin: 10px 15px;
			white-space: initial;
			text-align: right;
		}
	}
</style>