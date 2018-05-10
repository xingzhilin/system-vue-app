<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
      <el-breadcrumb-item>企业管理</el-breadcrumb-item>
    </el-breadcrumb>
      <el-container>
            <router-link :to="{path:'/business/users/invoices/add',query:{enId,enName,taxpayerId}}" >
              <el-button type="danger" size="small">新增</el-button> 
            </router-link> 
          </el-container>
      <el-table :data="tableData" border>
          <el-table-column prop="" label="操作" width="100">          
            <template slot-scope="scope">
                <div class="alignCenter">
                    <router-link :to="{path:'/business/users/invoices/editor',query:{data:scope.row}}">
                      <el-button type="primary" size="mini">编辑</el-button>
                    </router-link> 
                </div>  
             </template>
          </el-table-column>
          <el-table-column prop="enName" label="企业名称"></el-table-column>
          <el-table-column prop="taxpayerId" label="纳税人识别号"></el-table-column>
          <el-table-column prop="telNo" label="联系电话"></el-table-column>
          <el-table-column prop="address" label="发票地址"></el-table-column>
          <el-table-column prop="bankName" label="开户行"></el-table-column>
          <el-table-column prop="bankCardNo" label="银行账号"></el-table-column>
          <el-table-column prop="status" label="发票状态"></el-table-column>
          <el-table-column prop="createNo" label="维护时间"></el-table-column>
      </el-table>
   
    
  </div>
</template>
<script>
  export default {
    data(){
      return {
        enId:'',
        enName:'',
        taxpayerId:'',
        tableData: []
      }
    },
    created(){
        let enId = this.$route.query.enId;
        let enName = this.$route.query.enName;
        let taxpayerId = this.$route.query.taxpayerId;
        this.enId = enId;
        // this.$http.get('/api/user/register',{params:{enId}}).then(res=>{

        // });
        var res = {
          "status": 200,
          "message": "操作成功",
          "total": 10,
          "list": [
            {
              "titleId":"1",
              "enId":"122",
              "enName": "月半科技",
              "taxpayerId": "1234545454545",
              "telNo": "84455544",
              "address": "北京市朝阳区霄云中心",
              "bankName": "招商银行北京分行",
              "bankCardNo": "62201234567890",
              "status": "1",
              "createNo": "2018/5/1 12:00:00",
            },
            {
              "titleId":"2",
              "enId":"122",
              "enName": "月半科技",
              "taxpayerId": "1234545454545",
              "telNo": "84455544",
              "address": "北京市朝阳区霄云中心",
              "bankName": "招商银行北京分行",
              "bankCardNo": "62201234567890",
              "status": "1",
              "createNo": "2018/5/1 12:00:00",
            }
          ],
          "pageSize": 1,
          "pageNum": 1
        };
        this.enId = enId;
        this.taxpayerId = taxpayerId;
        this.enName = enName;
        this.tableData = res.list;
    },
    methods: {

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
  .alignCenter {
    text-align:center;
  }
</style>