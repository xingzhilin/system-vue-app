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
        res.list.forEach(v=>{    //默认显示动力煤
            if(v.catName == '动力煤'){
                this.ruleForm.catCode = v.catCode;
                this.getAddList(v.catCode);
              return;
            }
        });
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
      getAddList(catCode){   
          // this.$http.get('/api/commons/catParameters',{params:{catCode:this.ruleForm.catCode}}).then(res=>{
              // let list=[];
              // res.list.forEach((v,i)=>{
              //     list.push({
              //       "paramCode":v.paramCode,
              //       "paramName":v.paramName,
              //       "valueLst":['','','','']
              //     });
              // });
              // this.ruleForm.list = list;
          // });
          var res = {
            "status": 200,
            "message": "操作成功",
            "list": [
              {
                "paramCode": "14",
                "paramName": "全硫",
                "classTelParamsVals":[">2","<32"]
              },{
                "paramCode": "13",
                "paramName": "全硫111",
                "classTelParamsVals":[">2","<32"]
              }]
          };
          let list=[];
          res.list.forEach((v,i)=>{
              list.push({
                "paramCode":v.paramCode,
                "paramName":v.paramName,
                "valueLst":['','','','']
              });
          });
          this.ruleForm.list = list;

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
