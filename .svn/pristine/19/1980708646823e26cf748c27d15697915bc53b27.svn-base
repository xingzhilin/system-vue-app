<template>
	<div class="order_wrap">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>采购端管理</el-breadcrumb-item>
          <el-breadcrumb-item>称重管理</el-breadcrumb-item>
          <el-breadcrumb-item>入库录入</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">

		  <el-form-item label="企业名称：" prop="userName">
		    <el-input v-model="formInline.userName" placeholder="交割库" size="small"></el-input>
		  </el-form-item>	  	
		  <el-form-item label="供应链" prop="userStatus">
		    <el-select v-model="formInline.userStatus" placeholder="请选择" size="small">  
		      <el-option label="请选择" value=""></el-option>
		      <el-option label="启用" value="1"></el-option>
		      <el-option label="停用" value="0"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="订单编号：" prop="userName">
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
		  <el-form-item>
		    <el-button type="primary" @click="handleSubmit('formInline')" size="small">查询</el-button>
		    <el-button @click="handleReset('formInline')" size="small">重置</el-button>
		  </el-form-item>
		</el-form>
		<div class="el-line"></div>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content bg-purple-dark" v-for="item in tableData">
		  		<div class="table_header">
		  			<el-col :span="4">
			  			<span>定价</span>
			  			<template slot-scope="scope">
				    		<router-link :to="{name: 'inboundInputAddLink', query: {orderNo: scope.row.orderNo, tranterType: scope.row.tranterType}}">
				    			<el-button type="primary" size="mini">入库录入</el-button>
				    		</router-link>
					    </template>
			  		</el-col>
		  			<el-col :span="20" class="table_info">
		  				<div class="table_info_li">
		  					订单编号：{{item.orderNo}}
				  			企业名称：{{item.enName}}
				  			供应链：{{item.supplyChainName}}
				  			交割库：{{item.whName}}
		  				</div>
			  			<div class="table_info_li">
			  				品种：{{item.className}}
				  			下单量：{{item.orderQuantity}}
				  			运输方式：{{item.tranterType}}
				  			下单时间：{{item.orderTime}}
			  			</div>
		  			</el-col>
		  		</div>
		  		<el-table :data="item.storeInfo" border size="small" style="width:100%;">
				    <el-table-column fixed label="操作" width="90" align="center">		    	
				    	<template slot-scope="scope">
				    		<router-link :to="{name: 'inboundInputAddLink', query: {batchNo: scope.row.batchNo, tranterType: item.tranterType}}">
				    			<el-button type="primary" size="mini">入库录入</el-button>
				    		</router-link>
					    </template>
				    </el-table-column>
				    <el-table-column fixed align="center" prop="batchNo" label="批次号" ></el-table-column>
				    <el-table-column fixed align="center" prop="whName" label="实际入库交割库"></el-table-column>
				    <el-table-column fixed align="center" prop="className" label="实际入库品种"></el-table-column>
				    <el-table-column align="center" prop="storeQuantity" label="入库吨数"></el-table-column>
				    <el-table-column align="center" prop="storeTime" label="入库时间"></el-table-column>
				</el-table>
				
		  	</div>
		  </el-col>
		</el-row>
		
		

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
				      "orderId": "11111",
				      "orderNo": "Y20180321",
				      "enName": "煤炭公司",
				      "enId": "企业ID",
				      "supplyChainName": "金银岛宁夏",
				      "whName": "天津港",
				      "className": "金银岛1号",
				      "orderQuantity": 5000000,
				      "tranterType":"1",
				      "orderTime": "2018-04-24 12:00:00.0",
				      "storeInfo":[
				      		{
				      			"batchNo":"煤炭网20180321",
				      			"whName":"实际入库交割库",
				      			"className":"金银岛1#",
				      			"storeQuantity":5000,
				      			"storeTime":"2018-01-02 12:00:00"
				      		},
				      		{"batchNo":"煤炭网20180321",
				      		"whName":"实际入库交割库",
				      		"className":"金银岛1#",
				      		"storeQuantity":5000,
				      		"storeTime":"2018-01-02 12:00:00"
				      	}
				      ]
				    },
				    {
				      "orderId": "11112",
				      "orderNo": "Y201803567",
				      "enName": "煤炭公司222",
				      "enId": "企业ID",
				      "supplyChainName": "金银岛宁夏333",
				      "whName": "天津港444",
				      "className": "金银岛1号555",
				      "orderQuantity": 5000000,
				      "tranterType":"2",
				      "orderTime": "2018-04-24 12:00:00.0",
				      "storeInfo":[
				      		{
				      			"batchNo":"3443煤炭网20180321",
				      			"whName":"34534实际入库交割库",
				      			"className":"345345金银岛1#",
				      			"storeQuantity":5000,
				      			"storeTime":"2018-01-02 12:00:00"
				      		},
				      		{"batchNo":"34543煤炭网20180321",
				      		"whName":"35实际入库交割库",
				      		"className":"345金银岛1#",
				      		"storeQuantity":500055,
				      		"storeTime":"2018-01-02 12:00:00"
				      	}
				      ]
				    },
				    {
				      "orderId": "11113",
				      "orderNo": "Y20180356723",
				      "enName": "33333333333",
				      "enId": "企业ID",
				      "supplyChainName": "金银岛宁夏333",
				      "whName": "天津港444",
				      "className": "金银岛1号555",
				      "orderQuantity": 5000000,
				      "tranterType":"3",
				      "orderTime": "2018-04-24 12:00:00.0",
				      "storeInfo":[
				      		{
				      			"batchNo":"3443煤炭网20180321",
				      			"whName":"34534实际入库交割库",
				      			"className":"345345金银岛1#",
				      			"storeQuantity":5000,
				      			"storeTime":"2018-01-02 12:00:00"
				      		},
				      		{"batchNo":"34543煤炭网20180321",
				      		"whName":"35实际入库交割库",
				      		"className":"345金银岛1#",
				      		"storeQuantity":500055,
				      		"storeTime":"2018-01-02 12:00:00"
				      	}
				      ]
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