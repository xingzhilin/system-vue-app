<template>
    <div>
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
            <el-form :model="ruleForm" status-icon ref="ruleForm" >
                <table class="subTable">
                    <col width="30%" />
                    <col width="70%" />
                    <tbody>
                        <tr>
                            <td>归属频道</td>
                            <td>
                                煤炭
                            </td>
                        </tr>
                        <tr>
                            <td><span class="red">*</span> 品牌名称</td>
                            <td>
                                {{ruleForm.brandName}}
                            </td>
                        </tr>
                        <tr>
                          <td>品牌介绍</td>
                          <td>
                            {{ruleForm.brandDesc}}
                          </td>
                        </tr>
                        <tr>
                          <td>是否启用</td>
                          <td>
                            <el-form-item>
                                <el-radio-group v-model="ruleForm.status" disabled>
                                  <el-radio label="1">启用</el-radio>
                                  <el-radio label="0">停用</el-radio>
                                </el-radio-group>
                           </el-form-item>
                          </td>
                        </tr>
                        <tr>
                          <td>推荐设置</td>
                          <td>
                            <el-form-item>
                                <el-radio-group v-model="ruleForm.recommend" disabled>
                                  <el-radio label="1">推荐</el-radio>
                                  <el-radio label="0">不推荐</el-radio>
                                </el-radio-group>
                           </el-form-item>
                          </td>
                        </tr>
                                <tr>
                          <td><span class="red">*</span> 品牌logo</td>
                          <td>
                              <img class="logoImg" :src="ruleForm.brandLogos[0].attachUrl" alt="">
                          </td>
                        </tr>
                        <tr>
                            <td><span class="red">*</span> 品牌图片</td>
                            <td>
                                <img class="logoImg" :src="ruleForm.brandImgs[0].attachUrl" alt="">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <el-form-item>
                    <el-col class="sfooter">
                       <el-button type="primary" @click="$router.go(-1);">返回</el-button>
                    </el-col>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>
<script scoped>
  export default {
    data() {
      return {
        ruleForm: {
          
        }
      };
    },
    created(){
        let brandCode = this.$route.query.brandCode;
        // this.$http.get('/api/basics/brands',{params:{brandCode:brandCode}}).then(res=>{
            // this.ruleForm = res.resultData;
        // })
        var data= {
          "status": 200,
          "message": "操作成功",
          "resultData": {
            "brandCode": "20",
            "industryCode": "1",
            "brandName": "brand1",
            "brandDesc": null,
            "status": '1',
            "recommend": '1',
            "brandLogos": [
              {
                "attachName": "mybatis学习",
                "attachUrl": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1972873509,2904368741&fm=27&gp=0.jpg"
              }
            ],
            "brandImgs": [
               {
                "attachName": "hibernategogo",
                "attachUrl": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1972873509,2904368741&fm=27&gp=0.jpg"
              }
            ]
          }
        };
        this.ruleForm = data.resultData;
        
    }
  }
</script>
<style scoped>
    .el-form{
        padding: 15px 20px;
    }
    .line {
        text-align: center;
    }
    table.subTable {
        width: 100%;
        border-collapse:collapse;
        font-size: 14px;
        color:#909399;
        text-align:center;
    }
    table.subTable th, table.subTable td {
        border: 1px solid #ebeef5;
        padding: 15px ;
    }
    .tableTile {
        border-left: 1px solid #ebeef5;
        border-right: 1px solid #ebeef5;
        padding:15px;
        color:#000;
        text-align: center;
    }
    .el-form-item {
        margin-bottom: 0;
    }
    .red {
        color:#f56c6c;
      }
     .sfooter {
        text-align: center;
        margin-top: 20px;
     }
    .logoImg {
        width: 140px;
        height: 140px;
    }
</style>
