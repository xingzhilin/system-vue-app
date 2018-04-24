<template>
	<div class="addAccount">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :model="addAccountForm" :rules="addAccountForm" ref="addAccountForm" label-width="100px" class="demo-ruleForm" >		  
		  <el-form-item label="用户头像：" prop="avatar">
		    <!-- <el-input v-model="addAccountForm.avatar" size="samll"></el-input> -->
			<el-upload
			  class="avatar-uploader"
			  action="http://127.0.0.1:8080/static/upload"
			  :show-file-list="false"
			  :on-preview="handlePreview"
  			  :on-remove="handleRemove"
			  :on-success="handleAvatarSuccess"
			  :before-upload="beforeAvatarUpload">
			  <img v-if="imageUrl" :src="imageUrl" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		  </el-form-item>
		  <el-form-item label="真实姓名：" prop="trueUserName" :rules="[{ required: true, message: '真实姓名不能为空'}]">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="addAccountForm.trueUserName" size="small"></el-input>
			</el-col>
		  </el-form-item>
		  <el-form-item label="手机号码：" prop="phone">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="addAccountForm.phone" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="固定电话：" prop="telephone">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="addAccountForm.telephone" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="传真：" prop="fax">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="addAccountForm.fax" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="电子邮箱：" prop="email">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="addAccountForm.email" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="账号状态：" prop="userStatus">
		    <el-radio-group v-model="addAccountForm.userStatus">
		      <el-radio label="启用"></el-radio>
		      <el-radio label="禁用"></el-radio>
		    </el-radio-group>
		  </el-form-item>  
		  <el-form-item label="负责交割库：" prop="depart" v-model="addAccountForm.depart">
		  	<span v-for="item in getAddAccountChoice">{{item}}</span>
		  	<el-checkbox v-model="addAccountForm.checkAll" @change="handleCheckAll">全选</el-checkbox>
		    <el-button @click="handleAddChoice" :model="addAccountForm.depart">去配置</el-button>
		  </el-form-item>		  
		  <el-form-item label="所属角色：" prop="role" v-model="addAccountForm.role">
		    <el-tree
			  :props="props"
			  :load="loadNode"
			  lazy
			  show-checkbox
			  @check-change="handleCheckChange">
			</el-tree>
		  </el-form-item>
		  
		  <el-form-item>
		    <el-button type="primary" @click="handleSubmitForm('addAccountForm')" size="small">保存</el-button>
		    <el-button @click="handleGoBack()" size="small">取消</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default{
		name: 'AddAccount',
		data(){
			return {
				msg: 'AddAccount',
				imageUrl: '',
				isIndeterminate: true,
				addAccountForm: {
					avatar: '',
					trueUserName: '',
					phone: '',
					telephone: '',
					fax: '',
					email:'',
					userStatus: '',
					depart: '',
					checkAll:'',
					role: ''
				},
				props: {
					label: 'name',
					children: 'zones'
		        },
		        count: 1,
		        dialogFormVisible:false
			}
		},		
		computed:{
			isLogin(){
				return this.$store.getters.isLogin
			},
			getAddAccountChoice(){
				return this.$store.getters.getAddAccountChoice
			}
		},
		methods:{
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
				console.log(this.imageUrl);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			handleCheckAll(){
				console.log('checkALl');
			},
			handleCheckChange(data, checked, indeterminate) {
				console.log(data, checked, indeterminate);
			},
			handleNodeClick(data) {
				console.log(data);
			},
			handleSubmitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            alert('submit!');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        })
		    },
		    handleGoBack(fromName){
		    	this.$router.go(-1);
		    },
		    handleAddChoice(){
                 //记录索引
                 //this.listIndex=_index;
                 //记录数据
                 //this.editObj=row;
                 //显示弹窗
                //this.dialogFormVisible = true;
                
                this.$router.push({name: 'DeliveryChoiceLink'})
             },
			loadNode(node, resolve) {
				if (node.level === 0) {
					return resolve([{ name: 'region1' }, { name: 'region2' }]);
				}
				if (node.level > 4) return resolve([]);

				var hasChild;
				if (node.data.name === 'region1') {
					hasChild = true;
				} else if (node.data.name === 'region2') {
					hasChild = false;
				} else {
					hasChild = Math.random() > 0.5;
				}

				setTimeout(() => {
					var data;
					if (hasChild) {
						data = [
							{
								name: 'zone' + this.count++
							}, {
								name: 'zone' + this.count++
							}
						];
					} else {
						data = [];
					}

					resolve(data);
				}, 500);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.el-breadcrumb{
		position: relative;
	    border-bottom: 1px solid #e5e5e5;
	    background-color: #f5f5f5;
	    min-height: 41px;
	    line-height: 40px;
	    padding-left: 20px;
	    display: block;
	}
	.el-form{
		padding: 15px 20px 0 15px;
		color:#606266;
	}	
	.el-form-item{
		margin-bottom:10px;
	}
</style>