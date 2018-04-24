<template>
    <div>
        <el-col class="addRole" :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                <el-form-item label="企业名称：" prop="region">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.name" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="开户行：" prop="region">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.region" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="银行账号：" prop="region">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.region" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="联系电话：">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.region" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="是否设为默认项：">
                  <el-radio-group v-model.trim="ruleForm.resource">
                    <el-radio label="yes">是</el-radio>
                    <el-radio label="no">否</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="是否启用：">
                  <el-radio-group v-model.trim="ruleForm.resource">
                    <el-radio label="yes">是</el-radio>
                    <el-radio label="no">否</el-radio>
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
        ruleForm: {
          region: '',
          date1: '',
          resource: 'yes',
          name:''
        },
        rules: {
          region: [
            { required: true, message: '请输入签章编号', trigger: 'blur' }
          ],
          date1: [
            { required: true, message: '请选择签章有效期', trigger: 'blur' }
          ],
          desc: [
            { min: 0,max:200, message: '长度在 0 到 200 个字符', trigger: 'blur' }
          ]
        }
      };
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
