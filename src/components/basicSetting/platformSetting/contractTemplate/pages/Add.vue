<template>
	<div class="edit">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="form" :model="form" :rules="rules"  label-position="top">
			<el-form-item prop="tempName" label="合同名称："  label-width="160px">			  	
		        <el-input v-model="form.tempName" size="small"></el-input>
			</el-form-item>

			<table class="add_table">
				<tbody>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>合同名称：</td>
						<td>
							
						</td>
					</tr>
					<tr>
						<td class="td_label">合同别名：</td>
						<td>
							<el-form-item prop="">
								<el-input v-model="form.tempAlias" size="small"></el-input>
							</el-form-item>
						</td>
					</tr>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>合同使用类型：</td>
						<td>
							<el-form-item prop="useType">
							    <el-select v-model="form.useType" placeholder="请选择" size="small">
								    <el-option
								      v-for="item in useTypeList"
								      :key="item.valueCode"
								      :label="item.paramName"
								      :value="item.valueCode">
								    </el-option>
								</el-select>
							</el-form-item>
						</td>
					</tr>
					<tr>
						<td class="td_label"><span class="zl_required">*</span>对应业务类型：</td>
						<td>
							<el-form-item prop="bizType">
								<el-radio-group v-model="form.bizType">
								    <el-radio v-for="item in bizTypeList" :label="item.valueCode" :key="item.valueCode">{{item.paramName}}</el-radio>
								</el-radio-group>
							</el-form-item>
						</td>
					</tr>
					<tr>
						<td class="td_label">合同简介：</td>
						<td>
							<el-form-item prop="tempDesc">
								<el-input type="textarea" v-model="form.tempDesc"></el-input>
							</el-form-item>
						</td>
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
							<el-form-item prop="useScope">
								<el-radio-group v-model="form.useScope">
								    <el-radio v-for="item in useScopeList" :label="item.valueCode" :key="item.valueCode">{{item.paramName}}</el-radio>
								</el-radio-group>
							</el-form-item>
							<el-form-item prop="">					
								<el-select v-model="form.enId" placeholder="请选择企业" size="small">
							      <el-option label="北方港" value="shanghai"></el-option>
							    </el-select>
							</el-form-item>
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
							<el-form-item prop="">
								<el-radio-group v-model="form.status" size="small">
							      <el-radio :label="1">启用</el-radio>
							      <el-radio :label="0">停用</el-radio>
							    </el-radio-group>
							</el-form-item>
						</td>
					</tr>
				
				</tbody>
			</table>
			<el-footer>
			    <el-button type="primary" @click="handleSubmitForm('form')" size="small" :disabled="isDisabled">保存</el-button>
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
				isDisabled: false,
				form: {},
				rules: {
					tempName: [
						{ required: true, message: '请输入角色名称', trigger: 'blur' },
						{ 
							validator: (rule, value, callback)=>{
								console.log(value);  // 输入的值
								return callback()  //必须return 才能通过
								// callback(new Error('用户名已存在'));//抛出校验错误提示
							}, 
							trigger: 'blur' 
						}
					],
					useType:[
						{ required: true, message: '请选择合同使用类型', trigger: 'change' }
					],
			        bizType: [
			            { type: 'array', required: true, message: '请至少选择一个业务类型', trigger: 'change' }
			        ],
			        useScope: [
			        	 { required: true, message: '请至少选择一个使用范围', trigger: 'change' }
			        ],
			        tempDesc: [
			        	{ min: 0, max: 200, message: '长度在200个字符以内', trigger: 'blur' }
			        ]
				},
				bizTypeList: [],
				useScopeList: [],
				useTypeList: [],
				whCodeList:[]
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
			init(){
				let tempCode = this.$route.query.tempCode;
				this.$axios.get('/api/v1/admin/basics/contract/init' ,{
					headers:{ "Content-Type": "application/json"}
				})
				.then(res => {
					console.log(res)
					if(res.data.status == 200){						
						this.bizTypeList = res.data.result.bizTypeList;
						this.useScopeList = res.data.result.useScopeList;
						this.useTypeList = res.data.result.useTypeList;
						this.whCodeList = res.data.result.whCodeList;
					}
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
<style scoped lang="scss">
	
	.edit{
		table{width:100%;text-align:center;border-collapse:collapse;border-spacing:1;border-spacing:0; }
		table td{word-break: break-all; word-wrap:break-word;border-right:1px solid #939598; border-bottom:1px solid #939598;font:500 14px Arial}
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
		.el-form-item{
			margin-bottom: 10px;
		}
	}
</style>