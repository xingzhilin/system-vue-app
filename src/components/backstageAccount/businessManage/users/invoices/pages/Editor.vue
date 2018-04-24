<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
      <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
      <el-breadcrumb-item>企业管理</el-breadcrumb-item>
    </el-breadcrumb>
      <el-container>
            <router-link :to="{path:'/business/users/bank/add'}" >
              <el-button type="danger" size="small">新增</el-button> 
            </router-link> 
          </el-container>
      <el-table :data="tableData" border>
          <el-table-column prop="" label="操作" width="100">          
            <template slot-scope="scope">
                <div class="alignCenter">
                    <router-link :to="{path:'/business/users/invoices/add',query:{id:'1'}}">
                      <el-button type="primary" size="mini">编辑</el-button>
                    </router-link> 
                </div>  
             </template>
          </el-table-column>
          <el-table-column prop="userName" label="企业名称"></el-table-column>
          <el-table-column prop="reMark" label="纳税人识别号"></el-table-column>
          <el-table-column prop="addTime" label="联系电话"></el-table-column>
          <el-table-column prop="roleState" label="发票地址"></el-table-column>
          <el-table-column prop="roleState" label="开户行"></el-table-column>
          <el-table-column prop="roleState" label="银行账号"></el-table-column>
          <el-table-column prop="roleState" label="发票状态"></el-table-column>
          <el-table-column prop="roleState" label="维护时间"></el-table-column>
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
    data(){
      return {
        formInline: {
              roleName: '',
              time:'',
              activeOption:"qy"
            },
            Datepicker: [],
            currentPage: 1,
            time:"",
            tableData: [
          {
                userName: 'Lily',
                reMark: 'Lily Li',
                addTime:'2020',
                roleState: '运营',
              },
              {
                userName: 'Lily',
                reMark: 'Lily Li',
                addTime:'2020',
                roleState: '运营',
              },
              {
                userName: 'Lily',
                reMark: 'Lily Li',
                addTime:'2020',
                roleState: '运营',
              },
              {
                userName: 'Lucy',
                reMark: 'Lily Li',
                addTime:'2020',
                roleState: '运营',
              }
            ]
      }
    },
      methods: {
        handleSubmit() {
          console.log('submit!');
        },
        handleReset(){
          this.formInline = {
              roleName: '',
              time:'',
              activeOption:"qy"
            };
        },
      handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
       },
      handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
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