<template>
 <div class="addRole">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-position="$store.getters.isPc==true?'right':'top'" :inline-message="true" label-width="130px" class="demo-ruleForm">
        <el-form-item label="交货方式：" prop="deliveryType">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.deliveryType"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="状态：" prop="status">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-radio-group v-model="ruleForm.status">
                <el-radio label="1">启用</el-radio>
                <el-radio label="0">停用</el-radio>
            </el-radio-group>
            </el-col>
        </el-form-item>
        <el-form-item label="说明">
          <el-col :lg="10" :xs="20" :md="10" :sm="12">
          <el-input type="textarea" autosize v-model="ruleForm.remark"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" size="small">保存</el-button>
          <el-button @click="$router.go(-1);" size="small">取消</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        deliveryType: "",
        status: "1",
        remark: ""
      },
      rules: {
        deliveryType: [
          {
            required: true,
            message: "请输入交货方式",
            trigger: "blur"
          },
          {
            min: 3,
            max: 25,
            message: "长度在 3 到 25 个字符",
            trigger: "blur"
          }
        ],
        status: [
          {
            required: true,
            message: "请选择状态",
            trigger: "change"
          }
        ]
      }
    };
  },
  created(){
    console.log(1111)
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);

         this.$axios.post('http://192.168.15.183:9002/api/v1/basics/admin/deliveryType/add',this.ruleForm).then(res=>{
            console.log(res)
              if (res.status == 200) {
              this.$router.push("/platform/baseInfo/delivery/Index");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.addRole{
  padding: 0 15px;
}
.el-select{
  width: 100%;
}
</style>
