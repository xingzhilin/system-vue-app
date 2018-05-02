<template>
	<div class="">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" :rules="rules" ref="formInline" class="demo-form-inline">
		  <el-form-item label="用户名" prop="userName">
		    <el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input>
		  </el-form-item>
		  <el-form-item label="真实姓名" prop="trueUserName">
		    <el-input v-model="formInline.trueUserName" placeholder="真实姓名" size="small"></el-input>
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
	      <el-button type="danger" @click="handleAdd" size="small">添加账号</el-button>	        
	      <span class="total">总计：</span>
	    </el-container>
		<el-table :data="tableData" border size="small">
		    <el-table-column prop="" label="操作" width="180" align="center">		    	
		    	<template slot-scope="scope">
		    		<el-button type="primary" size="mini" @click="handleCheck(scope.$index, scope.row)">查看</el-button>	
		    		<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">处理</el-button>	
			      </template>
		    </el-table-column>
		    <el-table-column align="center" prop="userName" label="用户名"></el-table-column>
		    <el-table-column align="center" prop="realName" label="真实姓名"></el-table-column>
		    <el-table-column align="center" prop="cellPhone" label="手机号"></el-table-column>
		    <el-table-column align="center" prop="roleName" label="角色名称"></el-table-column>
		    <el-table-column align="center" prop="status" label="用户状态"></el-table-column>
		    <el-table-column align="center" prop="createTime" label="注册时间"></el-table-column>
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
		name: 'Management',
		data(){
			return {
				msg: 'Management',
				formInline: {
					userName: '',
					trueUserName: '',
					departName: '',
					roleName: '',
					userStatus: ''
				},
				tableData: [],
				pageSize: 10,
				pageSizes:[2, 3, 5, 10],
		        currentPage: 1,
		        totalPage: null,
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
		created(){
			this.initList(this.currentPage, this.pageSize);
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
				this.$refs[formName].resetFields();
			},
			handleAdd(){
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
		        this.pageSize = val;
		    },
		    handleNextChange(val){
		    	console.log(`下一页 ${val} 条`)
		        this.pageSize = val;
		    },
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		        this.pageSize = val;
		        console.log(this.pageSize);
				this.initList(this.currentPage, this.pageSize);
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		        this.currentPage = val;
				this.initList(this.currentPage, this.pageSize);
		    },
		    initList(toPage, pageSize){
		    	let sParams = { toPage: toPage , pageSize: pageSize};
				console.log(sParams);
				/*this.$axios.post('http://192.168.11.31:9001/v1/basics/access/listAccess', sParams , {
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
							if(res.status == 200){
								console.log(res);
								this.totalPage = res.data.total;
								this.currentPage = res.data.pageNum;
								this.pageSize = res.data.pageSize;
								this.tableData = res.data.list;
							}
					})
					.catch(function (error) {
						console.log(error);
					})*/
				this.tableData = [					
					{
				      "adminId": "1",
				      "headPicUrl":"baidu.com/images/tx.png",
				      "userName":"张金",
				      "realName": "张鑫",
				      "cellPhone": "15001192712",
				      "fax":"010-89898989",
				      "email":"zhangj@315.com.cn",
				      "userPwd":"123456",
				      "telphone":"010-89898989",
				      "status": "用户状态",
				      "createTime": "2018/4/20",
				      "whIds":[
				          {"whCode":"20180101","whName":"天津港","status":"1"},
				          {"whCode":"20180102","whName":"秦皇岛港","status":"1"}
				      ],
				      "userRole":[{"roleId":"201804270001","roleName":"运营专员"},{"roleId":"201804270001","roleName":"运营专员 "}]
				    },
				    {
				      "adminId": "2",
				      "headPicUrl":"baidu.com/images/tx.png",
				      "userName":"张金2",
				      "realName": "张鑫2",
				      "cellPhone": "15001192712",
				      "fax":"010-89898989",
				      "email":"zhangj@315.com.cn",
				      "userPwd":"123456",
				      "telphone":"010-89898989",
				      "roleName": '运营专员；运营负责人' ,
				      "status": "用户状态",
				      "createTime": "2018/4/20",
				      "whIds":[
				          {"whCode":"20180101","whName":"天津港","status":"1"},
				        {"whCode":"20180102","whName":"秦皇岛港","status":"1"}
				      ],
				      "userRole":[{"roleId":"201804270001","roleName":"运营专员"},{"roleId":"201804270001","roleName":"运营专员 "}]
				    }
				]

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