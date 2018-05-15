<template>
	<div class="order_wrap">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
          <el-breadcrumb-item>订单管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">

		  <el-form-item label="企业名称：" prop="userName">
		    <el-input v-model="formInline.userName" placeholder="交割库" size="small"></el-input>
		  </el-form-item>
		  <el-form-item label="批次号：" prop="userName">
		    <el-input v-model="formInline.userName" placeholder="交割库" size="small"></el-input>
		  </el-form-item>
		  <el-form-item label="下单时间：">
		    <el-date-picker
              v-model="formInline.name"
              type="date"
              size='mini'
              placeholder="选择日期">
            </el-date-picker>
            至
            <el-date-picker
              v-model="formInline.name"
              type="date"
              size='mini'
              placeholder="选择日期">
            </el-date-picker>
		  </el-form-item>		  	  	
		  <el-form-item label="审核状态：" prop="userStatus">
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
		
  		<el-table :data="tableData" border size="small" style="width:100%;">
		    <el-table-column fixed label="操作" width="180" align="center">		    	
		    	<template slot-scope="scope">
		    		<router-link :to="{name: 'inboundInputViewLink', query: {batchNo: scope.row.batchNo, enName: scope.row.enName, tranterType: scope.row.tranterType}}">
		    			<el-button type="primary" size="mini">查看</el-button>
		    		</router-link>
		    		<router-link :to="{name: 'inboundInputUpdateLink', query: {batchNo: scope.row.batchNo, enName: scope.row.enName, tranterType: scope.row.tranterType}}">
		    			<el-button type="primary" size="mini">处理</el-button>
		    		</router-link>
			    </template>
		    </el-table-column>
		    <el-table-column fixed align="center" prop="enName" label="企业名称" ></el-table-column>
		    <el-table-column fixed align="center" prop="whName" label="交割库信息"></el-table-column>
		    <el-table-column fixed align="center" prop="className" label="品种"></el-table-column>
		    <el-table-column align="center" prop="storeQuantity" label="原始吨数"></el-table-column>
		    <el-table-column align="center" prop="adjustmentQuantity" label="调吨"></el-table-column>
		    <el-table-column align="center" prop="storeTime" label="实际入库吨数"></el-table-column>
		    <el-table-column align="center" prop="storeTime" label="入库时间"></el-table-column>
		    <el-table-column align="center" prop="tranterType" label="运输方式"></el-table-column>
		    <el-table-column align="center" prop="status" label="审核状态"></el-table-column>
		    <el-table-column align="center" prop="batchNo" label="批次号"></el-table-column>
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
				msg: '港口费用类型',
				formInline: {
					userName: '',
					trueUserName: '',
					departName: '',
					roleName: '',
					userStatus: '',
					status: 3
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
				this.$router.push({name: 'sortCostAddLink'});
			},
			handleCheck(index, row){
				console.log(row);
		        this.$router.push({name: 'sortCostViewLink', params: {id: row.id}});
			},
			handleEdit(index, row) {
		        console.log(index, row);
		        this.$router.push({name: 'sortCostAddLink', query: { flag: 'edit', id: row.id}});
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
						"enName": null,
						"enId": null,
						"whName":"天津港（交割库信息=交割库+货场+堆位）",
						"placeName":"货场",
						"pileName":"堆位",
						"className": "品种",
						"originalQuantity": "原始吨数",
						"adjustmentQuantity": "调吨",
						"storeTime": "2018-04-24 12:00:00.0",
						"tranterType": 1,
						"status": null,
						"batchNo": "PC20180213"
					}
				]

		    },
		    renderHeader(createElement, { column, $index }) {
	            let label = column.label;
	            let labelArr = label.split(' ');
	             return createElement(
	                'div',
	                {
	                'class': 'header_center'
	                },
	                [
	                    createElement('em', {
	                            attrs: { type: 'text', style: 'color:red; padding-right:5px;font-style:normal;' },
	                        }, [labelArr[0]]
	                        ),
	                        createElement('span', {
	                            attrs: { type: 'text', style: 'display: inline-block'},
	                        }, [labelArr[1]]
	                    )
	                ]
	            )
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
		#em_red{
			color: red;
		}
	}
	.table_header{
		height: 105px;
		line-height:105px;
		background: #f2f2f2;
		.table_info{
			line-height: 34px;
   			padding-top: 20px;
   			font-size: 14px;
		}
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