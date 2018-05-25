<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="infoShow">
			<p>交割库：天津港</p>
		</div>
		<h5>已设置人员信息</h5>
		<el-table :data="tableData" border size="small">
		    <el-table-column align="center" prop="userName" label="姓名"></el-table-column>
		    <el-table-column align="center" prop="cellPhone" label="电话"></el-table-column>
		    <el-table-column align="center" prop="userRoles" label="角色">
		    	<template slot-scope="scope">
			    	<span v-for="role in roles">{{role.roleName}};</span>
			    </template>
		    </el-table-column>
		</el-table>
		<el-button @click="handleGoback" size="small">返回</el-button>
	</div>  
</template>
<script>
	export default {
		name: 'WarehouseView',
		data(){
			return {
				msg: '交割库权限设置-查看',
				isLoading:true,
				sParams: {},
				tableData: [],
				pageSize: 100,
				pageSizes:[2, 3, 5, 10],
		        currentPage: 1,
		        totalPage: null,
				tableData: []
		    }
		},
		mounted(){
			this.initList(this.currentPage, this.pageSize);
		},
		methods: {
			handleGoback() {
				this.$router.go(-1);
			},
			initList(toPage, pageSize){				
				this.sParams.toPage = toPage;
		    	this.sParams.pageSize = pageSize;
		    	this.sParams.whCode = this.$route.query.whCode;
				this.$axios.post('http://192.168.11.98:9001/admin/whauths' ,this.sParams, {
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
						console.log(res)
						if(res.data.status == 200){							
							this.isLoading = false;
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
	.el-table{
		width:97%;
		margin: 0 auto;
	}
	.el-form-item{
		margin-bottom:15px;
	}
	.el-table .cell{
		text-align: center;
	}
	.infoShow{
		padding:0 30px;
	}
	.el-table th{
		background:#f5f7fa !important;
	}
	.account{

		
		h5{
			padding: 0 30px 15px 30px;
			font-size:14px;
			margin:0;
		}
	}

</style>