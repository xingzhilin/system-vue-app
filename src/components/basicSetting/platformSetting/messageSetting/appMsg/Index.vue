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
				<el-select v-model="formInline.eventName" placeholder="请选择">
				    <el-option
				      v-for="item in eventName"
				      :key="item.value"
				      :value="item.value"
						>
				    </el-option>
				 </el-select>
			  </el-form-item>
			  <el-form-item>
			    停/启用状态：
				<el-select v-model="formInline.status" placeholder="请选择">
					<el-option label="启用" value="1"></el-option>
					<el-option label="停用" value="0"></el-option>
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
			    <el-table-column prop="eventName" label="事件名称"></el-table-column>
			    <el-table-column prop="status" label="停/启用状态">
					<template slot-scope="scope">
          	{{scope.row.status =='1'?'启用':'停用'}} 
        	</template>
					</el-table-column>
			    <el-table-column prop="createDate" label="创建时间"></el-table-column>
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
  data() {
    return {
      eventName: [
        {
          value: "出库预报"
        },
        {
          value: "发起出库"
        },
        {
          value: "结算单"
        },
        {
          value: "船只合同"
        }
      ],
      formInline: {
        eventName: "",
        stauts: "1"
      },
      currentPage: 1,
      tableData: []
    };
  },
  created() {
    this.dataSubmit();
  },
  methods: {
    handleSubmit() {
      console.log("查询!");
      this.dataSubmit();
    },
    handleReset() {
      this.formInline = {
        eventName: "",
        stauts: ""
      };
    },
    dataSubmit() {
			// this.$http.post('/api/user/register',this.formInline).then(res => {
      // });
      var data = {
        status: 200,
        message: "操作成功",
        total: 10,
        list: [
          {
            id: "1",
            eventName: "出库预报",
            status: "1",
            createDate: "2018/4/28 12:00:11"
          },
          {
            id: "2",
            eventName: "出库预报",
            status: "1",
            createDate: "2018/4/28 12:00:11"
          }
        ],
        pageSize: 1,
        pageNum: 1
      };
      this.tableData = data.list;
    },
    handleAdd() {
      console.log("新增");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style scoped lang="scss">
.el-container {
  padding: 15px;
}
.el-form {
  padding: 15px 0 0 20px;
}
.el-breadcrumb {
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
.el-table {
  width: 97%;
  margin: 0 auto;
}
.el-table .cell {
	text-align: center;
}
.el-table th>.cell{
	text-align: center;	
}
.el-pagination {
  padding: 15px;
  text-align: right;
}
.el-footer {
  padding: 0;
	 }
  .el-pagination {
    padding: 0;
    margin: 10px 15px;
    white-space: initial;
    text-align: right;
 
}
</style>