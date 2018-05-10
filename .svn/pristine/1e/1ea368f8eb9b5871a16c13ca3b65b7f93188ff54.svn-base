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
              <th width="260">点价基准价维护 <el-button type="danger" plain size="small">历史数据查看</el-button></th>
              <th class="th_time">上次更新时间：</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">云供应商点价价格（元/吨）</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">云采购商点价价格（元/吨）</td>
              <td>根据上下计算出来的</td>
            </tr>
            <tr>
              <td class="td_label">点价差值（元/吨）</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
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
            <tr>
              <td>
                <el-button type="danger" plain size="small">价差同步修改</el-button>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th width="260">同步发布报盘</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <el-checkbox-group v-model="checkList">
                    <el-checkbox v-for="item in checkListData" :label="item.name" :key="item.id" :disabled="(item.id==2||item.id==3)?true:false"></el-checkbox>
                  </el-checkbox-group> 
              </td>
            </tr>
          </tbody>
        </table> 
        <div class="sync_wrap">
          <h2>煤炭商城</h2>
          <ul>
            <li v-for="list in shopData">
              <table>
                <thead>
                  <tr>
                    <th width="260">{{list.name}}<el-button type="danger" plain size="small">更多设置</el-button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        销售开始时间：
                        <el-date-picker
                          v-model="formInline.name"
                          type="date"
                          size='mini'
                          placeholder="选择日期">
                        </el-date-picker>
                        销售结束时间：
                        <el-date-picker
                          v-model="formInline.name"
                          type="date"
                          size='mini'
                          placeholder="选择日期">
                        </el-date-picker>
                        <el-button type="danger" plain size="small">其他品种</el-button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <el-table
                ref="multipleTable"
                :data="list.tableData"
                tooltip-effect="dark"
                style="margin-top:0;"
                @selection-change="handleSelectionChange">
                  <el-table-column type="selection" width="55"></el-table-column>
                  <el-table-column prop="name" align="center" label="品种"></el-table-column>
                  <el-table-column align="center" label="起订量">
                      <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                      </template>
                  </el-table-column>
                  <el-table-column align="center" label="库存量">
                      <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                      </template>
                  </el-table-column>
                  <el-table-column prop="name" align="center" label="升贴水"></el-table-column>
                  <el-table-column align="center" label="平仓价">
                     <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="合同模板">
                     <template slot-scope="props">
                      <el-select v-model="formInline.name" placeholder="请选择" style="width:80%;">
                        <el-option
                          v-for="item in props.row.hetong"
                          :key="item.id"
                          :label="item.name"
                          :value="item.name">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="中间商合同模板">
                     <template slot-scope="props">
                      <el-select v-model="formInline.name" placeholder="请选择" style="width:80%;">
                        <el-option
                          v-for="item in props.row.hetong"
                          :key="item.id"
                          :label="item.name"
                          :value="item.name">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column label="发布企业" align="center">
                    <template slot-scope="props">
                      <el-select v-model="formInline.name" placeholder="请选择" style="width:80%;">
                        <el-option
                          v-for="item in props.row.hetong"
                          :key="item.id"
                          :label="item.name"
                          :value="item.name">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
              </el-table>
            </li>
          </ul>
        </div>
        
        <div class="sync_wrap">
          <h2>锁价交易</h2>
          <ul>
            <li v-for="list in shopData">
              <table>
                <thead>
                  <tr>
                    <th width="260">{{list.name}}<el-button type="danger" plain size="small">更多设置</el-button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        <div>
                            招标开始时间：
                            <el-date-picker
                              v-model="formInline.name"
                              type="date"
                              size='mini'
                              placeholder="选择日期">
                            </el-date-picker>
                            招标截止时间：
                            <el-date-picker
                              v-model="formInline.name"
                              type="date"
                              size='mini'
                              placeholder="选择日期">
                            </el-date-picker>
                        </div>
                        <div>
                          交货开始时间：
                            <el-date-picker
                              v-model="formInline.name"
                              type="date"
                              size='mini'
                              placeholder="选择日期">
                            </el-date-picker>
                            交货截止时间：
                            <el-date-picker
                              v-model="formInline.name"
                              type="date"
                              size='mini'
                              placeholder="选择日期">
                            </el-date-picker>
                            保证金单价：
                            <el-input v-model="formInline.name" placeholder="请输入内容"></el-input>
                            <el-button type="danger" plain size="small">其他品种</el-button>
                        </div>                        
                    </td>
                  </tr>
                </tbody>
              </table>
              <el-table
                ref="multipleTable"
                :data="list.tableData"
                tooltip-effect="dark"
                style="margin-top:0;"
                @selection-change="handleSelectionChange">
                  <el-table-column type="selection" width="55"></el-table-column>
                  <el-table-column prop="name" align="center" label="品种"></el-table-column>
                  <el-table-column align="center" label="招标量">
                      <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                      </template>
                  </el-table-column>                  
                  <el-table-column align="center" label="合同">
                     <template slot-scope="props">
                      <el-select v-model="formInline.name" placeholder="请选择" style="width:80%;">
                        <el-option
                          v-for="item in props.row.hetong"
                          :key="item.id"
                          :label="item.name"
                          :value="item.name">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" align="center" label="运输方式"></el-table-column>
                  <el-table-column align="center" label="基本价">
                     <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="起投量">
                      <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                      </template>
                  </el-table-column> 
                  <el-table-column label="发布企业" align="center">
                    <template slot-scope="props">
                      <el-select v-model="formInline.name" placeholder="请选择" style="width:80%;">
                        <el-option
                          v-for="item in props.row.hetong"
                          :key="item.id"
                          :label="item.name"
                          :value="item.name">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
              </el-table>
              <h5>选择要下架的交割库及商品</h5>
              <el-table
                ref="multipleTable"
                :data="list.tableData"
                tooltip-effect="dark"
                style="margin-top:0;"
                @selection-change="handleSelectionChange">
                  <el-table-column type="selection" width="55"></el-table-column>
                  <el-table-column prop="name" align="center" label="交割库"></el-table-column>
                  <el-table-column prop="name" align="center" label="交货开始时间"></el-table-column>
                  <el-table-column prop="name" align="center" label="交货截止日"></el-table-column>
                  <el-table-column prop="name" align="center" label="保证金单价"></el-table-column>
                  
              </el-table>
            </li>
          </ul>
        </div>
        
        <div class="sync_wrap">
          <h2>定期招标定价</h2>
          <ul>
            <li v-for="list in shopData">
              <table>
                <thead>
                  <tr>
                    <th width="260">{{list.name}}<el-button type="danger" plain size="small">更多设置</el-button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        招标开始时间：
                        <el-date-picker
                          v-model="formInline.name"
                          type="date"
                          size='mini'
                          placeholder="选择日期">
                        </el-date-picker>
                        招标结束时间：
                        <el-date-picker
                          v-model="formInline.name"
                          type="date"
                          size='mini'
                          placeholder="选择日期">
                        </el-date-picker>
                        交货截止日：
                        <el-date-picker
                          v-model="formInline.name"
                          type="date"
                          size='mini'
                          placeholder="选择日期">
                        </el-date-picker>
                        <el-button type="danger" plain size="small">其他品种</el-button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <el-table
                ref="multipleTable"
                :data="list.tableData"
                tooltip-effect="dark"
                style="margin-top:0;"
                @selection-change="handleSelectionChange">
                  <el-table-column type="selection" width="55"></el-table-column>
                  <el-table-column prop="name" align="center" label="品种"></el-table-column>
                  <el-table-column align="center" label="招标量">
                      <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                      </template>
                  </el-table-column>                  
                  <el-table-column align="center" label="合同">
                     <template slot-scope="props">
                      <el-select v-model="formInline.name" placeholder="请选择" style="width:80%;">
                        <el-option
                          v-for="item in props.row.hetong"
                          :key="item.id"
                          :label="item.name"
                          :value="item.name">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="最大投标量">
                      <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                      </template>
                  </el-table-column>
                  <el-table-column prop="name" align="center" label="运输方式"></el-table-column>
                  <el-table-column align="center" label="基本价">
                     <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="起投量">
                     <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="发布企业" align="center">
                    <template slot-scope="props">
                      <el-select v-model="formInline.name" placeholder="请选择" style="width:80%;">
                        <el-option
                          v-for="item in props.row.hetong"
                          :key="item.id"
                          :label="item.name"
                          :value="item.name">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
              </el-table>
            </li>
          </ul>
        </div>
        
        <div class="sync_wrap">
          <h2>定期招标竞价</h2>
          <ul>
            <li v-for="list in shopData">
              <table>
                <thead>
                  <tr>
                    <th width="260">{{list.name}}<el-button type="danger" plain size="small">更多设置</el-button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        招标开始时间：
                        <el-date-picker
                          v-model="formInline.name"
                          type="date"
                          size='mini'
                          placeholder="选择日期">
                        </el-date-picker>
                        招标结束时间：
                        <el-date-picker
                          v-model="formInline.name"
                          type="date"
                          size='mini'
                          placeholder="选择日期">
                        </el-date-picker>
                        交货截止日：
                        <el-date-picker
                          v-model="formInline.name"
                          type="date"
                          size='mini'
                          placeholder="选择日期">
                        </el-date-picker>
                        <el-button type="danger" plain size="small">其他品种</el-button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <el-table
                ref="multipleTable"
                :data="list.tableData"
                tooltip-effect="dark"
                style="margin-top:0;"
                @selection-change="handleSelectionChange">
                  <el-table-column type="selection" width="55"></el-table-column>
                  <el-table-column prop="name" align="center" label="品种"></el-table-column>
                  <el-table-column align="center" label="招标量">
                      <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                      </template>
                  </el-table-column>                  
                  <el-table-column align="center" label="合同">
                     <template slot-scope="props">
                      <el-select v-model="formInline.name" placeholder="请选择" style="width:80%;">
                        <el-option
                          v-for="item in props.row.hetong"
                          :key="item.id"
                          :label="item.name"
                          :value="item.name">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column align="center" label="最大投标量">
                      <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                      </template>
                  </el-table-column>
                  <el-table-column prop="name" align="center" label="运输方式"></el-table-column>
                  <el-table-column align="center" label="起投量">
                     <template slot-scope="props">
                        <el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="发布企业" align="center">
                    <template slot-scope="props">
                      <el-select v-model="formInline.name" placeholder="请选择" style="width:80%;">
                        <el-option
                          v-for="item in props.row.hetong"
                          :key="item.id"
                          :label="item.name"
                          :value="item.name">
                        </el-option>
                      </el-select>
                    </template>
                  </el-table-column>
              </el-table>
            </li>
          </ul>
        </div>
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
