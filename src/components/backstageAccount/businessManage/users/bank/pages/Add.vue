<template>
    <div>
        <el-col class="addRole" :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                <el-form-item label="企业名称：">
                  {{enName}}
                </el-form-item>
                <el-form-item label="开户行：" prop="bankName">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.bankName" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="银行账号：" prop="bankCardNo">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.bankCardNo" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="联系电话：">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.telephone" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="是否设为默认项：">
                  <el-radio-group v-model.trim="ruleForm.isDefault">
                    <el-radio label="1">是</el-radio>
                    <el-radio label="0">否</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="是否启用：">
                  <el-radio-group v-model.trim="ruleForm.status">
                    <el-radio label="1">是</el-radio>
                    <el-radio label="0">否</el-radio>
                  </el-radio-group>
                </el-form-item>
               <el-form-item class="footer">
                  <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                  <el-button @click="$router.go(-1);">取消</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        enName:'',
        ruleForm: {
          enId: '',
          bankName: '',
          bankCardNo: '',
          telephone:'',
          isDefault:'1',
          status:'1',
        },
        rules: {
          bankName: [
            { required: true, message: '请输入开户行', trigger: 'blur' }
          ],
          bankCardNo: [
            { required: true, message: '请输入银行账号', trigger: 'blur' }
          ]
        }
      };
    },
    created(){
      this.enId = this.$route.query.enId;
      this.ruleForm.enName = this.$route.query.enName;
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
            // this.$http.post('/api/basics/enterpriseBank',this.ruleForm).then(res => {
                // if(res.status == 200){
                //   this.$router.push('/business/users/bank/editor');
                // }
            // });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
     
    }
  }
</script>
<style scoped>
    .addRole {
        padding: 30px 15px;
    }
    .footer {
      margin: 30px 0;
    }

  	.line {
  		text-align: center;
  	}
</style>
