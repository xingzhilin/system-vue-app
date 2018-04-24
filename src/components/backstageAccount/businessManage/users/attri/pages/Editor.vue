<template>
    <div class="editor">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="企业名称：" prop="name">
           {{ruleForm.name}}
        </el-form-item>
        <el-form-item label="是否是供应链公司：" prop="isCom">
          <el-radio-group v-model="ruleForm.isCom" @change="isCompony">
            <el-radio label="yes">是</el-radio>
            <el-radio label="no">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否交货地交货：" prop="isDer" v-if="isShow">
          <el-radio-group v-model="ruleForm.isDer">
            <el-radio label="yes">是</el-radio>
            <el-radio label="no">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="用户类别：" prop="lx" v-if="isShow">
          <el-radio-group v-model="ruleForm.lx">
            <el-radio label="1">采购商</el-radio>
            <el-radio label="2">采购中间商</el-radio>
            <el-radio label="3">供应商</el-radio>
            <el-radio label="4">销售中间商</el-radio>
          </el-radio-group>
        </el-form-item>        
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="$router.go(-1)">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        isShow:true,
        ruleForm: {
          name: '123',
          isDer:'no',
          isCom: 'no',
          lx: ''
        },
        rules: {
          isCom: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          isDer: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          lx: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
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
      isCompony(){
        if(this.ruleForm.isCom == 'yes'){
            this.isShow = false;
        }else{
            this.isShow = true;
        }
      }
    }
  }
</script>
<style scoped>
    .editor {
      padding: 30px;
    }
</style>