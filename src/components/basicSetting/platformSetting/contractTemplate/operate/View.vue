<template>
	<div class="edit">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<table class="add_table">
			<tbody>
				<tr>
					<td class="td_label"><span class="zl_required">*</span>合同名称：</td>
					<td>{{form.name}}</td>
				</tr>
				<tr>
					<td class="td_label"><span class="zl_required">*</span>合同别名：</td>
					<td>{{form.name}}</td>
				</tr>
				<tr>
					<td class="td_label"><span class="zl_required">*</span>合同使用类型：</td>
					<td>
						{{form.name}}
					</td>
				</tr>
				<tr>
					<td class="td_label">对应业务类型：</td>
					<td>
						{{form.name}}
					</td>
				</tr>
				<tr>
					<td class="td_label">合同简介：</td>
					<td>{{form.name}}</td>
				</tr>
				<tr>
					<td class="td_label"><span class="zl_required">*</span>上传附件：</td>
					<td>
						{{form.name}}
						<!-- <el-upload
						  class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview=""
						  :on-remove=""
						  :before-remove=""
						  multiple
						  :limit="3"
						  :on-exceed=""
						  :file-list="">
						  <el-button size="small" type="primary">点击上传</el-button>
						  <div slot="tip" class="el-upload__tip">只能上传后缀名为htm的文件！</div>
						</el-upload> -->
					</td>
				</tr>
				<tr>
					<td class="td_label"><span class="zl_required">*</span>使用范围设置：</td>
					<td class="td_text">
						{{form.name}}
					</td>
				</tr>
				<tr>
					<td class="td_label">指定交割库：</td>
					<td class="td_text">
						{{form.name}}
					</td>
				</tr>
				<tr>
					<td class="td_label">停/启用状态：</td>
					<td class="td_text">
						{{form.name}}
					</td>
				</tr>
			
			</tbody>
		</table>
		<el-footer>
		    <el-button @click="handleGoBack()" size="small">返回</el-button>
		</el-footer>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg: '合同模板查看',
				form: {
					name: 1
				},
			}
		},
		methods:{
			handleGoBack(){
				this.$router.push({name:'contractOperateLink'});
			}
		}
	}
</script>
<style lang="scss">	
	@import './../../../../../assets/css/table_view.css';
	.edit{
		.zl_required{
			color: gray;
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