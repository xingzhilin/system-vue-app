<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>基础设置</el-breadcrumb-item>
		  <el-breadcrumb-item>平台基础设置</el-breadcrumb-item>
		</el-breadcrumb>
			<el-form :inline="true" :model="formInline">
			  <el-form-item label="品种名称：">
			    <el-input v-model.trim="formInline.className" size="small"></el-input>
			  </el-form-item>
			  <el-form-item label="品类名称：">
			    <el-select v-model.trim="formInline.catCode" size="small">
			      <el-option v-for="(item,index) in catCodeOptions" :key="item.catCode" :label="item.catName" :value="item.catCode">
			      </el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="品牌名称：">
			    <el-select v-model.trim="formInline.brandCode" size="small">
			      <el-option v-for="(item,index) in brandCodeOptions" :key="item.brandCode" :label="item.brandName" :value="item.brandCode">
			      </el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="煤炭状态：">
			    <el-select v-model.trim="formInline.status" size="small">
			      <el-option label="启用" value="1"></el-option>
			      <el-option label="停用" value="0"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="添加时间：">
			  	 <el-col :span="11">
			      <el-date-picker type="datetime" value-format="yyyy-MM-dd HH:mm" v-model.trim="formInline.addStartDate" placeholder="选择日期" style="width: 100%;"></el-date-picker>
			    </el-col>
			    <el-col class="line" :span="2">至</el-col>
			    <el-col :span="11">
			      <el-date-picker type="datetime" value-format="yyyy-MM-dd HH:mm" v-model.trim="formInline.addEndDate" placeholder="选择日期" style="width: 100%;"></el-date-picker>
			    </el-col>
			  </el-form-item>	
			  <el-form-item>
			    <el-button type="primary"  @click="handleSubmit" size="small">查询</el-button>
			    <el-button @click="handleReset" size="small">重置</el-button>
			  </el-form-item>
			</el-form>
			<el-container>
	        	<router-link :to="{path:'/platform/coalType/jydCoal/add'}" >
	        		<el-button type="danger" size="small">添加品种</el-button> 
	        	</router-link> 
	        </el-container>
			<el-table :data="tableData" border>
			    <el-table-column prop="" label="操作" width="150">		    	
			    	<template slot-scope="scope">
			    		<router-link :to="{path:'/platform/coalType/jydCoal/see',query:{classCode:scope.row.classCode}}">
			    			<el-button type="primary" size="mini">查看</el-button>
			    		</router-link>	
			    		<router-link :to="{path:'/platform/coalType/jydCoal/editor',query:{classCode:scope.row.classCode}}">
			    			<el-button size="mini">处理</el-button>
			    		</router-link>	
				     </template>
			    </el-table-column>
			    <el-table-column prop="className" label="品种"></el-table-column>
			    <el-table-column prop="brandName" label="品牌"></el-table-column>
			    <el-table-column prop="catName" label="所属品类"></el-table-column>
			    <el-table-column prop="createTime" label="添加时间"></el-table-column>
			    <el-table-column prop="status" label="煤炭状态"></el-table-column>
			</el-table>
			<el-footer style="height:auto;">
				<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage"
			      :page-sizes="[10, 20, 30, 40]"
			      :page-size="formInline.pageSize"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="total">
			    </el-pagination>
			</el-footer>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				formInline: {
				  className:'',
				  catCode:'',
		          brandCode: '',
		          addStartDate:'',
		          addEndDate:'',
		          status:'',
				  toPage: 1,
		          pageSize: 10,

		        },
		        catCodeOptions:[{
		        	catName:'1',
		        	catCode:'1'
		        }
		        ],
		        brandCodeOptions:[{
		        	brandName:'1',
		        	brandCode:'1'
		        }
		        ],
		        currentPage: 1,
		        total:11,
		        time:"",
		        tableData: []
			}
		},
		created(){
			this.dataSubmit();
			this.getCatCodeOptions();
			this.getBrandCodeOptions();
		},
	    methods: {
	      handleSubmit() {
	      	console.log(this.formInline)
	        this.dataSubmit();
	      },
	      handleReset(){ 
	      	this.formInline = {
				  className:'',
				  catCode:'',
		          brandCode: '',
		          addStartDate:'',
		          addEndDate:'',
		          status:'',
				  toPage: 1,
		          pageSize: 10,

		        };
	      },
		  handleSizeChange(val) {
		        this.pageSize = val;
		        this.dataSubmit();
		   },
		  handleCurrentChange(val) {
		        this.formInline.toPage = val;
		        this.dataSubmit();
		   },
		   dataSubmit(){
			   	var data = {
					'status': 200,
					'message': '操作成功',
					'total': 7,
					'pageSize': 10,
					'pageNum': 1,
					'list': [
						{
						'status':'1',
						'classCode': '14',
						'className': '金银岛一号',
						'industryCode': '1',
						'industryName': '煤炭',
						'brandName': '金银岛',
						'catName': '动力煤',
						'createTime': '2018-05-12 05:22'
						}
					]
				};
				this.total = data.total;
				this.tableData = data.list;
				this.currentPage = data.pageNum;
		   },
		   getCatCodeOptions(){
			// this.$http.get('/api/commons/categories').then(res=>{
	             // this.catCodeOptions = res.list;
	              
	          // });
	          var res = {
				  "status": 200,
				  "message": "操作成功",
				  "list": [
				    {
				      "catCode": "14",
				      "catName": "动力煤"
				    },
				     {
				      "catCode": "12",
				      "catName": "动力煤"
				    }]
				};
				this.catCodeOptions = res.list;

		   },
		   getBrandCodeOptions(){
		   	// this.$http.get('/api/commons/brands').then(res=>{
	             // this.brandCodeOptions = res.list;
	              
	          // });
	          var res = {
				  "status": 200,
				  "message": "操作成功",
				  "list": [
				    {
				      "brandCode": "14",
				      "brandName": "金银岛一号"
				    },
				     {
				      "brandCode": "11",
				      "brandName": "金银岛二号"
				    }]
				};
				this.brandCodeOptions = res.list;
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