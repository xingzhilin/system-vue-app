<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
		  <el-form-item label="用户名" prop="userName">
		    <el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input>
		  </el-form-item>
		  <el-form-item label="真实姓名" prop="trueUserName">
		    <el-input v-model="formInline.trueUserName" placeholder="真实姓名" size="small"></el-input>
		  </el-form-item>
		  <el-form-item label="部门名称" prop="departName">
		    <el-input v-model="formInline.departName" placeholder="部门名称" size="small"></el-input>
		  </el-form-item>
		  <el-form-item label="角色名称" prop="roleName">
		    <el-input v-model="formInline.roleName" placeholder="角色名称" size="small"></el-input>
		  </el-form-item>		
		  <el-form-item label="用户状态" prop="userStatus">
		    <el-select v-model="formInline.userStatus" placeholder="请选择" size="small">  
		      <el-option label="请选择" value=""></el-option>
		      <el-option label="启用" value="1"></el-option>
		      <el-option label="停用" value="0"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="handleSubmit('formInline')" size="small">查询</el-button>
		    <el-button @click="handleReset('formInline')" size="small">重置</el-button>
		  </el-form-item>
		</el-form>
		<div class="el-line"></div>
		<el-container>
	      <el-button type="danger" @click="handleAddAccount" size="small">添加账号</el-button>	        
	      <span class="total">总计：</span>
	    </el-container>
		<el-table :data="tableData" border size="small">
		    <el-table-column prop="" label="操作" width="180" align="center">		    	
		    	<template slot-scope="scope">
		    		<el-button type="primary" size="mini" @click="handleCheck(scope.$index, scope.row)">查看</el-button>	
		    		<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">处理</el-button>	
			      </template>
		    </el-table-column>
		    <el-table-column align="center" prop="enName" label="企业名称"></el-table-column>
		    <el-table-column align="center" prop="enCode" label="企业编码"></el-table-column>
		    <el-table-column align="center" prop="registerDate" label="注册时间"></el-table-column>
		    <el-table-column align="center" prop="accessNo" label="准入协议号"></el-table-column>
		    <el-table-column align="center" prop="startTime" label="准入开始时间"></el-table-column>
		    <el-table-column align="center" prop="endTime" label="准入失效时间"></el-table-column>
		    <el-table-column align="center" prop="isUsed" label="准入状态"></el-table-column>
		    <el-table-column align="center" prop="status" label="公司状态"></el-table-column>
		    <el-table-column align="center" prop="companyRegisterDate" label="企业注册时间"></el-table-column>
		</el-table>
		<el-footer style="height:auto">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      @prev-click="handlePrevChange"  
		      @next-click="handleNextChange"
		      :current-page="currentPage"
		      :page-sizes="[10, 20, 30, 40]"
		      :page-size="pageSize"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="totalPage">
		    </el-pagination>
		</el-footer>
	</div>  
</template>
<script>
	export default {
		name: 'AccountManagement',
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
				tableData: [],
				pageSize: 10,
		        currentPage: 1,
		        totalPage: null
			}
		},
		created(){
			console.log(111);
			let data = { "toPage":"1" };
				this.$axios.post('http://192.168.11.31:9001/v1/basics/access/listAccess', data , {
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
							if(res.status == 200){
								this.totalPage = res.total;
								this.currentPage = res.pageNum;
								this.pageSize = res.pageSize;
								console.log('***********************************');
								console.log(res);
								//this.$router.push({name: 'homeLink'}
								this.tableData = res.data.list;
							}
					})
					.catch(function (error) {
						console.log(error);
					})
		},
		methods: {
			handleSubmit(formName){
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				})
			},
			handleReset(formName){
				//this.formInline = {}
				this.$refs[formName].resetFields();
			},
			handleAddAccount(){
				console.log('add');
				this.$router.push({name: 'addAccountLink'});
			},
			handleCheck(index, row){
				console.log(index, row);
		        this.$router.push({name: 'checkAccountLink'});
			},
			handleEdit(index, row) {
		        console.log(index, row);
		        this.$router.push({name: 'editAccountLink'});
		    },
		    handlePrevChange(val){
		    	console.log(`上一页 ${val} 条`)
		    },
		    handleNextChange(val){
		    	console.log(`下一页 ${val} 条`)
		    },
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		    }
		}
	}
</script>
<style scoped lang="scss">
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
		padding: 15px 0 0 20px;
		color:#606266;
	}
	.el-table{
		width:97%;
		margin: 0 auto;
	}
	.el-form-item{
		margin-bottom:15px;
	}
	.el-container{
		padding:15px;
		.total{
			display: inline-block;
		    line-height: 30px;
		    padding-left: 20px;
		    font-size: 14px;
		}
	}
	.el-line{
		height: 2px;
		margin: 10px 15px 0;
		background-color:#f5f5f5;
	}
	.el-table .cell{
		text-align: center;
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