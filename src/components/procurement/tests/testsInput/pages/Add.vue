<template>
    <div class="order_wrap">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>采购端管理</el-breadcrumb-item>
          <el-breadcrumb-item>称重管理</el-breadcrumb-item>
          <el-breadcrumb-item>入库录入</el-breadcrumb-item>
        </el-breadcrumb>
        <table>
          <thead>
            <tr>
              <th colspan="4">基础信息</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">订单编号</td>
              <td class="td_label">Y201806824547</td>
              <td class="td_label">批次号</td>
              <td class="td_label">
                <el-input v-model="formInline.whName" placeholder="化验单号" size="small">2018-DJ-JYD-TSY-TJG-00001</el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">客户</td>
              <td class="td_label">某某煤炭公司</td>
              <td class="td_label">供应链公司</td>
              <td class="td_label">金银岛(宁夏)供应链有限公司</td>
            </tr>
            <tr>
              <td class="td_label">交割库</td>
              <td class="td_label">                
                <el-input v-model="formInline.whName" placeholder="交割库" size="small">2天津港</el-input>
              </td>
              <td class="td_label">品种</td>
              <td class="td_label">
                <el-input v-model="formInline.whName" placeholder="品种" size="small">金银岛1号#</el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">下单量</td>
              <td class="td_label">500.00 吨</td>
              <td class="td_label">下单时间</td>
              <td class="td_label">2018-03-15 12:00</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th  colspan="2">化验单信息</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">化验单号：</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="化验单号" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">取样方式：</td>
              <td>
                <el-select v-model="formInline.placeNo" placeholder="请选择" size="small">  
                  <el-option label="请选择" value=""></el-option>
                  <el-option label="启用" value="1"></el-option>
                  <el-option label="停用" value="0"></el-option>
                </el-select>
              </td>
            </tr>            
            <tr>
              <td class="td_label">化验数量：</td>
              <td><el-input v-model="formInline.whName" placeholder="用户名" size="small"></el-input></td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th colspan="5">填写化验信息</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th width="200"></th>
              <th>ar:收到基</th>
              <th>ad:空气干燥基</th>
              <th>d:干燥基</th>
              <th>daf:干燥无灰基</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">低位发热量 Qent,ar 大卡/kg</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">全硫 St%</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">全水分 Mt%</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">水分 Mad%</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">低位发热量 Qent,ar 兆焦/kg</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">高位发热量 Qgr,V 大卡/kg</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">高位发热量 Qgr,V 兆焦/kg</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">灰分 A%</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">挥发份V%</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">固定碳 Fc%</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">氢 H%</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">G值 GRJ Mt</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">Y值 Y mm</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">灰熔度AFt ℃</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">颗粒度</td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
              <td>
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
            <tr>
              <td class="td_label">焦渣特征</td>
              <td colspan="4">
                <el-input v-model="formInline.whName" placeholder="" size="small"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>备注</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <el-input type="textarea" v-model="formInline.whName" placeholder="可填写 200 字" size="small"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>化验单照片</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                </td>
            </tr>
          </tbody>
        </table>

     
       
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
                dialogImageUrl: '',
                dialogVisible: false,
                tranterType: null,
                listData: [], //数组形式添加
                formInline: {
                  "batchId": "批次表主键",
                  "batchNo": "批次号",
                  "whCode": "交割库",
                  "placeNo": "货场",
                  "pileId": "堆位",
                  "classCode": "品种" ,
                  "tranterType": "运输方式 1、汽运 2、火运 3、船运",
                  "stores":[
                    {
                    "plateNum":"车牌号；车列号；船名",
                    "storeVehicle":"车辆",
                    "firstPlateNum":"首车号",
                    "endPlateNum":"尾车号",
                    "receivecarNum":"车厢数",
                    "flightNum":"航次",
                    "shipDate":"航期",
                    "sendGoodsQuantity":5000,
                    "grossQuantity":5000,
                    "tareQuantiy":5000,
                    "storeQuantiy":5000,
                    "minimumQuantiy":5000,
                    "deducQuantitys":[{"buckleQuantity":0,"addQuantity":0},{"buckleQuantity":0,"addQuantity":0}]
                    }
                  ],
                 "storeTime":"入库时间",
                 "ticketTime":"起票时间 注意格式 ‘2018-05-02 12：00’",
                 "remark":"XXXXXXXXXXXXXXXXX",
                 "status":"状态 1待审核 2通过 3未提交审核(保存) 4被拒收 -1驳回"
                },                
                rowMethod({ row, column, rowIndex, columnIndex }){
                  if (columnIndex === 0) {
                      return [1, 2];
                  } else if (columnIndex === 1) {
                      return [0, 0];
                  }
                }
            }
        },
        created(){
           this.tranterType = this.$route.query.tranterType
        },
        methods:{
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },
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
   // @import './../../../../../assets/css/table_view.css';
   
    table{width:100%;text-align:center;border-collapse:collapse;border-spacing:1;border-spacing:0; }
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
