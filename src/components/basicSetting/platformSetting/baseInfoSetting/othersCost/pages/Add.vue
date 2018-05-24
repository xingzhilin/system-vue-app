<template>
	<div id="add">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="form" :model="form" label-width="80px">
			<table class="add_table">
				<tbody>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>其他费用类型：</td>
						<td><el-input v-model="form.otherCostType" size="small"></el-input></td>
					</tr>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>状态：</td>
						<td>
							<el-radio-group v-model="form.status" size="small">
						      <el-radio label="启用"></el-radio>
						      <el-radio label="停用"></el-radio>
						    </el-radio-group>
						</td>
					</tr>
				</tbody>
			</table>
			<el-footer>
			    <el-button type="primary" @click="handleSubmitForm" size="small">保存</el-button>
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
				form: {}
			}
		},
		created(){
			this.init();
		},
		methods:{
			handleSubmitForm(){
				console.log('submit');
				console.log(this.users);
			},
			handleGoBack(){
				this.$router.go(-1);
			},
			init(){
				let _query = this.$route.query.flag,
					_id = this.$route.query.id;
				console.log(_id)
				if(_query == 'edit'){
					console.log('编辑');
				}else{
					console.log('新增');
				}
			}
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