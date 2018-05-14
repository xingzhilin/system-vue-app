<template>
 <div class="addRole">
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    <el-form :model="ruleForm" :rules="rules"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="交货方式：" prop="deliveryType">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.deliveryType">{{ruleForm.deliveryType}}</el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="状态：" prop="status">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-radio-group v-model="ruleForm.status">
                <el-radio label="启用" value="1"></el-radio>
                <el-radio label="停用" value="0"></el-radio>
            </el-radio-group>
            </el-col>
        </el-form-item>
       
        <el-form-item label="说明">
           <el-col :lg="10" :xs="20" :md="10" :sm="12">
          <el-input type="textarea" v-model="ruleForm.remark">{{ruleForm.remark}}</el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
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
        deliveryType: "",
        status: "",
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
  created() {
    let id = this.$route.query.id;
    this.ruleForm.id = id;
    this.dataSubmit();
  },
  methods: {
    dataSubmit(ruleForm) {
      var data = {
        status: 200,
        message: "操作成功",
        list: {
          id: "1",
          deliveryType: "港口入库榜单或轨道衡",
          status: "1",
          remark: "1234567"
        }
      };
      this.ruleForm = data.list;
    },
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);

          // this.$http.post('api/user/register',this.ruleForm).then(res => {

          // });
          var res = {
            status: 200,
            message: "操作成功"
          };
          if (res.status == 200) {
            this.$router.push("/platform/baseInfo/standard/Index");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
