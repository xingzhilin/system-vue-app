<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
          <el-breadcrumb-item>企业管理</el-breadcrumb-item>
        </el-breadcrumb>
            <el-form :inline="true" :model="formInline">
              <el-form-item label="企业名称：">
                <el-input v-model.trim="formInline.enName" size="small"></el-input>
              </el-form-item>
              <el-form-item label="企业编码：">
                <el-input v-model.trim="formInline.enCode" size="small"></el-input>
              </el-form-item>
              <el-form-item label="公司状态：">
                <el-select v-model.trim="formInline.status" size="small">
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
                <el-table-column prop="" label="操作" width="200">                
                    <template slot-scope="scope">
                        <router-link :to="{path:'/',query:{enId:scope.row.enId}}">
                            <el-button type="primary" size="mini">查看</el-button>
                        </router-link>  
                        <router-link :to="{path:'/business/users/inviteBids/editor',query:{enId:scope.row.enId}}">
                            <el-button size="mini">处理</el-button>
                        </router-link>  
                     </template>
                </el-table-column>
                <el-table-column prop="enName" label="企业名称"></el-table-column>
                <el-table-column prop="enCode" label="企业编码"></el-table-column>
                <el-table-column prop="sellPeriod" label="点价期"></el-table-column>
                <el-table-column prop="bailRatio" label="保证金"></el-table-column>
                <el-table-column prop="status" label="公司状态">
                  <template slot-scope="scope">
                    {{scope.row.status =='1'?'启用':'停用'}} 
                  </template>
                </el-table-column>
                <el-table-column prop="createTime" label="企业注册时间"></el-table-column>
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
        data(){
            return {
                formInline: {
                  enName: '',
                  enCode:'',
                  status:'1',
                  toPage:1,
                  pageSize:10
                },
                total: '',
                currentPage: 1,
                tableData: []
            }
        },
        created(){
          this.dataSubmit();
        },
        methods: {
          handleSubmit() {
            console.log(this.formInline)
            this.dataSubmit();
          }, 
          dataSubmit(){
            // this.$http.post('/api/basics/enterPrise/sellPeriod',this.formInline).then(res => {
                
            // });
            var data =  {
              "status": 200,
              "message": "操作成功",
              "total": 10,
              "list": [{
                  "enName": "测试企业",
                  "enCode": "xee123",
                  "enId": "1111",
                  "sellPeriod": "60",
                  "bailRatio": "10.00",
                   "status": "1",
                  "createTime": "2018-04-24 12:00:00"
                },
              ],
              "pageSize": 1,
              "pageNum": 1
            };
            this.total = data.total;
            this.tableData = data.list;
            this.currentPage = data.pageNum;
           },
          handleReset(){
            this.formInline = {
              enName: '',
              enCode:'',
              status:'1',
              toPage:1,
              pageSize:10
            };
          },
          handleSizeChange(val) {
            this.formInline.pageSize = val;
            this.dataSubmit();
           },
          handleCurrentChange(val) {
            this.formInline.toPage = val;
            this.dataSubmit();
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
<style>
    .el-table .unSynchron {
      background-color:#f7914c;
    }
</style>