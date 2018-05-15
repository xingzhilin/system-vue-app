<template>
    <div class="order_wrap">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>商品发布</el-breadcrumb-item>
          <el-breadcrumb-item>订单管理</el-breadcrumb-item>
        </el-breadcrumb>
        <table>
          <thead>
            <tr>
              <th width="260" colspan="2">基础信息</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">企业名称：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">批次号：</td>
              <td>根据上下计算出来的</td>
            </tr>
            <tr>
              <td class="td_label">交割库：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">货场：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">堆位：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">品种：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">运输方式：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th width="260" colspan="2">入库信息1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">车牌号：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">车辆：</td>
              <td>根据上下计算出来的</td>
            </tr>
            <tr>
              <td class="td_label">发货吨数：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">毛重：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">皮重：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">入库吨数（毛重-皮重）：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">取小吨数（入库吨数和发货吨数取小）：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">调吨：</td>
              <td>
                扣吨<el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input>增吨<el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input>
                查看调吨历史
              </td>
            </tr>
            <tr>
              <td class="td_label">入库时间：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">上传附件：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">备注：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
          </tbody>
        </table>
    
        <el-container>
          +添加
        </el-container>
        <el-footer>
          <el-button type="primary"  size="small">保存</el-button>        
          <el-button type="primary"  size="small">提交审核</el-button>
          <el-button size="small">取消</el-button>
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
                },
                checkList: ['云采购','云供应'],
                checkListData: [
                  {
                    id:1,
                    name: '煤炭商城'
                  },
                  {
                    id:2,
                    name: '云采购'
                  },
                  {
                    id:3,
                    name: '云供应'
                  },
                  {
                    id:4,
                    name: '定期招标（定价）'
                  },
                  {
                    id:5,
                    name: '定期招标（竞价）'
                  },
                  {
                    id:6,
                    name: '采购锁价交易'
                  }
                ],
                multipleSelection:[],
                shopData:[
                  {
                    id: 1,
                    name: '秦皇岛',
                    tableData:[
                      {
                        id:11,
                        name: '品种1',
                        hetong: [
                          {
                            id: 111,
                            name: '通用模板'
                          },
                          {
                            id: 112,
                            name: '自定义模板'
                          }
                        ]
                      },
                      {
                        id:22,
                        name: '品种2',
                        hetong: [
                          {
                            id: 222,
                            name: '通用模板'
                          },
                          {
                            id: 223,
                            name: '自定义模板'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 3,
                    name: '曹妃甸二期',
                    tableData:[
                      {
                        id:31,
                        name: '3品种1',
                        hetong: [
                          {
                            id: 311,
                            name: '3通用模板'
                          },
                          {
                            id: 312,
                            name: '3自定义模板'
                          }
                        ]
                      },
                      {
                        id:32,
                        name: '3品种2',
                        hetong: [
                          {
                            id: 322,
                            name: '3通用模板'
                          },
                          {
                            id: 323,
                            name: '自定义模板'
                          }
                        ]
                      }
                    ]
                  }
                ],
                tableData:[
                  {
                    id:11,
                    name: '品种1',
                    hetong: [
                      {
                        id: 111,
                        name: '通用模板'
                      },
                      {
                        id: 112,
                        name: '自定义模板'
                      }
                    ]
                  },
                  {
                    id:22,
                    name: '品种2',
                    hetong: [
                      {
                        id: 222,
                        name: '通用模板'
                      },
                      {
                        id: 223,
                        name: '自定义模板'
                      }
                    ]
                  }
                ],                
                rowMethod({ row, column, rowIndex, columnIndex }){
                  if (columnIndex === 0) {
                      return [1, 2];
                  } else if (columnIndex === 1) {
                      return [0, 0];
                  }
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
        height: 46px;
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
