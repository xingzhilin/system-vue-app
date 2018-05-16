<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
		  <el-form-item label="合同名称：">
		    <el-input v-model="formInline.userName" placeholder="合同名称" size="small"></el-input>
		  </el-form-item>
		  <el-form-item label="合同别名：">
		    <el-input v-model="formInline.userName" placeholder="合同别名" size="small"></el-input>
		  </el-form-item>
		  <el-form-item label="合同使用类型：">
		    <el-select v-model="formInline.userStatus" placeholder="请选择" size="small">  
		      <el-option label="请选择" value=""></el-option>
		      <el-option label="启用" value="1"></el-option>
		      <el-option label="停用" value="0"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="对应业务方式：">
		    <el-select v-model="formInline.userStatus" placeholder="请选择" size="small">  
		      <el-option label="请选择" value=""></el-option>
		      <el-option label="启用" value="1"></el-option>
		      <el-option label="停用" value="0"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="停/启用状态：">
		    <el-select v-model="formInline.userStatus" placeholder="请选择" size="small">  
		      <el-option label="请选择" value=""></el-option>
		      <el-option label="启用" value="1"></el-option>
		      <el-option label="停用" value="0"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="添加时间：">
			  	 <el-col :span="11">
			      <el-date-picker type="datetime" v-model="formInline.time" placeholder="选择日期" style="width: 100%;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="2">-</el-col>
			    <el-col :span="11">
			      <el-date-picker type="datetime" v-model="formInline.time" placeholder="选择日期" style="width: 100%;"></el-date-picker>
			    </el-col>
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
		    <el-table-column prop="" label="操作" width="180" align="center">		    	
		    	<template slot-scope="scope">
		    		<router-link :to="{name:'contractOperateViewLink', query:{tempCode: scope.row.tempCode}}">
		    			<el-button type="primary" size="mini">查看</el-button>
		    		</router-link>	
		    		<router-link :to="{name:'contractOperateUpdateLink', query:{tempCode: scope.row.tempCode}}">
		    			<el-button size="mini">处理</el-button>
		    		</router-link>	
			      </template>
		    </el-table-column>
		    <el-table-column align="center" prop="tempName" label="合同名称"></el-table-column>
		    <el-table-column align="center" prop="tempAlias" label="合同别名"></el-table-column>
		    <el-table-column align="center" prop="userType" label="合同使用类型"></el-table-column>
		    <el-table-column align="center" prop="bizType" label="对应业务方式"></el-table-column>
		    <el-table-column align="center" prop="status" label="停/启用状态"></el-table-column>
		    <el-table-column align="center" prop="createTimeStart" label="更新时间"></el-table-column>
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
				msg: '合同模板维护',
				tableData: [],
				pageSize: 10,
				pageSizes:[2, 3, 5, 10],
		        currentPage: 1,
		        totalPage: null,
				formInline: {
					userName: '',
					trueUserName: '',
					departName: '',
					roleName: '',
					userStatus: ''
				},
				tableData: []
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
				//this.formInline = {}
				this.$refs[formName].resetFields();
			},
			handleAdd(){
				console.log('add');
				this.$router.push({name: 'contractOperateAddLink'});
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
				this.$axios.post('http://192.168.15.172:9001/v1/admin/basics/contracts', sParams , {
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
							if(res.data.status == 200){
								console.log(res);
								this.totalPage = res.data.result.total;
								this.currentPage = res.data.result.pageNum;
								this.pageSize = res.data.result.pageSize;
								this.tableData = res.data.result.list;
							}
					})
					.catch(function (error) {
						console.log('*****************')
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