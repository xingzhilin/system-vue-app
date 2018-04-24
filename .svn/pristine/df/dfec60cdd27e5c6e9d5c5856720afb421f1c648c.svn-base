<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
		  <el-form-item label="交割库名称：" prop="userName">
		    <el-input v-model="formInline.userName" placeholder="交割库名称" size="small"></el-input>
		  </el-form-item>
		  <el-form-item label="排序：" prop="trueUserName">
		    <el-input v-model="formInline.trueUserName" placeholder="排序" size="small"></el-input>
		  </el-form-item>
		  <el-form-item label="交割库状态" prop="userStatus">
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
		<el-table :data="tableData" border size="small">
		    <el-table-column prop="" label="操作" width="260" align="center">		    	
		    	<template slot-scope="scope">
		    		<el-button type="primary" size="mini" @click="handleCheck(scope.$index, scope.row)">查看</el-button>	
		    		<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">处理</el-button>	
			      </template>
		    </el-table-column>
		    <el-table-column align="center" prop="userName" label="交割库名称"></el-table-column>
		    <el-table-column align="center" prop="userStatus" label="交割库状态"></el-table-column>
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
					userStatus: ''
				},
				tableData: [
					{
			          userName: 'Lily',
			          userStatus:'是'
			        },
			        {
			          userName: 'Lily',
			          userStatus:'是'
			        },
			        {
			          userName: 'Lily',
			          userStatus:'是'
			        },
			        {
			          userName: 'Lucy',
			          userStatus:'是'
			        }
		        ],
		        currentPage: 4
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
			handleCheck(index, row){
				console.log(index, row);
		        this.$router.push({name: 'warehousePowerViewLink'});
			},
			handleEdit(index, row) {
		        console.log(index, row);
		        this.$router.push({name: 'warehousePowerEditLink'});
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