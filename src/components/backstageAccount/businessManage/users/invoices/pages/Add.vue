<template>
    <div>
        <el-col class="addRole" :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                <el-form-item label="企业名称：" prop="enName">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="enName" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="纳税人识别号：" prop="taxpayerId">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.taxpayerId" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="发票地址：" prop="address">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.address" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="联系电话：" prop="telNo">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.telNo" size="small"></el-input>
                  </el-col>
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
            enId:'',
            taxpayerId:'',
            address:'',
            telNo:'',
            bankName:'',
            bankCardNo:'',
            status:'1'
        },
        rules: {
          enName: [
            { required: true, message: '请输入企业名称', trigger: 'blur' }
          ],
          taxpayerId: [
            { required: true, message: '请输入纳税人识别号', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入发票地址', trigger: 'blur' }
          ],
          telNo: [
            { required: true, message: '请输入联系电话', trigger: 'blur' }
          ],
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
        let enName = this.$route.query.enName;
        let enId = this.$route.query.enId;
        let taxpayerId = this.$route.query.taxpayerId;

        this.enName = enName;
        this.ruleForm.enId = enId;
        this.ruleForm.taxpayerId = taxpayerId;
        
        

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
