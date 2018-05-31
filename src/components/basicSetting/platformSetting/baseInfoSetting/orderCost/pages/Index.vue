<template>
	<div class="backstage">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="form" ref="form" class="demo-form-inline">
		  <el-form-item label="订单费用类型名称" prop="userName">
		    <el-input v-model="form.expenseName" placeholder="订单费用类型名称" size="small"></el-input>
		  </el-form-item>	
		  <el-form-item label="状态：">
			  <el-select v-model="form.status" placeholder="请选择">
			    <el-option label="启用" value="1"></el-option>
			    <el-option label="禁用" value="0"></el-option>
			  </el-select>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="handleSubmit('form')" size="small">查询</el-button>
		    <el-button @click="handleReset('form')" size="small">重置</el-button>
		  </el-form-item>
		</el-form>
		<div class="el-line"></div>
		<el-container>
	      <el-button type="danger" @click="handleAdd" size="small">新增</el-button>
	    </el-container>
		<el-table :data="tableData" border size="small">
		    <el-table-column label="操作" width="180" align="center">		    	
		    	<template slot-scope="scope">
		    		<router-link :to="{name:'orderCostViewLink', query:{expenseId: scope.row.expenseId}}">
		    			<el-button type="primary" size="mini">查看</el-button>
		    		</router-link>
		    		<router-link :to="{name:'orderCostUpdateLink', query:{expenseId: scope.row.expenseId}}">
		    			<el-button size="mini">处理</el-button>
		    		</router-link>	
			    </template>
		    </el-table-column>
		    <el-table-column align="center" prop="expenseName" label="订单费用类型"></el-table-column>
		    <el-table-column align="center" prop="expenseId" label="订单费用类型code"></el-table-column>

		    <el-table-column align="center" prop="status" label="状态"></el-table-column>

		    <el-table-column align="center" prop="createTime" label="添加时间"></el-table-column>
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
				msg: '订单费用类型',
				expenseDiv: 5,
				isLoading: true,
				tableData: [],
				pageSize: 10,
				pageSizes:[2, 3, 5, 10],
		        currentPage: 1,
		        totalPage: null,
				form: {
					status: '启用'
				},
				sParams: {
					status: 1
				}
			}
		},
		mounted(){
			this.initList(this.currentPage, this.pageSize);
		},
		methods: {
			handleSubmit(formName){
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
						this.sParams = this.form;
						console.log(this.sParams);
						this.initList(this.currentPage, this.pageSize);
					} else {
						console.log('error submit!!');
						return false;
					}
				})
			},
			handleReset(formName){
				//this.form = {}
				this.$refs[formName].resetFields();
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
		    handleAdd(){
				console.log('add');
				this.$router.push({name: 'orderCostAddLink'});
			},
			initList(toPage, pageSize){	
		    	this.sParams.toPage = toPage;
		    	this.sParams.pageSize = pageSize;
		    	this.sParams.expenseDiv = this.expenseDiv;
		    	this.sParams = JSON.stringify(this.sParams);
		    	console.log(this.sParams);
				this.$axios.post('http://192.168.15.183:9002/api/v1/basics/admin/expense/queryList', this.sParams , {
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
							if(res.data.status == 200){
								this.isLoading = false;
								this.totalPage = res.data.result.total;
								this.currentPage = res.data.result.pageNum;
								this.pageSize = res.data.result.pageSize;
								this.tableData = res.data.result.list;
							}
					})
					.catch(function (error) {
						console.log(error);
					})


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