<template>
<div class="addRole">
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="企业名称：" prop="enName">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            {{ruleForm.enName}}
            </el-col>
        </el-form-item>
        <el-form-item label="开户行：" prop="bankName">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.bankName"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="银行账号：" prop="bankCardNo">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.bankCardNo"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="联系电话：">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.telephone"></el-input>
            </el-col>
        </el-form-item>
        
        <el-table-column align="center" prop="isDefault" label="是否为默认项">
            <template slot-scope="scope">
                {{scope.row.status =='1'?'是':'否'}} 
             </template>
        </el-table-column>
         <el-form-item label="是否启用：">
            <el-radio-group v-model="ruleForm.status">
                 <el-radio label="是" value="1"></el-radio>
                 <el-radio label="否" value="0"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <router-link :to="{path:'/business/ports/bank'}">
            <el-button>取消</el-button>
            </router-link>	
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
        enName: "",
        bankName: "",
        bankCardNo: "",
        telephone: "",
        isDefault: "",
        status: ""
      },
      rules: {
        enName: [
          {
            required: true,
            message: "请输入企业名称",
            trigger: "blur"
          }
          ],
        bankName: [
          {
            required: true,
            message: "请输入开户行信息",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          }
        ],
        bankCardNo: [
          {
            required: true,
            message: "请输入银行账号",
            trigger: "blur"
          },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    let enName = this.$route.query.enName;
	this.ruleForm.enName = enName;
    this.dataSubmit();
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);

         // this.$http.post('api/basics/bank/addBanks',this.ruleForm).then(res => {

      // });
      var res= {
    "status": 200,
    "message":"操作成功"
  }
  if(res.status == 200){
      this.$router.push('/business/ports/bank')
  }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields();
    }
  }
};
</script>
