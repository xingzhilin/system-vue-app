<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" :rules="rules" ref="formInline" class="demo-form-inline">
		  <el-form-item label="交割库名称：" prop="userName">
		    <el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input>
		  </el-form-item>	
		  <el-form-item label="排序：" prop="userStatus">
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
	      <el-button type="danger" @click="handleAdd" size="small">新增</el-button>	
	      <el-button type="danger" @click="handleSort('1')" size="small">云采购交割库排序</el-button>	
	      <el-button type="danger" @click="handleSort('2')" size="small">云供应交割库排序</el-button>	
	      <el-button type="danger" @click="handleSort('3')" size="small">锁价交易交割库排序</el-button>	
	      <el-button type="danger" @click="handleSort('4')" size="small">锁价交易交割库排序</el-button>	
	      <el-button type="danger" @click="handleSort('5')" size="small">煤炭商城交割库排序</el-button>	
	      <el-button type="danger" @click="handlePremium" size="small">升贴水交割库维护</el-button>	          
	    </el-container>
		<el-table :data="tableData" border size="small">
		    <el-table-column prop="" label="操作" width="180" align="center">		    	
		    	<template slot-scope="scope">
		    		<el-button type="primary" size="mini" @click="handleCheck(scope.$index, scope.row)">查看</el-button>	
		    		<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">处理</el-button>	
			      </template>
		    </el-table-column>
		    <el-table-column align="center" prop="userName" label="交割库名称"></el-table-column>
		    <el-table-column align="center" prop="trueUserName" label="所在港口"></el-table-column>
		    <el-table-column align="center" prop="phoneNum" label="所在地区"></el-table-column>
		    <el-table-column align="center" prop="departName" label="港杂费汽运"></el-table-column>
		    <el-table-column align="center" prop="roleName" label="港杂费火运"></el-table-column>
		    <el-table-column align="center" prop="userStatus" label="详细地址"></el-table-column>
		    <el-table-column align="center" prop="date" label="仓库类型"></el-table-column>
		    <el-table-column align="center" prop="status" label="仓库状态"></el-table-column>
		</el-table>
		<el-footer style="height:auto">			
			<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-sizes="[100, 200, 300, 400]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
		    </el-pagination>
		</el-footer>
	</div>  
</template>
<script>
	export default {
		name: 'Index',
		data(){
			return {
				msg: '交割库维护',
				formInline: {
					userName: '',
					trueUserName: '',
					departName: '',
					roleName: '',
					userStatus: ''
				},
				tableData: [
					{
			          userName: 'Lily',
			          trueUserName: 'Lily Li',
			          phoneNum:'1283893044',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是',
			          date:'2016-05-02',
			          status: '启用'
			        },
			        {
			          userName: 'Lily',
			          trueUserName: 'Lily Li',
			          phoneNum:'1283893044',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是',
			          date:'2016-05-02',
			          status: '停用'
			        },
			        {
			          userName: 'Lily',
			          trueUserName: 'Lily Li',
			          phoneNum:'1283893044',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是',
			          date:'2016-05-02',
			          status: '停用'
			        },
			        {
			          userName: 'Lucy',
			          trueUserName: 'Lily Li',
			          phoneNum:'244324',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是',
			          date:'2016-05-02',
			          status: '停用'
			        }
		        ],
		        currentPage: 4,

				rules: {         
					userName: [
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					trueUserName: [
						{ required: true, message: '请输入真实姓名', trigger: 'blur' }
					],
					departName: [
						{ required: true, message: '请输入部门名称', trigger: 'blur' }
					],
					roleName: [
						{ required: true, message: '请输入角色名称', trigger: 'blur' }
					],
					userStatus: [
						{ required: true, message: '请选择账号状态', trigger: 'change'}
					]
				}
			}
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
			handleAdd(){
				console.log('add');
				this.$router.push({name: 'warehouseManageAddLink'});
			},
			handleSort(id){
				this.$router.push({name: 'warehouseManageSortingLink', query: {id: id}});
			},
			handlePremium(){
				this.$router.push({name: 'warehouseManagePremiumLink'});
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