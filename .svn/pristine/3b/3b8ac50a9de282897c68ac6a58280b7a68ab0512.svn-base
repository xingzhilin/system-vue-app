<template>
    <div class="category">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="品类名称：" prop="catName">
          <el-col :lg="6" :xs="20" :md="8" :sm="10">
            <el-input v-model="ruleForm.name" size="small" :disabled="isEditor"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="归属频道：" prop="industryCode">
          <el-col :lg="6" :xs="20" :md="8" :sm="10">
            <el-select v-model="ruleForm.industryCode" placeholder="请选择" size="small" :disabled="isEditor">
              <el-option v-for="item in industryCodeOption" :label="item.label" :value="item.value" :key="item.value"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="品类参数：" prop="catTeParams">
            <el-tag v-for="(item,index) in ruleForm.catTeParams" :key="index" size="medium" closable @close="handleClose(item)">{{item}}</el-tag>
        </el-form-item>
        <el-form-item label="添加关键词：">
          <el-col class="message" :lg="6" :xs="20" :md="8" :sm="10">
            <el-input v-model="message" size="small"></el-input>
          </el-col>
          <el-button @click="handleAdd(message)" size="small" type="primary">确定</el-button>
        </el-form-item>
        <el-form-item label="备注：" prop="remarks">
          <el-col :lg="6" :xs="20" :md="8" :sm="10">
            <el-input type="textarea" :rows="4" resize="none" v-model="ruleForm.remarks"></el-input>
          </el-col>
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
        isEditor:false,
        message:'',
        ruleForm: {
          catName: '',
          industryCode: '',
          catTeParams: [],
          remarks: ''
        },
        industryCodeOption:[
          {
            value:'1',
            label:'煤炭'
          },
           {
            value:'2',
            label:'钢铁'
          }
        ],
        rules: {
          industryCode: [
            { required: true, message: '请选择归属频道', trigger: 'change' }
          ],
          catTeParams:[
            { required: true, message: '请选添加品类参数', trigger: 'change' }
          ],
          remarks: [
            { min: 0,max:200, message: '长度在 0 到 200 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    created(){
      // 是否编辑页
      let content = this.$route.query.content;
      if(content){
        //编辑页不可改内容
        this.isEditor = true;
        //去除不必要字段
        this.ruleForm = {
          catCode:content.catCode,
          catName: content.catName,
          industryCode: content.industryCode,
          catTeParams: content.catTeParams.split('；'),
          remarks: content.remarks
        };
      }
         
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
      handleClose(tag) {
        this.ruleForm.catTeParams.splice(this.ruleForm.catTeParams.indexOf(tag), 1);
      },
      handleAdd(message){
        if(message == ''){
            return;
        }
        this.ruleForm.catTeParams.push(message);
        this.$refs.ruleForm.validateField('catTeParams');
      }
    }
  }
</script>
<style scoped lang="scss">
    .category {
      padding: 30px;
      .el-tag {
        margin-right: 10px;
      }
      .message {
        margin-right:10px;
      }
    }
</style>