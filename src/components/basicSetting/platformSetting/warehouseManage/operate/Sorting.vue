<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-table :data="tableData" border size="small">
		    <el-table-column prop="" label="操作" width="180" align="center">		    	
		    	<template slot-scope="scope">
		    		<el-button type="text" size="mini" @click="handleMoveTop(scope.$index, scope.row)">置顶</el-button>
		    		<el-button type="text" size="mini" @click="handleMoveUp(scope.$index, scope.row)">上移</el-button>
		    		<el-button type="text" size="mini" @click="handleMoveDown(scope.$index, scope.row)">下移</el-button>
		    		<el-button type="text" size="mini" @click="handleMoveBottom(scope.$index, scope.row)">置底</el-button>
			      </template>
		    </el-table-column>
		    <el-table-column align="center" prop="userName" label="交割库名称"></el-table-column>
		    <el-table-column align="center" prop="trueUserName" label="所在港口"></el-table-column>
		    <el-table-column align="center" prop="phoneNum" label="所在地区"></el-table-column>
		    <el-table-column align="center" prop="departName" label="详细地址"></el-table-column>
		    <el-table-column align="center" prop="roleName" label="仓库类型"></el-table-column>
		    <el-table-column align="center" prop="userStatus" label="仓库状态"></el-table-column>
		</el-table>
		<el-footer>
			<el-button type="primary" @click="handleSubmitForm" size="small">保存</el-button>
			<el-button @click="handleGoBack" size="small">取消</el-button>
		</el-footer>
	</div>  
</template>
<script>
	export default {
		name: 'AccountManagement',
		data(){
			return {
				msg: 'AccountManagement',
				formInline: {
					userName: '',
					trueUserName: '',
					departName: '',
					roleName: '',
					userStatus: ''
				},
				sortFlag: 1, // 2,3,4,5,6
				tableData: [
					{
			          userName: '张三',
			          trueUserName: '张晓梅',
			          phoneNum:'167233242',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是'
			        },
			        {
			          userName: 'Lily',
			          trueUserName: 'Lily Li',
			          phoneNum:'1283893044',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是'
			        },
			        {
			          userName: '李四',
			          trueUserName: '李允浩',
			          phoneNum:'13700238721',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是'
			        },
			        {
			          userName: 'Lucy',
			          trueUserName: 'Lily Li',
			          phoneNum:'244324',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是'
			        }
		        ]
		    }
		},
		created(){
			let query = this.$route.query.id;
			console.log(query);
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
			handleCheck(index, row){
				console.log(index, row);
		        this.$router.push({name: 'checkAccountLink'});
			},
			handleSubmitForm(){
				console.log('tableData: ', this.tableData);
			},
			handleGoBack(){
				this.$router.go(-1);
			},
			handleMoveUp(index,item) { 
				console.log(index); 
				this.tableData.splice(index-1,0,(this.tableData[index]));
				this.tableData.splice(index+1,1);
				if(index == 0) {
					this.$alert('已经到顶了！', '提示', {
						confirmButtonText: '确定',
						type: 'warning',
						callback: action => {
							
						}
					})
				}  
			},  
			handleMoveDown(index,item) {
				console.log(index);
				this.tableData.splice(index+2,0,(this.tableData[index]));
				this.tableData.splice(index,1);
				if(index == this.tableData.length-1) { 
					this.$alert('已经是最后一项啦！', '提示', {
						confirmButtonText: '确定',
						type: 'warning',
						callback: action => {
							
						}
					})
				}  
			},
			handleMoveTop(index, item){
				this.tableData.splice(0,0,(this.tableData[index]));
				this.tableData.splice(index+1,1);
				if(index == 0) {
					this.$alert('已经到顶了！', '提示', {
						confirmButtonText: '确定',
						type: 'warning',
						callback: action => {
							
						}
					})
				}
			},
			handleMoveBottom(index, item){				
				this.tableData.splice(this.tableData.length,0,(this.tableData[index]));
				this.tableData.splice(index,1);
				if(index == this.tableData.length-1) {  
					this.$alert('已经是最后一项啦！', '提示', {
						confirmButtonText: '确定',
						type: 'warning',
						callback: action => {
							
						}
					})  
				} 
			}
		}
	}
</script>
<style lang="scss">
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
		padding: 20px 0;
		text-align: center;
		.el-pagination{
			padding:0;
			margin: 10px 15px;
			white-space: initial;
			text-align: right;
		}
	}
	.el-message-box__content{
		border-top: 1px solid #e2e2e2;
		margin-top:5px;
	}
	.el-message-box__status.el-icon-warning {
	    margin-top: 15px;
	    padding-left: 120px;
	}
	.el-message-box__message p{
		padding-top: 30px;
		font-size: 14px;
	    padding-left: 120px;
	}
</style>