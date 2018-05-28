<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
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
		<el-container>
	      <el-button type="danger" @click="handleChoice" size="small">确定选择</el-button>
	    </el-container>
		<el-table
			ref="multipleTable"
			:data="tableData"
			:span-method="rowMethod"
			tooltip-effect="dark"
			style="width: 100%"
			v-loading="isLoading" 
			@selection-change="handleSelectionChange">
			<el-table-column align="center" type="selection" width="30"></el-table-column>
			<el-table-column align="center" label="选择" width="50"></el-table-column>
			<el-table-column align="center" prop="whName" label="交割库名称"></el-table-column>
			<el-table-column align="center" prop="status" label="交割库状态" width="120"></el-table-column>
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
		name: 'AccountManagement',
		data(){
			return {
				msg: 'DeliveryChoice',
				isLoading: true,
				tableData: [],
				pageSize: 10,
				pageSizes:[2, 3, 5, 10],
		        currentPage: 1,
		        totalPage: null,
				formInline: {},
				sParams: {},
				whCodes: [],
				multipleSelection: []
			}
		},
		mounted(){
			this.initList(this.currentPage, this.pageSize);
			this.init();
		},
		methods: {
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
			handleChoice(){
				eventBus.$emit('delieveryData', this.multipleSelection);
				//this.$router.push({name: 'addAccountLink'});
				this.$router.go(-1)
			},
			handleReset(formName){
				this.$refs[formName].resetFields();
			},
			handleAdd(){
				console.log('add');
				this.$router.push({name: 'addAccountLink'});
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
				this.sParams.toPage = toPage;
		    	this.sParams.pageSize = pageSize;
		    	this.sParams.status = 1;
				this.$axios.post('/admin/basics/warehouses', this.sParams , {
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
						console.log(res)
							if(res.data.status == 200){							
								this.isLoading = false;
								this.totalPage = res.data.result.total;
								this.currentPage = res.data.result.pageNum;
								this.pageSize = res.data.result.pageSize;
								this.tableData = res.data.result.list;
								this.multipleSelection = res.data.result.list;
							}
					})
					.catch(function (error) {
						console.log(error);
					})

		    },
		    init(){
		    	if(this.$route.query.adminId){
		    		this.$axios.get('http://192.168.11.98:9001/admin/showUser/' + this.$route.query.adminId, {
			    		headers: { "Content-Type": "application/json"}
			    	})
			    	.then( res => {
			    		if(res.data.status == 200){
			    			let whCodes =  res.data.result.whIds.map( (item, index) => {
			    				return item.whCode
			    			});
							this.multipleSelection.forEach( (item, index) => {
								if(item.whCode == whCodes[index]){
									this.$refs.multipleTable.toggleRowSelection(this.tableData[index]);
									this.multipleSelection = this.tableData[index];
								}
							})
			    		}
			    	})
					.catch(function (error) {
						console.log(error);
					})
		    	}		    	
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