<template>
  <div>
      <el-form>
        <el-form-item label="费用名称：">
          <el-select v-model="formInline.costType" @change="getDetail">
            <el-option label="船务费" value="1"></el-option>
            <el-option label="港杂费" value="2"></el-option>
            <el-option label="化验费" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" border>
          <el-table-column prop="index" label="序号"></el-table-column>
          <el-table-column prop="costType" label="费用名称"></el-table-column>
          <el-table-column prop="amortize" label="摊销金额（元）"></el-table-column>
          <el-table-column prop="adminId" label="操作人"></el-table-column>
          <el-table-column prop="date" label="摊销时间"></el-table-column>
          <div slot="empty">
            <img src="../../../../../assets/images/no-message.png" alt="">
          </div>
      </el-table>
      <el-footer style="height:auto;">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="formInline.pageSize"
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
        formInline:{
          costType:"",
          toPage: 1,
          pageSize: 10,
        },
        currentPage: 1,
        total:null,
        tableData: []
      }
    },
    created(){
      this.dataSubmit();
    },
    methods: {
      getDetail(value){
        console.log(value)
        this.formInline.costType = value;
        this.dataSubmit();
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.dataSubmit();
      },
      handleCurrentChange(val) {
        this.formInline.toPage = val;
        this.dataSubmit();
      },
      dataSubmit(){
        console.log(this.formInline)
        // this.$axios.post("",this.formInline).then(res=>{

        // });
      }
    }

  }
</script>
<style scoped lang="scss">
  .settleCreate {
    color: #606266;
    font-size: 14px;

  }
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
  .tableTitle{
    line-height:30px;
    padding:15px;
    white-space:nowrap; 
    overflow:hidden; 
    text-overflow:ellipsis;
    background: #ebeef5;
  }
</style>