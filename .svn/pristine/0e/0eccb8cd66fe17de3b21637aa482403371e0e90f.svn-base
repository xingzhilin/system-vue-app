<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>基础设置</el-breadcrumb-item>
		  <el-breadcrumb-item>平台基础设置</el-breadcrumb-item>
		</el-breadcrumb>
			<el-form :inline="true" :model="formInline">
			  <el-form-item>
			  	事件名称：
				<el-select v-model="formInline.value" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :value="item.value">
				    </el-option>
				 </el-select>
			  </el-form-item>
			  <el-form-item>
			    停/启用状态：
				<el-select v-model="formInline.value1" placeholder="请选择">
				    <el-option
				      v-for="item in options1"
				      :key="item.value"
				      :value="item.value">
				    </el-option>
				 </el-select>
 			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary"  @click="handleSubmit" size="small">查询</el-button>
			    <el-button @click="handleReset" size="small">重置</el-button>
			  </el-form-item>
			</el-form>
			<el-container>
	        	<router-link :to="{path:'/platform/message/addAppMsg'}" >
	        		<el-button type="danger" @clcik="handleAdd" size="small">新增</el-button> 
	        	</router-link> 
	        </el-container>
			<el-table :data="tableData" border>
			    <el-table-column prop="" label="操作" width="150">		    	
			    	<template slot-scope="scope">
			    		<router-link :to="{path:'/platform/message/appMsgSee',query:{id:'1'}}">
			    			<el-button type="primary" size="mini">查看</el-button>
			    		</router-link>	
			    		<router-link :to="{path:'/platform/message/addAppMsg',query:{id:'1'}}">
			    			<el-button size="mini">处理</el-button>
			    		</router-link>	
				     </template>
			    </el-table-column>
			    <el-table-column prop="reMark" label="事件名称"></el-table-column>
			    <el-table-column prop="addTime" label="停/启用状态"></el-table-column>
			    <el-table-column prop="roleState" label="创建时间"></el-table-column>
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
				options: [{
		          value: '出库预报',
		        }, {
		          value: '发起出库',
		        }, {
		          value: '结算单',
		        }, {
		          value: '船只合同',
		        }],
		        options1:[{
		          value: '启用',
		        },{
		          value: '停用',
		        }],
				formInline: {
				   value:'',
		           value1:'启用',
		        },
		        currentPage: 1,
		        tableData: [
					{
			          reMark: 'Lily Li',
			          addTime:'启用',
			          roleState: '2018',
			        },
			        {
			          reMark: 'Lily Li',
			          addTime:'启用',
			          roleState: '2018',
			        },
			        {
			          reMark: 'Lily Li',
			          addTime:'启用',
			          roleState: '2018',
			        },
			        {
			          reMark: 'Lily Li',
			          addTime:'启用',
			          roleState: '2018',
			        }
		        ]
			}
		},
	    methods: {
	      handleSubmit() {
	        console.log('查询!');
	      },
	      handleReset(){
	      	this.formInline = {
		          value: '',
		          value1:'启用',
		        };
	      },
		  handleAdd(){
			console.log("新增");
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