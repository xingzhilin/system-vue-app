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
		    <el-table-column align="center" prop="name" label="姓名"></el-table-column>
		    <el-table-column align="center" prop="tel" label="电话"></el-table-column>
		    <el-table-column align="center" prop="jiaose" label="角色"></el-table-column>
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
				formInline: {
					userName: '',
					userStatus: ''
				},
				tableData: [
					{
			          name: 'Lucy',
			          tel:'155901491414',
			          jiaose:'是'
			        },
			        {
			          name: 'Lily',
			          tel:'12131414',
			          jiaose:'是'
			        },
			        {
			          name: 'zhangsan',
			          tel:'1892234455',
			          jiaose:'是'
			        }
		        ]
		    }
		},
		methods: {
			handleGoback() {
				this.$router.go(-1);
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