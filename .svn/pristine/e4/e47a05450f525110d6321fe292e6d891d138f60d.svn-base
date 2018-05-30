<template>
	<div class="settleCreate">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>结算单管理</el-breadcrumb-item>
		  <el-breadcrumb-item>生成结算单</el-breadcrumb-item>
		</el-breadcrumb>
			<el-form :inline="true" :model="formInline">
			  <el-form-item label="订单编号：">
			    <el-input v-model="formInline.orderNo" size="small"></el-input>
			  </el-form-item>
			  <el-form-item label="企业名称：">
			    <el-input v-model="formInline.emName" size="small"></el-input>
			  </el-form-item>
			  <el-form-item label="生成时间：">
			  	 <el-col :span="11">
			      <el-date-picker type="datetime" value-format="yyyy-MM-dd HH:mm:ss" v-model="formInline.startDate" placeholder="选择日期" style="width: 100%;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="2">至</el-col>
			    <el-col :span="11">
			      <el-date-picker type="datetime" value-format="yyyy-MM-dd HH:mm:ss" v-model="formInline.endDate" placeholder="选择日期" style="width: 100%;"></el-date-picker>
			    </el-col>
			  </el-form-item>	
			  <el-form-item>
			    <el-button type="primary"  @click="handleSubmit" size="small">查询</el-button>
			    <el-button @click="handleReset" size="small">重置</el-button>
			  </el-form-item>
			</el-form>
			<el-col style="textAlign:right;padding:15px;">
				下单时间：{{resData.orderDate}}
			</el-col>
			<el-col style="padding:0 15px;">
				<el-col class="tableTitle">
					<el-col :lg="4" :xs="12" :md="4" :sm="6">
						订单编号：{{resData.orderNo}}
					</el-col>
					<el-col :lg="4" :xs="12" :md="4" :sm="6">
						客户：{{resData.customerName}}
					</el-col>
					<el-col :lg="4" :xs="12" :md="4" :sm="6">
						供应链：{{resData.scm}}
					</el-col>
					<el-col :lg="4" :xs="12" :md="4" :sm="6">
						交割库：{{resData.whName}}
					</el-col>
					<el-col :lg="4" :xs="12" :md="4" :sm="6">
						品种：{{resData.productName}}
					</el-col>
					<el-col :lg="4" :xs="12" :md="4" :sm="6">
						下单量：{{resData.orderQty}} 吨
					</el-col>
				</el-col>
			</el-col>
			<el-table :data="tableData" border>
				<el-table-column type="selection" width="55"></el-table-column>
			    <el-table-column prop="batchNo" label="批次号"></el-table-column>
			    <el-table-column prop="whName" label="交割库"></el-table-column>
			    <el-table-column prop="productName" label="品种"></el-table-column>
			    <el-table-column prop="settleQty" label="结算量"></el-table-column>
			    <el-table-column prop="inDate" label="入库时间"></el-table-column>
			    <el-table-column prop="rejectYn" label="是否拒收"></el-table-column>
			    <el-table-column align="center" prop="delFlag" label="主要指标">
			    	<el-table-column prop="dwfrl" label="低位发热量"></el-table-column>
				    <el-table-column label="全硫">
				    	<template slot-scope="scope">
				    		{{scope.row.qlsdj}}
				    		{{scope.row.qlgzj}}
				    	</template>
				    </el-table-column>
				    <el-table-column prop="qssdj" label="全水分"></el-table-column>
				    <el-table-column prop="sfkgj" label="水分"></el-table-column>
			    </el-table-column>
			    <div slot="empty">
					<img src="../../../../../assets/images/no-message.png" alt="">
			    </div>
			</el-table>
			<el-col style="padding:0 15px;">
				<el-col class="tableTitle">
					本次结算总吨数：{{resData.sumQty}}吨
					结算单加权指标：
					低位发热量：{{resData.dwfrl}}
					全硫 收到基：{{resData.qlsdj}}
					干燥基：{{resData.qlgzj}}
					全水 收到基：{{resData.qssdj}} 吨
					水分 空气干燥基：{{resData.sfkgj}} 吨
				</el-col>
			</el-col>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				formInline: {
		          orderNo: '',
		          emName:'',
		          startDate:'',
		          endDate:"",
		        },
		        resData:{},
		        tableData: []
			}
		},
		created(){
			this.dataSubmit();
		},
	    methods: {
	      handleSubmit() {
	        this.dataSubmit();
	      },
	      handleReset(){
	      	this.formInline = {
	          orderNo: '',
	          emName:'',
	          startDate:'',
	          endDate:"",
	        };
	      },
		   dataSubmit(){
		   // 		this.$axios.post('http://192.168.11.98:9001/admin/userRoles',this.formInline).then(res=>{
		   // 			console.log(res)
		   // 			let data = res.data;
					// this.resData = data.result.list;
		   // 		});
		   },
	    }

	}
</script>
<style scoped lang="scss">
	.settleCreate {
		color: #606266;
		font-size: 14px;

	}
	.el-container {
		padding: 15px;
	}
	.el-form{
		padding: 15px 0 0 20px;
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
	.line {
		text-align: center;
	}
	.el-table{
		width:97%;
		margin: 0 auto;
	}
	.el-pagination {
		padding: 15px;
		text-align: right;
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
	.tableTitle{
		line-height:30px;
		padding:15px;
		white-space:nowrap; 
		overflow:hidden; 
		text-overflow:ellipsis;
		background: #ebeef5;
	}
</style>