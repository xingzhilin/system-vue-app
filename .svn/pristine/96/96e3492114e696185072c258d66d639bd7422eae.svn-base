<template>
	<div class="edit">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="form" :model="form" label-width="80px">
			<table class="add_table">
				<tbody>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>合同名称：</td>
						<td><el-input v-model="form.name" size="small"></el-input></td>
					</tr>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>合同别名：</td>
						<td><el-input v-model="form.name" size="small"></el-input></td>
					</tr>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>合同使用类型：</td>
						<td>
							<el-select v-model="form.region" placeholder="请选择" size="small">
						      <el-option label="北方港" value="shanghai"></el-option>
						      <el-option label="南方港" value="beijing"></el-option>
						    </el-select>
						</td>
					</tr>
					<tr>
						<td class="td_label">对应业务类型：</td>
						<td>
							<el-checkbox-group v-model="form.checkList">
							    <el-checkbox label="定期招标（定价）"></el-checkbox>
							    <el-checkbox label="定期招标（竞价）"></el-checkbox>
							</el-checkbox-group>
						</td>
					</tr>
					<tr>
						<td class="td_label">合同简介：</td>
						<td><el-input v-model="form.name" size="small"></el-input></td>
					</tr>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>上传附件：</td>
						<td>
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
							<el-checkbox-group v-model="form.checkList">
							    <el-checkbox label="金银岛后台发布报盘"></el-checkbox>
							    <el-checkbox label="专享企业"></el-checkbox>
							</el-checkbox-group>
							<el-select v-model="form.region" placeholder="请选择企业" size="small">
						      <el-option label="北方港" value="shanghai"></el-option>
						      <el-option label="南方港" value="beijing"></el-option>
						    </el-select>
						</td>
					</tr>
					<tr>
						<td class="td_label">指定交割库：</td>
						<td class="td_text">
							按shift多选或取消选择
						</td>
					</tr>
					<tr>
						<td class="td_label">停/启用状态：</td>
						<td class="td_text">
							<el-radio-group v-model="form.resource" size="small">
						      <el-radio label="启用"></el-radio>
						      <el-radio label="停用"></el-radio>
						    </el-radio-group>
						</td>
					</tr>
				
				</tbody>
			</table>
			<el-footer>
			    <el-button type="primary" @click="handleSubmitForm('form')" size="small">保存</el-button>
			    <el-button @click="handleGoBack('form')" size="small">取消</el-button>
			</el-footer>
		</el-form>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg: '合同模板编辑',
				form: {},
			}
		},
		methods:{
			handleSubmitForm(){
				console.log('submit');
			},
			handleGoBack(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style lang="scss">	
	@import './../../../../../assets/css/table_view.css';
	.edit{
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