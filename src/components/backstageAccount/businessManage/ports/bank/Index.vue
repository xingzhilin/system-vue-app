<template>
	<div class="backstage">
	<el-breadcrumb separator-class="el-icon-arrow-right">
	<el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
	<el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
	</el-breadcrumb>
	<el-form :inline="true" :model="formInline" :rules="rules" ref="formInline" class="demo-form-inline">
	<el-form-item label="企业名称：">
	<el-input v-model="formInline.enName" placeholder="" size="small"></el-input>
	</el-form-item>
	<el-form-item label="企业编码：">
	<el-input v-model="formInline.enCode" placeholder="" size="small"></el-input>
	</el-form-item>
	<el-form-item label="公司状态：">
	<el-select v-model="formInline.status" placeholder="请选择">
	<el-option label="启用" value="1"></el-option>
	<el-option label="停用" value="0"></el-option>
	</el-select>
	</el-form-item>
	<el-form-item label="企业注册时间：">
	<el-col :span="11">
	<el-date-picker type="datetime" v-model="formInline.startCreateTime" placeholder="选择日期" style="width: 100%;"></el-date-picker>
	</el-col>
	<el-col class="line" :span="2">-</el-col>
	<el-col :span="11">
	<el-date-picker type="datetime" v-model="formInline.endCreateTime" placeholder="选择日期" style="width: 100%;"></el-date-picker>
	</el-col>
	</el-form-item>
	<el-form-item>
	<el-button type="primary" @click="handleSubmit('formInline')" size="small">查询</el-button>
	<el-button @click="handleReset('formInline')" size="small">重置</el-button>
	</el-form-item>
	</el-form>
	<el-table :data="tableData" border size="small">
	<el-table-column prop="" label="操作" width="180" align="center">
	<template slot-scope="scope">
	<router-link :to="{path:'/business/ports/bank/See',query:{enId:scope.row.enId}}">
	<el-button type="primary" size="mini">查看</el-button>	
	</router-link> 
	<router-link :to="{path:'/business/ports/bank/Bianji',query:{enName:scope.row.enName}}">
	<el-button size="mini">处理</el-button>
	</router-link> 
</template>
		    </el-table-column>
		    <el-table-column align="center" prop="enName" label="企业名称"></el-table-column>
		    <el-table-column align="center" prop="enCode" label="企业编码"></el-table-column>
		    <el-table-column align="center" prop="bankName" label="开户行"></el-table-column>
		    <el-table-column align="center" prop="bankCardNo" label="银行账号"></el-table-column>
		    <el-table-column align="center" prop="updateTime" label="账号维护时间"></el-table-column>
			<el-table-column align="center" prop="status" label="企业状态">
                  <template slot-scope="scope">
                    {{scope.row.status =='1'?'启用':'停用'}} 
                  </template>
                </el-table-column>
			<el-table-column align="center" prop="createTime" label="企业注册时间"></el-table-column>
		   
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
  name: "Index",
  data() {
    return {
      msg: "Index",
      formInline: {
        enName: "",
        enCode: "",
        bankName: "",
        bankCardNo: "",
        updateTime: "",
        status: "",
        createTime: ""
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
        enName: "",
        enCode: "",
        status: "",
        startCreateTime: "",
        endCreateTime: ""
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
      // this.$http.post('/api/baiscs/enterPrise/bankList',this.formInline).then(res => {
      // });
      var data = {
        status: 200,
        message: "操作成功",
        total: 10,
        list: [
          {
            enName: "金银岛",
            enCode: "12154545",
            bankName: "中国工商银行",
            bankCardNo: "1234567897894221",
            updateTime: "2018-5-1 12:00",
            status: "0",
            createTime: "2018-5-1 12:00"
          }
        ],
        count: 100,
        pageSize: 1,
        pageNum: 1
      };
      this.total = data.total;
      this.tableData = data.list;
      this.currentPage = data.pageNum;
    }
  }
};
</script>
<style scoped lang="scss">
.line {
  text-align: center;
}

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