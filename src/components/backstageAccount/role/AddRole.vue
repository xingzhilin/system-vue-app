<template>
    <div class="addRole">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="角色名称：" prop="name">
            <el-col :lg="8" :xs="20" :md="8" :sm="10">
              <el-input size="small" v-model="ruleForm.name"></el-input>
            </el-col>
          </el-form-item>
           <el-form-item label="添加时间：" prop="time">
            {{ruleForm.currentTime}}
          </el-form-item>
          <el-form-item label="角色状态：" prop="status">
            <el-radio-group v-model="ruleForm.status">
              <el-radio label="qy">启用</el-radio>
              <el-radio label="ty">停用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注：" prop="desc">
            <el-col :lg="8" :xs="20" :md="8" :sm="10">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
            <el-button @click="$router.go(-1);">取消</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          status: 'qy',
          desc: '',
          currentTime:new Date()
        },
        rules: {
          name: [
            { required: true, message: '请输入角色名称', trigger: 'blur' },
            { min: 2, max: 16, message: '长度在 2 到 16 个字符', trigger: 'blur' },
            { 
              validator: (rule, value, callback)=>{
                console.log(value);  // 输入的值
                return callback()  //必须return 才能通过
                // callback(new Error('用户名已存在'));//抛出校验错误提示
              }, 
              trigger: 'blur' 
            }
          ],
          desc: [
            { min: 0, max: 200, message: '长度在 0 到 200 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    created(){
      this.ruleForm.currentTime = this.format(new Date(),'yyyy-MM-dd hh:mm');
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({path:'/backstage/RoleAuthority'})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      format(date,fmt){
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds()
        };
        for (let k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
          }
        }
        return fmt;
      }
    }
  }
</script>
<style scoped>
    .addRole {
        padding: 30px 15px;
    }
</style>