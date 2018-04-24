<template>
	<div class="addAccount">
		<el-form :model="addAccountForm" label-width="100px" class="demo-ruleForm" >		  
		  <el-form-item label="用户头像：" prop="avatar">
		    <img :src="addAccountForm.avatar" alt="用户头像" class="avatar">
		  </el-form-item>
		  <el-form-item label="真实姓名：" prop="userName">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	{{addAccountForm.userName}}
			</el-col>
		  </el-form-item>
		  <el-form-item label="真实姓名：" prop="trueUserName">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	{{addAccountForm.trueUserName}}
			</el-col>
		  </el-form-item>
		  <el-form-item label="手机号码：" prop="phone">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	{{addAccountForm.phone}}
		    </el-col>
		  </el-form-item>
		  <el-form-item label="固定电话：" prop="telephone">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	{{addAccountForm.telephone}}
		    </el-col>
		  </el-form-item>
		  <el-form-item label="传真：" prop="fax">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	{{addAccountForm.fax}}
		    </el-col>
		  </el-form-item>
		  <el-form-item label="电子邮箱：" prop="email">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	{{addAccountForm.email}}
		    </el-col>
		  </el-form-item>
		  <el-form-item label="账号状态：" prop="userStatus">
		    <el-radio-group v-model="addAccountForm.userStatus">
		      <el-radio disabled v-model="addAccountForm.userStatus" label="1">启用</el-radio>
		      <el-radio disabled v-model="addAccountForm.userStatus" label="0">禁用</el-radio>
		    </el-radio-group>
		  </el-form-item>  
		  <el-form-item label="所属部门：" prop="depart" v-model="addAccountForm.depart">
		  	<span>{{addAccountForm.depart}}</span>
		  </el-form-item>		  
		  <el-form-item label="所属角色：" prop="role" v-model="addAccountForm.role">
			   <el-col v-for="role in addAccountForm.roles" :key="role.name">
			   		<el-checkbox v-model="role.checked" disabled></el-checkbox><span class="my-role" @click="handleViewRoles(role)">{{role.name}}</span>
			   </el-col>
		  </el-form-item>
		  
		  <el-form-item>
		    <el-button @click="handleGoback" size="small">返回</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default{
		name: 'CheckAccount',
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
				}
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
			handleGoback() {
				this.$router.go(-1);
			},
			handleViewRoles(role){
				console.log(role);
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
		.avatar{
			width: 80px;
			height: 80px;
			border-radius: 80px;
			-webkit-border-radius: 80px;
			-moz-border-radius: 80px;
			-ms-border-radius: 80px;
			background: #f2f2f2;
		}
		.my-role{
			padding-left:10px;
			color: #409EFF;
			cursor: pointer;
		}
	}
</style>