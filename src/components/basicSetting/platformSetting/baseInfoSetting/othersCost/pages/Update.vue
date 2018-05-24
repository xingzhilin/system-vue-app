<template>
	<div id="add">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="form" :model="form" :rules="rules" :label-position="isPc==true?'right':'top'" :inline-message="true"  label-width="180px" >
			<el-form-item label="其他费用类型：" prop="otherCostType">			  	
		        <el-input v-model="form.otherCostType" size="small"></el-input>
			</el-form-item>
			<el-form-item label="状态：" prop="status">			  	
		        <el-radio-group v-model="form.status" size="small">
			      <el-radio :label="1">启用</el-radio>
			      <el-radio :label="0">停用</el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-footer>
			    <el-button type="primary" @click="handleSubmitForm('form')" size="small">保存</el-button>
			    <el-button @click="handleGoBack" size="small">取消</el-button>
			</el-footer>
		</el-form>
	</div>
</template>
<script>
	//import eventBus from './../../../../../api/eventBus.js';
	export default{
		data(){
			
			return {
				msg: '其他费用类型',
				isDisabled: false,
				form: {
					status: 1
				},				
				rules: {
					otherCostType: [
						{ required: true, message: '化验费用类型', trigger: 'blur' },
						{ 
							validator: (rule, value, callback)=>{
								console.log(value);  // 输入的值
								return callback()  //必须return 才能通过
								// callback(new Error('用户名已存在'));//抛出校验错误提示
							}, 
							trigger: 'blur' 
						}
					],
					status: [
			            { required: true, message: '请选择状态', trigger: 'change' }
			        ],
				}
			}
		},			
		computed:{
			isPc(){
				return this.$store.getters.isPc
			}
		},
		created(){
			this.init();
		},
		methods:{
			handleSubmitForm(form){
				this.$refs[form].validate((valid) => {
					if (valid) {
						this.isDisabled = true;
						let sParams = JSON.stringify(form);
						this.$axios.post('/api/v1/admin/basics/contract', sParams , {
								headers:{ "Content-Type": "application/json"}
							})
							.then(res =>  {
									console.log(res);
									if(res.data.status == 200){
										this.$message({
								          showClose: true,
								          message: '恭喜您已经成功提交！',
								          type: 'success',
								          duration: 2000,
								          onClose: () => {
								        	this.$router.push({name:'contractOperateListLink'});
								          }
								        });
									}
							})
							.catch(function (error) {
								console.log(error);
							})
					} else {
						console.log('error submit!!');
						return false;
					}
				})
			},
			handleGoBack(){
				this.$router.go(-1);
			},
			init(){
				let tempCode = this.$route.query.tempCode;
				this.$axios.get('/api/v1/admin/basics/contract/' + tempCode,{
					headers:{ "Content-Type": "application/json"}
				})
				.then(res => {
					console.log('******************************')
					console.log(res)
					if(res.data.status == 200){
						this.formData = res.data.result;
					}
				})
				.catch(function (error) {
					console.log(error);
				})



			},
		}
	}
</script>
<style lang="scss">	
	//@import './../../../../../assets/css/table_view.css';
	#add{
		.zl_required{
			color: red;
		}
		.add_table{
			width: 80%;
			margin: 30px auto;
			font-size:12px;
			td{
				border: 1px solid #ebeef5;
				padding: 10px;
				text-align: left;
			}
			.td_label{
				width: 160px;
				text-align:right;
				vertical-align: top;
   				line-height: 40px;
			}
			.el-input{
				width: 260px;
			}
			.td_button{
				text-align: center;
			}
			.btn_insert{
				margin-left: 15px;
			}
			.hc_wrap{
				padding:5px 0 0 0;
				margin:0;
				li{
					display: flex;
					box-sizing: border-box;
					margin-bottom: 10px;
					cursor: pointer;
				}

			}
			.hc_wrap:after{				
				display:block;
				content: '';
				clear: both;
				cursor: pointer;
			}
			.img_wrap{
				li{
					display: flex;
					box-sizing: border-box;
					float:left;
					margin-right: 10px;
					cursor: pointer;
				}

			}
			.img_wrap:after{
				display:block;
				content: '';
				clear: both;
				cursor: pointer;
			}
			.font_margin{
				padding: 0 10px;
			}			
			.step2_money{
				margin: 0;
				margin-bottom: 10px;
			}
		}
		.el-dialog__header{
			padding: 15px 20px 10px;
		}
		.el-dialog__body{
		    padding: 10px 20px;
		    color: #606266;
		    line-height: 24px;
		    font-size: 14px;
		    border-top: 1px solid #e2e2e2;
		    margin-top: 5px;		    
			.dw_insert{
				padding: 0;
				margin: 0;
				font-size: 14px;
				padding-bottom:10px;
			}
		}
		.el-footer{
			text-align: center;
		}		
		.el-transfer{
			width: 600px;
			margin: 15px auto;
			.el-transfer-panel{
				width:245px;
			}
		}
	}
</style>