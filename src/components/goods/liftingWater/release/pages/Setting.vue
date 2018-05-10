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
              <th width="260">报盘方信息</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">发布企业：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">发布人：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">专员电话：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th width="260">报盘基础信息</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">交割库：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">委托检验机构：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input></td>
            </tr>
            <tr>
              <td class="td_label">检验标准：</td>
              <td>
                  <el-select v-model="formInline.value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
              </td>
            </tr>
            <tr>
              <td class="td_label">交货方式：</td>
              <td>
                  <el-select v-model="formInline.value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name">
                    </el-option>
                  </el-select>
              </td>
            </tr>
            <tr>
              <td class="td_label">销售开始时间：</td>
              <td>
                    <el-date-picker
                      v-model="formInline.name"
                      type="date"
                      size='mini'
                      placeholder="选择日期">
                    </el-date-picker>
              </td>
            </tr>
            <tr>
              <td class="td_label">销售结束时间：</td>
              <td>
                   <el-date-picker
                      v-model="formInline.name"
                      type="date"
                      size='mini'
                      placeholder="选择日期">
                    </el-date-picker>
              </td>
            </tr>
            <tr>
              <td class="td_label">交货周期：</td>
              <td><el-input v-model="formInline.userName" placeholder="用户名" size="small"></el-input>天</td>
            </tr>
          </tbody>
        </table>
        
        <el-footer>
          <el-button type="primary"  size="small">确定</el-button>
          <el-button size="small">返回</el-button>
       </el-footer>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                formInline: {},
                options: [
                    {
                        id: 1,
                        name: 'ceshi'
                    }
                ]
            }
        },
        methods:{

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
