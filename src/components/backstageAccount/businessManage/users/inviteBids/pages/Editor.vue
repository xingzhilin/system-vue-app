<template>
  <div>
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" :inline-message="true">
            <div class="tableTile">品类信息</div>
            <table class="subTable">
              <col width="30%" />
              <col width="70%" />
              <tbody>
                <tr>
                  <td><span class="red">*</span> 点价货款比例</td>
                  <td>
                  <el-form-item prop="bailRatio">
                      <el-col :lg="{span:10,offset:7}" :xs="{span:20,offset:2}" :md="{span:10,offset:7}" :sm="{span:12,offset:6}">
                        <el-input v-model.trim="ruleForm.bailRatio" size="small"></el-input>
                      </el-col>
                      %
                   </el-form-item>
                  </td>
                </tr>
                <tr>
                  <td><span class="red">*</span> 销售期</td>
                  <td>
                  <el-form-item prop="sellPeriod">
                      <el-col :lg="{span:10,offset:7}" :xs="{span:20,offset:2}" :md="{span:10,offset:7}" :sm="{span:12,offset:6}">
                        <el-input v-model.trim="ruleForm.sellPeriod" size="small"></el-input>
                      </el-col>
                      天
                   </el-form-item>
                  </td>
                </tr>
              </tbody>
            </table>
            <el-form-item>
              <el-col class="sfooter">
                 <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                 <el-button @click="$router.go(-1);">取消</el-button>
              </el-col>
            </el-form-item>
        </el-form>
        </el-col>
  </div>
</template>
<script scoped>
  export default {
    data() {
       var number = (rule, value, callback) => {
         var reg = /^\d+(\.\d+)?$/ ;
        if(!reg.test(value)){
            callback(new Error('必须是数字类型'));
        }
        callback();
      };
      return {
        isEditor:false,
        options: [],
        ruleForm: {
          bailRatio:'10',
          sellPeriod:'60',
        },
        rules: {
          bailRatio: [
            { required: true,message: '请填写点价货款比例', trigger: 'blur' },
            { validator: number }
          ],
          sellPeriod: [
            { required: true,message: '请填写销售期', trigger: 'blur' },
            { validator: number }
          ]
        },
      };
    },
    created(){
        let enId = this.$route.query.enId;
        // this.$http.get('/api/basics/enterPrise/findSellPeriod',{params:{enId}}).then(res=>{
      
        // });
        
        
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
      }
     
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
    border-top: 1px solid #ebeef5;
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
   .message {
    margin-bottom: 10px;
   }
</style>
