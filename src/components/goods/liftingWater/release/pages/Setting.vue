<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>商品发布</el-breadcrumb-item>
          <el-breadcrumb-item>升贴水价格及商品发布</el-breadcrumb-item>
        </el-breadcrumb>
        
        <table>
          <caption>点价基准价维护</caption>
          <thead>
            <tr>
              <th>header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data</td>
            </tr>
          </tbody>
        </table> 
        

    </div>
</template>
<script>
    export default {
        data(){
            return {
                formInline: {}
            }
        },
        methods:{

        }

    }
</script>
<style scoped lang="scss">
    @import './../../../../../assets/css/table_view.css';
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
