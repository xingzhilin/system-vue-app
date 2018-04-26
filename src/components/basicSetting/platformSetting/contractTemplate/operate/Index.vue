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
		    		<el-button type="primary" size="mini" @click="handleCheck(scope.$index, scope.row)">查看</el-button>	
		    		<el-button size="mini" @click="handleUpdate(scope.$index, scope.row)">处理</el-button>	
			      </template>
		    </el-table-column>
		    <el-table-column align="center" prop="userName" label="合同名称"></el-table-column>
		    <el-table-column align="center" prop="trueUserName" label="合同别名"></el-table-column>
		    <el-table-column align="center" prop="phoneNum" label="合同使用类型"></el-table-column>
		    <el-table-column align="center" prop="departName" label="对应业务方式"></el-table-column>
		    <el-table-column align="center" prop="roleName" label="停/启用状态"></el-table-column>
		    <el-table-column align="center" prop="userStatus" label="更新时间"></el-table-column>
		</el-table>
		<el-footer style="height:auto">			
			<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-sizes="[100, 200, 300, 400]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
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
				formInline: {
					userName: '',
					trueUserName: '',
					departName: '',
					roleName: '',
					userStatus: ''
				},
				tableData: [
					{
			          userName: 'Lily',
			          phoneNum:'1283893044',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是',
			          date:'2016-05-02'
			        },
			        {
			          userName: 'Lily',
			          phoneNum:'1283893044',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是',
			          date:'2016-05-02'
			        },
			        {
			          userName: 'Lily',
			          phoneNum:'1283893044',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是',
			          date:'2016-05-02'
			        },
			        {
			          userName: 'Lily',
			          phoneNum:'1283893044',
			          departName: '运营',
			          roleName:'测试',
			          userStatus:'是',
			          date:'2016-05-02'
			        }
		        ],
		        currentPage: 4,
			}
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
				this.$router.push({name: 'contractOperateEditLink'});
			},
			handleCheck(index, row){
				console.log(index, row);
		        this.$router.push({name: 'contractOperateViewLink', params: { id: index }});
		        // v-bind:to="'/blog/' + blog.id"
			},
			handleUpdate(index, row) {
		        console.log(index, row);
		        this.$router.push({name: 'contractOperateEditLink', query: { id: index }});
		    },
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
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