<template>
	<div class="backstage">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="formInline" :rules="rules" ref="formInline" class="demo-form-inline">
		<el-form-item label="事件名称：" >
		    <el-input v-model="formInline.eventName" placeholder="" size="small"></el-input>
		</el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="handleSubmit('formInline')" size="small">查询</el-button>
		    <el-button @click="handleReset('formInline')" size="small">重置</el-button>
		  </el-form-item>
		</el-form>
		<el-table :data="tableData" border size="small">
		  <el-table-column prop="" label="操作" width="180" align="center">		    	
		    <template slot-scope="scope">
		    		<el-button type="primary"  @click="preview(ruleForm.imgUrl)" size="mini">查看</el-button>
			  </template>
		  </el-table-column>
		  <el-table-column align="center" prop="eventName" label="事件名称"></el-table-column>
		  <el-table-column align="center" prop="createTime" label="配置时间"></el-table-column>
		  
	</el-table>
	<el-footer style="height:auto">			
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
  <el-dialog :visible.sync="dialogVisible">
		  <img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
	</div>  
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        eventName: "",
        createTime: "",
        toPage: 1,
        pageSize: 10
      },
      provinceIdOptions: [],
      currentPage: 1,
      total: "",
      tableData: []
    };
  },
  created() {
    this.dataSubmit();
  },
  methods: {
    handleSubmit() {
      console.log(this.formInline);
      this.dataSubmit();
    },
    handleReset() {
      this.formInline = {
        eventName: "",
        status: "0",
        toPage: 1,
        pageSize: 10
      };
    },
    // handleAddAccount() {
    //    console.log("add");
    //   this.$router.push({ name: "addAccountLink" });
    //},
    //  handleCheck(index, row) {
    //   console.log(index, row);
    //   this.$router.push({ name: "checkAccountLink" });
    // },
    // handleEdit(index, row) {
    //   console.log(index, row);
    //   this.$router.push({ name: "editAccountLink" });
    // },
    handleSizeChange(val) {
      this.formInline.pageSize = val;
      this.dataSubmit();
    },
    handleCurrentChange(val) {
      this.formInline.toPage = val;
      this.dataSubmit();
    },
    dataSubmit() {
      // this.$http.post('/api/v1/basics/approval/process',this.formInline).then(res => {
      // });
      var data = {
        status: 200,
        message: "操作成功",
        total: 7,
        pageSize: 10,
        pageNum: 1,
        list: [
          {
            imageUrl: "c/d/aaa.jpg",
            eventName: "入库",
            createTime: "2018-05-12 10:38"
          },
          {
            imageUrl: "c/d/aaa.jpg",
            eventName: "出库",
            createTime: "2018-05-12 10:38"
          }
        ],
        pageSize: 1,
        pageNum: 1
      };
      this.total = data.total;
      this.tableData = data.list;
      this.currentPage = data.pageNum;
    }
  },
  preview(url) {
    this.dialogImageUrl = url;
    this.dialogVisible = true;
  }
};
</script>
<style scoped lang="scss">
.f-zj {
  font-size: 14px;
  padding: 5px 15px;
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
.el-form {
  padding: 15px 0 0 20px;
  color: #606266;
}
.el-table {
  width: 97%;
  margin: 0 auto;
}
.el-form-item {
  margin-bottom: 15px;
}
.el-container {
  padding: 15px;
  .total {
    display: inline-block;
    line-height: 30px;
    padding-left: 20px;
    font-size: 14px;
  }
}
.el-line {
  height: 2px;
  margin: 10px 15px 0;
  background-color: #f5f5f5;
}
.el-table .cell {
  text-align: center;
}
.el-footer {
  padding: 0;
  .el-pagination {
    padding: 0;
    margin: 10px 15px;
    white-space: initial;
    text-align: right;
  }
}
</style>