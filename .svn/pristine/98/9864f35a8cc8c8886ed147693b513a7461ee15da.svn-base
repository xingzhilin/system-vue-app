<template>
	<div class="addAccount">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :model="addAccountForm" :rules="addAccountForm" ref="addAccountForm" label-width="100px" class="demo-ruleForm" >		  
		  <el-form-item label="用户头像" prop="avatar">
		    <el-input v-model="addAccountForm.avatar" size="samll"></el-input>
		  </el-form-item>
		  <el-form-item label="真实姓名" prop="trueUserName" :rules="[{ required: true, message: '真实姓名不能为空'}]">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="addAccountForm.trueUserName" size="small"></el-input>
			</el-col>
		  </el-form-item>
		  <el-form-item label="手机号码" prop="phone">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="addAccountForm.phone" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="固定电话" prop="telephone">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="addAccountForm.telephone" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="传真" prop="fax">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="addAccountForm.fax" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="电子邮箱" prop="email">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="addAccountForm.email" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="账号状态" prop="userStatus">
		    <el-radio-group v-model="addAccountForm.userStatus">
		      <el-radio label="1">启用</el-radio>
		      <el-radio label="0">禁用</el-radio>
		    </el-radio-group>
		  </el-form-item>  
		  <el-form-item label="所属部门" prop="depart" v-model="addAccountForm.depart">
		  	<span v-for="item in getAddAccountChoice">{{item}}</span>
		  	<span>{{addAccountForm.depart}}</span>
		    <el-button @click="handleAddChoice" :model="addAccountForm.depart">选择部门</el-button>
		  </el-form-item>		  
		  <el-form-item label="所属角色" prop="role" v-model="addAccountForm.roles">
		        <el-col v-for="role in addAccountForm.roles" :key="role.name">
			   		<el-checkbox v-model="role.checked"></el-checkbox>{{role.name}}
			    </el-col>
		  </el-form-item>
		  
		  <el-form-item>
		    <el-button type="primary" @click="handleSubmitForm('addAccountForm')" size="small">保存</el-button>
		    <el-button @click="handleGoBack('addAccountForm')" size="small">取消</el-button>
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
				addAccountForm: {
					avatar: 'default.png',
					userName: 'Lucy',
					trueUserName: 'Lily',
					phone: '12414314',
					telephone: '243234',
					fax: '234234234',
					email:'550449252@qq.com',
					userStatus: '1',
					depart: '物流中心/物流一部/现场物流',
					roles: [
						{status: 1, name: '运营专员',checked: true},
						{status: 1, name: '运营专员2',checked: false}
					]
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
                
                this.$router.push({name: 'addChoiceLink'})
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
	}	
	.el-form-item{
		margin-bottom:10px;
	}
</style>