<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
			<el-form :inline="true" :model="formInline">
			  <el-form-item label="角色名称：">
			    <el-input v-model="formInline.roleName" size="small"></el-input>
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
			  <el-form-item label="角色状态：">
			    <el-select v-model="formInline.activeOption" size="small">
			      <el-option label="启用" value="qy"></el-option>
			      <el-option label="停用" value="ty"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary"  @click="handleSubmit" size="small">查询</el-button>
			    <el-button @click="handleReset" size="small">重置</el-button>
			  </el-form-item>
			</el-form>
			<el-container>
	        	<router-link :to="{path:'/backstage/addRole'}" >
	        		<el-button type="danger" size="small">添加角色</el-button> 
	        	</router-link> 
	        </el-container>
			<el-table :data="tableData" border>
			    <el-table-column prop="" label="操作" width="150">		    	
			    	<template slot-scope="scope">
			    		<router-link :to="{path:'/backstage/RoleAuthoritySee',query:{id:'1'}}">
			    			<el-button type="primary" size="mini">查看</el-button>
			    		</router-link>	
			    		<router-link :to="{path:'/backstage/addRole'}">
			    			<el-button size="mini">处理</el-button>
			    		</router-link>	
				     </template>
			    </el-table-column>
			    <el-table-column prop="userName" label="角色名称"></el-table-column>
			    <el-table-column prop="reMark" label="备注信息"></el-table-column>
			    <el-table-column prop="addTime" label="添加时间"></el-table-column>
			    <el-table-column prop="roleState" label="角色状态"></el-table-column>
			</el-table>
			<el-footer style="height:auto;">
				<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage"
			      :page-sizes="[10, 20, 30, 40]"
			      :page-size="20"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="40">
			    </el-pagination>
			</el-footer>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				formInline: {
		          roleName: '',
		          time:'',
		          activeOption:"qy"
		        },
		        Datepicker: [],
		        currentPage: 1,
		        time:"",
		        tableData: [
					{
			          userName: 'Lily',
			          reMark: 'Lily Li',
			          addTime:'2020',
			          roleState: '运营',
			        },
			        {
			          userName: 'Lily',
			          reMark: 'Lily Li',
			          addTime:'2020',
			          roleState: '运营',
			        },
			        {
			          userName: 'Lily',
			          reMark: 'Lily Li',
			          addTime:'2020',
			          roleState: '运营',
			        },
			        {
			          userName: 'Lucy',
			          reMark: 'Lily Li',
			          addTime:'2020',
			          roleState: '运营',
			        }
		        ]
			}
		},
	    methods: {
	      handleSubmit() {
	        console.log('submit!');
	      },
	      handleReset(){
	      	this.formInline = {
		          roleName: '',
		          time:'',
		          activeOption:"qy"
		        };
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
</style>