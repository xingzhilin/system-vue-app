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
              <el-form-item label="客户类别：">
                <el-select v-model.trim="formInline.customerType" size="small">
                    <el-option label="供应商企业" value="1"></el-option>
                    <el-option label="采购商企业" value="2"></el-option>
                    <el-option label="销售中间商" value="3"></el-option>
                    <el-option label="采购中间商" value="4"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="省份：">
                <el-select v-model.trim="formInline.provinceId" size="small">
                    <el-option
                      v-for="item in provinceIdOptions"
                      :key="item.regionId"
                      :label="item.regionName"
                      :value="item.regionId">
                    </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="注册时间：">
                 <el-col :span="11">
                  <el-date-picker type="datetime" value-format="yyyy-MM-dd HH:mm:ss" v-model.trim="formInline.startCreateTime" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">至</el-col>
                <el-col :span="11">
                  <el-date-picker type="datetime" value-format="yyyy-MM-dd HH:mm:ss" v-model.trim="formInline.endCreateTime" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>   
              <el-form-item label="公司状态：">
                <el-select v-model.trim="formInline.status" size="small">
                  <el-option label="启用" value="qy"></el-option>
                  <el-option label="停用" value="ty"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="签章状态：">
                <el-select v-model.trim="formInline.signStatus" size="small">
                  <el-option label="启用" value="qy"></el-option>
                  <el-option label="过期" value="gq"></el-option>
                  <el-option label="停用" value="ty"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="供货准入状态：">
                <el-select v-model.trim="formInline.accessStatus" size="small">
                  <el-option label="启用" value="qy"></el-option>
                  <el-option label="过期" value="gq"></el-option>
                  <el-option label="停用" value="ty"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"  @click="handleSubmit" size="small">查询</el-button>
                <el-button @click="handleReset" size="small">重置</el-button>
              </el-form-item>
            </el-form>
            <el-container>
                <router-link :to="{path:'/business/users/list/add'}" >
                    <el-button type="danger" size="small">新增</el-button> 
                </router-link> 
            </el-container>
            <el-table :data="tableData" border>
                <el-table-column prop="" label="操作" width="150">                
                    <template slot-scope="scope">
                        <router-link :to="{path:'/business/users/list/view',query:{name,enId:scope.row.enId}}">
                            <el-button type="primary" size="mini">查看</el-button>
                        </router-link>  
                        <router-link :to="{path:'/business/users/list/editor',query:{enId:scope.row.enId}}">
                            <el-button size="mini">处理</el-button>
                        </router-link>  
                     </template>
                </el-table-column>
                <el-table-column prop="enName" label="企业名称"></el-table-column>
                <el-table-column prop="enCode" label="企业编码"></el-table-column>
                <el-table-column prop="province" label="省份"></el-table-column>
                <el-table-column prop="customerType" label="客户类别">
                  <template slot-scope="scope">
                    {{scope.row.customerType | getCustomerName}} 
                 </template>
                </el-table-column>
                <el-table-column prop="createTime" label="注册时间"></el-table-column>
                <el-table-column prop="orgCode" label="组织机构代码"></el-table-column>
                <el-table-column prop="status" label="公司状态">
                  <template slot-scope="scope">
                    {{scope.row.status =='1'?'启用':'停用'}} 
                  </template>
                </el-table-column>
                <el-table-column prop="signStatus" label="签章状态">
                  <template slot-scope="scope">
                    {{scope.row.signStatus =='1'?'启用':(scope.row.signStatus =='2'?'过期':'停用')}}
                  </template> 
                </el-table-column>
                <el-table-column prop="accessStatus" label="供货准入状态">
                  <template slot-scope="scope">
                    {{scope.row.accessStatus =='1'?'启用':(scope.row.accessStatus =='2'?'过期':'停用')}}
                  </template> 
                </el-table-column>
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
              name:'list',
              formInline: {
                enName:'',
                enCode:'',
                startCreateTime:'',
                endCreateTime:'',
                customerType:"",
                provinceId:'',
                state:'',
                signStatus:'',
                accessStatus:'',
                toPage:1,
                pageSize:10
              },
              provinceIdOptions: [],
              currentPage: 1,
              total: '',
              tableData: []
            }
        },
        created(){
          this.getProvinceIdOptions();
          this.dataSubmit();
        },
        methods: {
          handleSubmit() {
            console.log(this.formInline);
            this.dataSubmit();
          },
          handleReset(){
            this.formInline =  {
              enName:'',
              enCode:'',
              startCreateTime:'',
              endCreateTime:'',
              customerType:"",
              provinceId:'',
              state:'',
              signStatus:'',
              accessStatus:'',
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
          dataSubmit(){
            // this.$http.post('/api/basics/enterprises',this.formInline).then(res => {
                
            // });
            var data = {
              "status": 200,
              "message": "操作成功",
              "total": 10,
              "list": [
                {
                  "enName": "测试企业",
                  "enCode": "xee123",
                  "enId": "1111",
                  "province": "山东省",
                  "customerType": "1",
                  "createTime": "2018-04-24 12:00:00",
                  "orgCode": "sdf1g2413wer213",
                  "status": "1",
                  "signStatus": "3",
                  "accessStatus": "1"
                }
              ],
              "pageSize": 1,
              "pageNum": 1
            };
            this.total = data.total;
            this.tableData = data.list;
            this.currentPage = data.pageNum;
           },
           getProvinceIdOptions(){
             // this.$http.post('/api/v1/commons/regions',{isProvince:1}).then(res=>{

             // })
             var res ={
              "error_code": 0,
              "list": [{
                "regionId": "1",
                "regionCode": "省市编码",
                "regionName": "省市名称",
                "isProvince": 1
              },{
                "regionId": "2",
                "regionCode": "省市编码",
                "regionName": "省市名称",
                "isProvince": 1
              }]
            };
            this.provinceIdOptions = res.list;
           }
        },
        filters:{
          getCustomerName(value){
              let customerName = '';
              switch(value){
                case '1' :
                  customerName = '供应商企业';
                  break; 
                case '2' :
                  customerName = '采购商企业';
                  break; 
                case '3' :
                  customerName = '销售中间商';
                  break;
                case '4' :
                  customerName = '采购中间商';
                  break; 
                default:
                  break;
              }
              return customerName;
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