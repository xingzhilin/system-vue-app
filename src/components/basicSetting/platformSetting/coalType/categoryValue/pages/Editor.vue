<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="130px"  :label-position="$store.getters.isPc==true?'right':'top'">
        <div class="tableTile">品类信息</div>
        <el-form-item label="归属频道：">
          煤炭
        </el-form-item>
        <el-form-item label="归属品类：" prop="catCode">
          <el-select v-model="ruleForm.catCode" size="small" @change="getAddList">
            <el-option v-for="item in options" :key="item.catCode" :label="item.catName" :value="item.catCode"></el-option>
          </el-select>
        </el-form-item>
        <div class="tableTile">技术参数信息</div>
        <el-form-item :label="item.paramName+'：'" v-for="(item,index) in ruleForm.list" :key="item.paramCode">
          <el-col :span="5" :offset="1" :key="paramIndex" v-for="(paramItem, paramIndex) in item.valueLst"
>
            <el-input
              class="message"
              v-model.trim="ruleForm.list[index].valueLst[paramIndex]"
              size="mini"
              @keyup.native="addMessage(ruleForm.list[index].valueLst[paramIndex],index,paramIndex)"
              clearable>
            </el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col class="sfooter">
             <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
             <el-button @click="$router.go(-1);">取消</el-button>
          </el-col>
        </el-form-item>
    </el-form>
  </div>
</template>
<script scoped>
  export default {
    data() {
      return {
        options: [],
        ruleForm: {
          catCode:'',
          list:[],
        },
        rules: {
          catCode: [
            { required: true,message: '请选择归属品类', trigger: 'change' }
          ]
        },
      };
    },
    created(){
        let catCode = this.$route.query.catCode;
        this.getEditorList(catCode);
        // this.$http.get('/api/commons/categories').then(res=>{
        //     this.options = res.list;
        //     res.list.forEach(v=>{    //默认显示动力煤
        //     if(v.catName == '动力煤'){
        //           this.ruleForm.catCode = v.catCode;
        //           this.getAddList(v.catCode);
        //           return;
        //         }
        //     });
        // });
        var res = {
          "status": 200,
          "message": "操作成功",
          "list": [
            {
              "catCode": "14",
              "catName": "动力煤1"
            },
             {
              "catCode": "12",
              "catName": "动力煤2"
            },
             {
              "catCode": "13",
              "catName": "动力煤"
            }]
        };
        this.options = res.list;

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      addMessage(value,index,paramIndex){   
          let len = this.ruleForm.list[index].valueLst.length - 1;
          if(paramIndex == len && value != "") {
              this.ruleForm.list[index].valueLst.push('');
          }
      },
      getEditorList(catCode){
          this.isEditor = true;
          this.ruleForm.catCode = catCode;
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
              let len = v.valueLst.length;
              if(len >= 4){
                  v.valueLst.push('');
              }else{
                  v.valueLst = v.valueLst.concat(','.repeat((4-len-1)).split(','));  
              }
          });
          this.ruleForm.list = res.resultData.catTeParamsVals;
      }
     
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

