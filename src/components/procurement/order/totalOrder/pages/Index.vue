<template>
	<div class="order_wrap">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
          <el-breadcrumb-item>订单管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">	  	
		  <el-form-item label="业务类型" prop="userStatus">
		    <el-select v-model="formInline.userStatus" placeholder="请选择" size="small">  
		      <el-option label="请选择" value=""></el-option>
		      <el-option label="启用" value="1"></el-option>
		      <el-option label="停用" value="0"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="交割库：" prop="userName">
		    <el-input v-model="formInline.userName" placeholder="交割库" size="small"></el-input>
		  </el-form-item>	
		  <el-form-item label="订单状态：" prop="userStatus">
		    <el-select v-model="formInline.userStatus" placeholder="请选择" size="small">  
		      <el-option label="请选择" value=""></el-option>
		      <el-option label="启用" value="1"></el-option>
		      <el-option label="停用" value="0"></el-option>
		    </el-select>
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
		  <el-form-item>
		    <el-button type="primary" @click="handleSubmit('formInline')" size="small">查询</el-button>
		    <el-button @click="handleReset('formInline')" size="small">重置</el-button>
		  </el-form-item>
		</el-form>
		<div class="el-line"></div>
		<el-container>
	      <el-button type="danger" @click="handleAdd" size="small">导出Excel</el-button>
	      <div class="total_num">
	      	总计订单数：<span>50,726</span>
			总下单量：<span>300,000,000.00</span>
			已入库量：<span>200,000,000.00</span>
			未点价量：<span>100,000,000.00</span>
			未入库量：<span>100,000,000.00</span>
	      </div>
	    </el-container>
		<el-table :data="tableData" border size="small" style="width:100%;">
		    <el-table-column fixed label="操作" width="90" align="center">		    	
		    	<template slot-scope="scope">
		    		<el-button type="primary" size="mini" @click="handleCheck(scope.$index, scope.row)">查看</el-button>
			    </template>
		    </el-table-column>
		    <el-table-column fixed align="center" prop="portCostType" label="用户名/交易商" ></el-table-column>
		    <el-table-column fixed align="center" prop="portCostTypeCode" label="业务类型"></el-table-column>
		    <el-table-column fixed align="center" prop="status" label="品种"></el-table-column>
		    <el-table-column align="center" prop="createDate" label="交割库"></el-table-column>
		    <el-table-column align="center" prop="status" label="交付地"></el-table-column>
		    <el-table-column align="center" prop="createDate" width="120" label="下单数量"  :render-header="renderHeader"></el-table-column>
		    <el-table-column align="center" prop="status" label="入库数量"></el-table-column>
		    <el-table-column align="center" prop="createDate" label="实际入库数量"></el-table-column>
		    <el-table-column align="center" prop="status" label="结算扣罚"></el-table-column>
		    <el-table-column align="center" prop="createDate" label="实际结算数量"></el-table-column>
		    <el-table-column align="center" prop="status" label="已点价吨数"></el-table-column>
		    <el-table-column align="center" prop="createDate" label="未点价吨数"></el-table-column>
		    <el-table-column align="center" prop="status" label="基本价"></el-table-column>
		    <el-table-column align="center" prop="createDate" label="保证金单价"></el-table-column>
		    <el-table-column align="center" prop="status" label="结算单价"></el-table-column>
		    <el-table-column align="center" prop="createDate" label="保证金总额"></el-table-column>
		    <el-table-column align="center" prop="status" label="下单总额"></el-table-column>
		    <el-table-column align="center" prop="createDate" label="结算总额"></el-table-column>
		    <el-table-column align="center" prop="status" label="已付货款"></el-table-column>
		    <el-table-column align="center" prop="status" label="已收发票"></el-table-column>
		    <el-table-column align="center" prop="status" label="下单时间"></el-table-column>
		    <el-table-column align="center" prop="createDate" label="交货开始日"></el-table-column>
		    <el-table-column align="center" prop="status" label="交货截止日"></el-table-column>
		    <el-table-column align="center" prop="createDate" label="订单编号"></el-table-column>
		    <el-table-column align="center" prop="status" label="订单状态"></el-table-column>
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
				      "id":"1",
				      "portCostType": "港建费",
				      "portCostTypeCode": "1",
				      "status": "1",
				      "createDate": "2018/4/28 12:00:11",
				    },
				    {
				      "id":"2",
				      "portCostType": "港杂费",
				      "portCostTypeCode": "1",
				      "status": "1",
				      "createDate": "2018/4/28 12:00:11"
				    }
				]

		    },
		    renderHeader(createElement, { column, $index }) {
	            let label = column.label;
	             return createElement(
	                'div',
	                {
	                'class': 'header_center'
	                },
	                [
	                    createElement('em', {
	                            attrs: { type: 'text', style: 'color:red; padding-right:5px;font-style:normal;' },
	                        }, ['*']
	                        ),
	                        createElement('span', {
	                            attrs: { type: 'text', style: 'display: inline-block'},
	                        }, [label]
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