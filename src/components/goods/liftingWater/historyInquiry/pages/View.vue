<template>
    <div class="goods_wrap">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>商品发布</el-breadcrumb-item>
          <el-breadcrumb-item>升贴水价格及商品发布</el-breadcrumb-item>
        </el-breadcrumb>
        <table>
          <thead>
            <tr>
              <th width="260">点价基准价维护</th>
              <th class="th_time">上次更新时间：</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">云供应商点价价格（元/吨）</td>
              <td>123</td>
            </tr>
            <tr>
              <td class="td_label">云采购商点价价格（元/吨）</td>
              <td>123</td>
            </tr>
            <tr>
              <td class="td_label">点价差值（元/吨）</td>
              <td>123</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th width="260">点价升贴水维护</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="北方港" name="north">
                      测试
                    </el-tab-pane>
                    <el-tab-pane label="南方港" name="south">
                      测试
                    </el-tab-pane>
                  </el-tabs>
              </td>
            </tr>
          </tbody>
        </table>
       
        <el-footer>
          <el-button size="small">返回</el-button>
       </el-footer>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                activeName: 'north',
                formInline: {
                  name:''
                }
            }
        },
        methods:{
          handleClick(tab, event) {
            console.log(tab, event);
            switch (tab.name) {
                  case 'north':
                      console.log(111);
                      /*this.$axios.post('http://192.168.11.31:9001/v1/basics/access/listAccess', sParams , {
                          headers:{ "Content-Type": "application/json"}
                      })
                      .then(res =>  {
                              if(res.status == 200){
                                  console.log(res);
                                  this.totalPage = res.data.total;
                                  this.currentPage = res.data.pageNum;
                                  this.pageSize = res.data.pageSize;
                                  this.tableData = res.data.list;
                              }
                      })
                      .catch(function (error) {
                          console.log(error);
                      })*/
                      break;
                  case 'south':
                      
                      console.log(222);
                      break;
              }
          },
          handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection);
          },
        }
    }
</script>
<style lang="scss">
    @import './../../../../../assets/css/table_view.css';
    .el-form{
        padding: 15px 0 0 20px;
    }
    ul,li{
      list-style:none;
      margin:0; 
      padding:0;
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
    .goods_wrap{
      -padding: 15px 0 0 20px;
    }
    .sync_wrap{
      width:100%;
    }
    table{
      -margin-top: 20px;
      th{
        background: #f2f2f2;
      }
      td, th{
        height: 46px;//////
        border: 1px solid #e8e8e8;
        text-align: left;
        -padding-left: 10px;
        padding: 0;
        .el-input{
          width: 96%;
        }
      }
      .th_time{
        text-align: right;
        font-size: 14px;
        font-weight: normal;
      }
      .td_label{
        width:260px;
        text-align: right;
      }
      .el-tabs__item{
        height: 50px;
        line-height:50px;
      }
    }
    
    .el-pagination {
        padding: 15px;
        text-align: right;
    }
    .el-footer{
      text-align: center;
      padding-top:40px;
      margin-bottom: 40px;
    } 
   
</style>
