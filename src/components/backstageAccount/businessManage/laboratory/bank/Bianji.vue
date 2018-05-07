<template>
	<div class="backstage">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-container>
	      <el-button type="danger" @click="handleAddAccount" size="small">新增</el-button>	        
	    </el-container>

		<el-table :data="tableData" border size="small">
		    <el-table-column prop="" label="操作" width="180" align="center">		    	
		    	<template slot-scope="scope">
		    		<el-button type="primary" size="mini" @click="handleCheck(scope.$index, scope.row)">编辑</el-button>	
			      </template>
		    </el-table-column>
		    <el-table-column align="center" prop="userName" label="开户行"></el-table-column>
		    <el-table-column align="center" prop="trueUserName" label="银行账号"></el-table-column>
		    <el-table-column align="center" prop="phoneNum" label="联系电话"></el-table-column>
		    <el-table-column align="center" prop="departName" label="添加时间"></el-table-column>
		    <el-table-column align="center" prop="roleName" label="账号状态"></el-table-column>
			<el-table-column align="center" prop="roleTime" label="是否为默认项"></el-table-column>
		   
		</el-table>
		
	</div>  
</template>
<script>
	export default {
		name: 'Index',
		data(){
			return {
				msg: 'Index',
				formInline: {
					userName: '',
					trueUserName: '',
					departName: '',
					roleName: '',
					userStatus: '',
					region:'1'
					
				},
				tableData: [
					{
			          userName: '',
			          trueUserName: '',
			          phoneNum:'',
			          departName: '',
					  roleName:'',
					  roleTime:''
			          
			        },
			        {
			          userName: '',
			          trueUserName: '',
			          phoneNum:'',
			          departName: '',
					  roleName:'',
					  roleTime:''
			          
			        },
			        {
			          userName: '',
			          trueUserName: '',
			          phoneNum:'',
			          departName: '',
					  roleName:'',
					  roleTime:''
			         
			        },
			        {
			          userName: '',
			          trueUserName: '',
			          phoneNum:'',
			          departName: '',
					  roleName:'',
					  roleTime:''
			       
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
					],
					region: [
           				 { required: true, message: '请选择', trigger: 'change' }
          			]
				}
			}
		},
		

	}
</script>
<style scoped lang="scss">
    .f-zj{
		font-size: 14px;
		padding: 5px 15px;
	}
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