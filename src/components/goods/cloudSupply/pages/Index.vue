<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>商品发布</el-breadcrumb-item>
          <el-breadcrumb-item>煤炭商城商品发布</el-breadcrumb-item>
        </el-breadcrumb>
            <el-form :inline="true" :model="formInline">
              <el-form-item label="交割库：">
                <el-input v-model.trim="formInline.whName" size="small"></el-input>
              </el-form-item>
              <el-form-item label="招标品种：">
                <el-input v-model.trim="formInline.className" size="small"></el-input>
              </el-form-item>
              <el-form-item label="销售发布时间：">
                 <el-col :span="11">
                  <el-date-picker type="datetime" value-format="yyyy-MM-dd HH:mm:ss" v-model.trim="formInline.publishTimeStart" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">至</el-col>
                <el-col :span="11">
                  <el-date-picker type="datetime" value-format="yyyy-MM-dd HH:mm:ss" v-model.trim="formInline.publishTimeEnd" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="报盘状态：">
                <el-select v-model.trim="formInline.statusCode" size="small">
                  <el-option label="已发布" value="1"></el-option>
                  <el-option label="审核中" value="2"></el-option>
                  <el-option label="已下架" value="3"></el-option>
                  <el-option label="已满标" value="4"></el-option>
                  <el-option label="已驳回" value="5"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"  @click="handleSubmit" size="small">查询</el-button>
                <el-button @click="handleReset" size="small">重置</el-button>
              </el-form-item>
            </el-form>
            <el-container>
            <router-link :to="{path:'/goods/cloudSupply/add'}" >
              <el-button type="danger" size="small">新增发布</el-button> 
            </router-link> 
          </el-container>
            <el-table :data="tableData" border>
                <el-table-column prop="" label="操作" width="150">                
                    <template slot-scope="scope">
                        <router-link :to="{path:'/goods/cloudSupply/see',query:{offerNo:scope.row.offerNo}}">
                            <el-button type="primary" size="mini">查看</el-button>
                        </router-link>  
                        <router-link :to="{path:'/goods/cloudSupply/editor',query:{offerNo:scope.row.offerNo}}">
                            <el-button size="mini">处理</el-button>
                        </router-link>  
                     </template>
                </el-table-column>
                <el-table-column prop="whName" label="交割库"></el-table-column>
                <el-table-column prop="transferTypeDesc" label="运输方式"></el-table-column>
                <el-table-column prop="offerStartDate" label="招标开始时间"></el-table-column>
                <el-table-column prop="offerEndDate" label="招标结束时间"></el-table-column>
                <el-table-column prop="statusDesc" label="招标状态"></el-table-column>
                <el-table-column prop="publishTime" label="招标发布时间"></el-table-column>
                <el-table-column prop="creatorName" label="发布人"></el-table-column>
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
        data(){
            return {
                formInline: {
                  whName: '',
                  className:'',
                  statusCode:"",
                  publishTimeStart:'',
                  publishTimeEnd:'',
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
            // this.$http.post('/api/basics/enterpriseTypes',this.formInline).then(res => {
                
            // });
            var data = {
        'status': 200,
        'message': '操作成功',
        'total': 7,
        'pageSize': 10,
        'pageNum': 1,
        'list': [{
          'offerNo':'1',
          'pwId':'1',
          'statusCode':'1',
          'statusDesc':'已发布',
          'salesTotal': '23',
          'inventory': '222',
          'whName': '北方港',
          'offerStartDate': '2018-05-11 05:22',
          'offerEndDate': '2018-05-52 05:22',
          'publishTime': '2018-05-12 05:22',
          'creatorName':'陈**'
        }]
      };
            this.total = data.total;
            this.tableData = data.list;
            this.currentPage = data.pageNum;
           },
          handleReset(){
            this.formInline = {
              whName: '',
              className:'',
              statusCode:"",
              publishTimeStart:'',
              publishTimeEnd:'',
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
          },
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
