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
						<td><el-input v-model="form.tempName" size="small"></el-input></td>
					</tr>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>合同别名：</td>
						<td><el-input v-model="form.tempAlias" size="small"></el-input></td>
					</tr>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>合同使用类型：</td>
						<td>
						    <el-select v-model="form.useType" placeholder="请选择" size="small">
							    <!-- <el-option
							      v-for="item in options"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option> -->
							        <el-option label="北方港" value="1"></el-option>
						      		<el-option label="南方港" value="2"></el-option>
							</el-select>
						</td>
					</tr>
					<tr>
						<td class="td_label">对应业务类型：</td>
						<td>
							<el-radio-group v-model="form.bizType">
							    <el-radio :label="1">定期招标（定价）</el-radio>
							    <el-radio :label="2">定期招标（竞价）</el-radio>
							</el-radio-group>
						</td>
					</tr>
					<tr>
						<td class="td_label">合同简介：</td>
						<td><el-input v-model="form.tempDesc" size="small"></el-input></td>
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
							<el-radio-group v-model="form.useScope">
							    <el-radio :label="1">金银岛后台发布报盘</el-radio>
							    <el-radio :label="2">专享企业</el-radio>
							</el-radio-group>
							<el-select v-model="form.enId" placeholder="请选择企业" size="small">
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
							<el-radio-group v-model="form.status" size="small">
						      <el-radio label="1"></el-radio>
						      <el-radio label="0"></el-radio>
						    </el-radio-group>
						</td>
					</tr>
				
				</tbody>
			</table>
			<el-footer>
			    <el-button type="primary" @click="handleSubmitForm()" size="small">保存</el-button>
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
		created(){
			this.init();
		},
		methods:{
			handleSubmitForm(){
				console.log(this.form);
				console.log('submit');
				let sParams = JSON.stringify(this.form);
				console.log(typeof sParams);
				console.log(sParams);
				this.$axios.put('http://192.168.15.172:9001/v1/admin/basics/contract', sParams , {
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
							console.log(res);
							if(res.data.status == 200){
								console.log(res);
							}
					})
					.catch(function (error) {
						console.log(error);
					})
			},
			init(){
				let tempCode = this.$route.query.tempCode;
				this.$axios.get('http://192.168.15.172:9001/v1/admin/basics/contract/' + tempCode,{
					headers:{ "Content-Type": "application/json"}
				})
				.then(res => {
					console.log('******************************')
					console.log(res)
				})
				.catch(function (error) {
					console.log(error);
				})
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