<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>前台账号管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
            <el-form :inline="true" :model="formInline">
              <el-form-item label="用户名：">
                <el-input v-model.trim="formInline.userName" size="small"></el-input>
              </el-form-item>
              <el-form-item label="手机号码：">
                <el-input v-model.trim="formInline.cellPhone" size="small"></el-input>
              </el-form-item>
              <el-form-item label="用户状态：">
		            <el-select v-model="formInline.status" placeholder="请选择" size="small">  
		              <el-option label="请选择" value=""></el-option>
		              <el-option label="启用" value="1"></el-option>
		              <el-option label="停用" value="0"></el-option>
		            </el-select>
		          </el-form-item>
              <el-form-item label="注册时间：">
                 <el-col :span="11">
                  <el-date-picker type="createTime" value-format="yyyy-MM-dd HH:mm:ss" v-model.trim="formInline.startCreateTime" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">至</el-col>
                <el-col :span="11">
                  <el-date-picker type="createTime" value-format="yyyy-MM-dd HH:mm:ss" v-model.trim="formInline.endCreateTime" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item> 
              <el-form-item label="用户状态：">
		            <el-select v-model="formInline.source" placeholder="请选择" size="small">  
		              <el-option label="请选择" value=""></el-option>
		              <el-option label="APP" value="1"></el-option>
		              <el-option label="前台PC" value="0"></el-option>
                  <el-option label="后台" value="0"></el-option>
		            </el-select>
		          </el-form-item>
              <el-form-item>
                <el-button type="primary"  @click="handleSubmit" size="small">查询</el-button>
                <el-button @click="handleReset" size="small">重置</el-button>
              </el-form-item>
            </el-form>
            <el-container>
                <router-link :to="{path:'/frontAccounts/users/add'}" >
                    <el-button type="danger" size="small">新增</el-button> 
                </router-link> 
                <span class="f-zj">总计：{{formInline.count}}</span>
            </el-container>
            <el-table :data="tableData" border>
                <el-table-column prop="" label="操作" align="center"  width="150">                
                    <template slot-scope="scope">
                        <router-link :to="{path:'/frontAccounts/users/view',query:{name,userId:scope.row.userId}}">
                            <el-button type="primary" size="mini">查看</el-button>
                        </router-link>  
                        <router-link :to="{path:'/business/users/list/editor',query:{enId:scope.row.enId}}">
                            <el-button size="mini">处理</el-button>
                        </router-link>  
                     </template>
                </el-table-column>
                <el-table-column prop="userName" align="center" label="用户名"></el-table-column>
                <el-table-column prop="cellPhone" align="center" label="手机号码"></el-table-column>
                <el-table-column prop="createTime" align="center" label="注册时间"></el-table-column>
                <el-table-column prop="status" align="center" label="用户状态">
                  <template slot-scope="scope">
                    {{scope.row.status =='1'?'启用':'停用'}} 
                  </template>
                </el-table-column>
                <el-table-column prop="source" align="center"  label="注册来源">
                  <template slot-scope="scope">
                    {{scope.row.source =='1'?'APP':(scope.row.source =='2'?'前台PC':'后台')}} 
                  </template>
                </el-table-column>
               
                <div slot="empty">
                    <img src="../../../../assets/images/no-message.png" alt="">
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
        cellPhone: "",
        status: "",
        createTime: "",
        source: "",
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
    this.getProvinceIdOptions();
    this.dataSubmit();
  },
  methods: {
    handleSubmit() {
      console.log(this.formInline);
      this.dataSubmit();
    },
    handleReset() {
      this.formInline = {
        userName: "",
        cellPhone: "",
        status: "",
        createTime: "",
        scope: "",
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
      // this.$http.post('/api/v1/admin/basics/register/users',this.formInline).then(res => {

      // });
      var data = {
        status: 200,
        message: "操作成功",
        total: 7,
        pageSize: 10,
        pageNum: 1,
        list: [
          {
            userId: "12",
            userName: "小太阳",
            cellPhone: "12334567890",
            createTime: "2018-05-12 10:38",
            status: "启用",
            source: "后台"
          }
        ],
        pageSize: 1,
        pageNum: 1
      };
      this.total = data.total;
      this.tableData = data.list;
      this.currentPage = data.pageNum;
    },
    getProvinceIdOptions() {
      // this.$http.post('/api/v1/admin/basics/register/users ',{isProvince:1}).then(res=>{

      // })
      var res = {
        error_code: 0,
        list: [
          {
            regionId: "1",
            regionCode: "省市编码",
            regionName: "省市名称",
            isProvince: 1
          },
          {
            regionId: "2",
            regionCode: "省市编码",
            regionName: "省市名称",
            isProvince: 1
          }
        ]
      };
      this.provinceIdOptions = res.list;
    }
  },
  filters: {
    getCustomerName(value) {
      let customerName = "";
      switch (value) {
        case "1":
          customerName = "供应商企业";
          break;
        case "2":
          customerName = "采购商企业";
          break;
        case "3":
          customerName = "销售中间商";
          break;
        case "4":
          customerName = "采购中间商";
          break;
        default:
          break;
      }
      return customerName;
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