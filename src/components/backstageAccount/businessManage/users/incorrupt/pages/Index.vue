<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>前台账号管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
            <el-form :inline="true" :model="formInline">
              <el-form-item label="企业名称：">
                <el-input v-model.trim="formInline.enName" size="small"></el-input>
              </el-form-item>
              <el-form-item label="企业编码：">
                <el-input v-model.trim="formInline.enCode" size="small"></el-input>
              </el-form-item>
              <el-form-item label="公司状态：">
		            <el-select v-model="formInline.status" placeholder="请选择" size="small">  
		              <el-option label="请选择" value=""></el-option>
		              <el-option label="启用" value="1"></el-option>
		              <el-option label="停用" value="0"></el-option>
		            </el-select>
		          </el-form-item>
              <el-form-item>
                <el-button type="primary"  @click="handleSubmit" size="small">查询</el-button>
                <el-button @click="handleReset" size="small">重置</el-button>
              </el-form-item>
            </el-form>
           
            <el-table :data="tableData" border>
                <el-table-column prop="" label="操作" align="center"  width="150">                
                    <template slot-scope="scope">
                        <router-link :to="{path:'/business/users/list/view',query:{name,enId:scope.row.enId}}">
                            <el-button type="primary" size="mini">查看</el-button>
                        </router-link>  
                        <router-link :to="{path:'/business/users/incorrupt/deal',query:{incorruptId:scope.row.incorruptId}}">
                            <el-button size="mini">处理</el-button>
                        </router-link>  
                     </template>
                </el-table-column>
                <el-table-column prop="enName" align="center" label="企业名称"></el-table-column>
                <el-table-column prop="enCode" align="center" label="企业编码"></el-table-column>
                <el-table-column prop="status" align="center" label="公司状态">
                  <template slot-scope="scope">
                    {{scope.row.status =='1'?'启用':'停用'}} 
                  </template>
                </el-table-column>
                <el-table-column prop="companyRegisterDate" align="center" label="企业注册时间"></el-table-column>
               
               
                <div slot="empty">
                    <img src="../../../../../../assets/images/no-message.png" alt="">
                </div>
            </el-table>
            <el-footer style="height:auto;">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="20"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
                </el-pagination>
            </el-footer>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "list",
      formInline: {
        userName: "",
        enCode: "",
        status: "",
        toPage: 1,
        pageSize: 10
      },
      provinceIdOptions: [],
      currentPage: 1,
      total: null,
      tableData: []
    };
  },
  created() {
    this.getProvinceIdOptions();
    this.dataSubmit();
  },
  methods: {
    handleSubmit() {
      this.dataSubmit();
    },
    handleReset() {
      this.formInline = {
        userName: "",
        enCode: "",
        status: "",
        toPage: 1,
        pageSize: 10
      };
    },
    handleSizeChange(val) {
      this.formInline.pageSize = val;
      this.dataSubmit();
    },
    handleCurrentChange(val) {
      this.formInline.toPage = val;
      this.dataSubmit();
    },
    dataSubmit() {
      console.log(this.formInline);
      //this.$axios.post('http://192.168.15.172:9001/api/v1/admin/basics/register/users',this.formInline).then(res=>{
      //		console.log(res)

      //	let data = res.data;
      //   this.total = data.result.total;
      //this.tableData = data.result.list;
      //this.currentPage = data.result.pageNum;
      // });
    },
    dataSubmit() {
      var data = {
        status: 200, //（状态）
        message: "操作成功", //（消息）
        total: 10, //（总数量）
        list: [
          {
            enId: "16", //(企业主键)
            enName: null, //（企业名称）
            enCode: null, //（企业编码）
            status: null, //（公司状态，0：停用，1：启用）
            companyRegisterDate: "2018-04-24 12:00:00.0" //（企业注册时间，注意格式）
          },
          {
            enId: "16", //(企业主键)
            enName: null, //（企业名称）
            enCode: null, //（企业编码）
            status: null, //（公司状态，0：停用，1：启用）
            companyRegisterDate: "2018-04-24 12:00:00.0" //（企业注册时间，注意格式）
          }
        ],
        pageSize: 1, //（每页显示条数）
        pageNum: 1 //(当前页码)
      };
      this.tableData = data.list;
    },
    getProvinceIdOptions() {
      //this.$axios.post('http://192.168.15.172:9001/api/v1/admin/basics/register/users',{isProvince:1}).then(res=>{
      // 			console.log(res)
      //})
    }
  }
};
</script>
<style scoped lang="scss">
.f-zj {
  font-size: 14px;
  padding: 5px 15px;
}
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
.el-pagination {
  padding: 15px;
  text-align: right;
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