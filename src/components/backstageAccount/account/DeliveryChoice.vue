<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" :rules="rules" ref="formInline" class="demo-form-inline">
		  <el-form-item label="交割库名称：" prop="name">
		    <el-input v-model="formInline.name" placeholder="用户名" size="small"></el-input>
		  </el-form-item>		  		
		  <el-form-item label="排序：" prop="sort">
		    <el-select v-model="formInline.sort" placeholder="请选择" size="small">  
		      <el-option label="请选择" value=""></el-option>
		      <el-option label="A" value="1"></el-option>
		      <el-option label="B" value="0"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="交割库状态：" prop="status">
		    <el-select v-model="formInline.status" placeholder="请选择" size="small">  
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
		<el-table
			ref="multipleTable"
			:data="tableData"
			:span-method="rowMethod"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange">
			<el-table-column align="center" type="selection" width="30"></el-table-column>
			<el-table-column align="center" label="选择" width="50"></el-table-column>
			<el-table-column align="center" prop="name" label="交割库名称"></el-table-column>
			<el-table-column align="center" prop="status" label="交割库状态" width="120"></el-table-column>
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
		name: 'AccountManagement',
		data(){
			return {
				msg: 'AccountManagement',
				formInline: {
					userName: '',
					trueUserName: '',
					departName: '',
					roleName: '',
					userStatus: ''
				},
				tableData: [
					{
			          name: 'Lily',
			          status: '启用'
			        },
			        {
			          name: '秦皇岛',
			          status: '停用'
			        },
			        {
			          name: 'ceshi',
			          status: '启用'
			        },
			        {
			          name: '高碑店',
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
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			rowMethod({ row, column, rowIndex, columnIndex }){
				if (columnIndex === 0) {
		            return [1, 2];
		        } else if (columnIndex === 1) {
		            return [0, 0];
		        }
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