<template>
  <div>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="130px"  label-position="right">
            <div class="tableTile">品类信息</div>
            <el-form-item label="归属频道：">
              {{ruleForm.industryName}}
            </el-form-item>
            <el-form-item label="归属品类：">
              {{ruleForm.paramName}}
            </el-form-item>
            <div class="tableTile">技术参数信息</div>
            <el-form-item :label="item.paramName+'：'" v-for="(item,index) in ruleForm.catTeParamsVals" :key="item.paramCode">
              {{item.valueLst}}
            </el-form-item>
            <el-form-item>
              <el-col class="sfooter">
                 <el-button type="primary" @click="$router.go(-1);">返回</el-button>
              </el-col>
            </el-form-item>
        </el-form>
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
          let catCode = this.$route.query.catCode;
          // this.$http.get('/api/basics/categoryVals',{params:{catCode}}).then(res=>{
            // res.resultData.catTeParamsVals.forEach(v=>{
            //     let len = v.valueLst.length;
            //     if(len >= 4){
            //         v.valueLst.push('');
            //     }else{
            //         v.valueLst = v.valueLst.concat(','.repeat((4-len-1)).split(','));  
            //     }
            // });
            // this.ruleForm.list = res.resultData.catTeParamsVals;
              
          // });
          var res = {
            "status": 200,
            "message": "操作成功",
            "resultData": {
              "catCode": "20",
              "industryCode": "1",
              "industryName": "煤炭",
              "catTeParamsVals": [
                    {
                      "paramCode":"33",
                      "paramName":"发热量",
                      "valueLst":["≥5249kcal","≥800kcal","≥800kcal"]
                    },
                    {
                      "paramCode":"23",
                      "paramName":"胶质层厚度(Y)",
                      "valueLst":[">25mm","≥15mm","≥15mm"]
                    }
                ]
            }
          };
          res.resultData.catTeParamsVals.forEach(v=>{
              v.valueLst = v.valueLst.join('；');
          });
          this.ruleForm = res.resultData;
          console.log(this.ruleForm)


          // this.$http.get('/api/commons/categories',{params:{catCode}}).then(res=>{
          //       res.list.forEach(v=>{
            // if(v.catCode == catCode){
            //   this.ruleForm.paramName = v.catName;
            //   return;
            // }
          // });
          // });
          var res1 = {
            "status": 200,
            "message": "操作成功",
            "list": [
              {
                "catCode": "14",
                "catName": "动力煤"
              },
               {
                "catCode": "14",
                "catName": "动力煤"
              }]
          };
          res1.list.forEach(v=>{
            if(v.catCode == catCode){
              this.ruleForm.paramName = v.catName;
              return;
            }
          });
        
    }
  }
</script>
<style scoped>
  .el-form-item{
    padding: 0 15px;
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
  /*  border-top: 1px solid #ebeef5;
    border-left: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5;*/
    padding:15px;
    background-color: #e5e5e5;
    color:#000;
     margin-bottom: 10px;
    /*text-align: center;*/
  }

  .el-form-item {
    /*margin-bottom: 0;*/
  }
  .red {
      color:#f56c6c;
    }
   .sfooter {
    text-align: center;
    margin-top: 20px;
   }
   .message {
    margin-bottom: 10px;
   }
</style>