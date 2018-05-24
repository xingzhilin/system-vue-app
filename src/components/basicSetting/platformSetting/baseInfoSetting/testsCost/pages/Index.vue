<template>
	<div class="backstage">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
		  <el-form-item label="化验费用类型名称" prop="userName">
		    <el-input v-model="formInline.userName" placeholder="化验费用类型名称" size="small"></el-input>
		  </el-form-item>	
		  <el-form-item label="状态" prop="userStatus">
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
	    </el-container>
		<el-table :data="tableData" border size="small">
		    <el-table-column label="操作" width="180" align="center">		    	
		    	<template slot-scope="scope">
		    		<el-button type="primary" size="mini" @click="handleCheck(scope.$index, scope.row)">查看</el-button>	
		    		<el-button size="mini" @click="handleEdit(scope.$index, scope.row)" :data-id="scope.row.id">处理</el-button>	
			      </template>
		    </el-table-column>
		    <el-table-column align="center" prop="assaysCostType" label="化验费用类型"></el-table-column>
		    <el-table-column align="center" prop="assaysCostTypeCode" label="化验费用类型code"></el-table-column>

		    <el-table-column align="center" prop="status" label="状态"></el-table-column>

		    <el-table-column align="center" prop="createDate" label="添加时间"></el-table-column>
		</el-table>
		<el-footer style="height:auto">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      @prev-click="handlePrevChange"  
		      @next-click="handleNextChange"
		      :current-page="currentPage"
		      :page-sizes="pageSizes"
		      :page-size="pageSize"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="totalPage">
		    </el-pagination>
		</el-footer>
	</div>  
</template>
<script>
	export default {
		name: 'Index',
		data(){
			return {
				msg: '化验费用类型',
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
		        totalPage: null
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
				this.$router.push({name: 'testsCostAddLink'});
			},
			handleCheck(index, row){
				console.log(row);
		        this.$router.push({name: 'testsCostViewLink', params: {id: row.id}});
			},
			handleEdit(index, row) {
		        console.log(index, row);
		        this.$router.push({name: 'testsCostAddLink', query: { flag: 'edit', id: row.id}});
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
				      "id":"1",
				      "assaysCostType": "化验费",
				      "assaysCostTypeCode": "1",
				      "status": "1",
				      "createDate": "2018/4/28 12:00:11"
				    },
				    {
				      "id":"2",
				      "assaysCostType": "技术服务费",
				      "assaysCostTypeCode": "1",
				      "status": "1",
				      "createDate": "2018/4/28 12:00:11"
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