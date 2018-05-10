<template>
 <div class="addRole">
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="企业名称：" prop="enName">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.enName"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="企业编码：" prop="enCode">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.enCode"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="省份：" prop="provinceId">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-select v-model="ruleForm.provinceId" placeholder="请选择">
                
                    <el-option v-for="item in cityOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                
            </el-select>
            </el-col>
        </el-form-item>
        <el-form-item label="交割库：">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.whCode"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="统一社会信用代码：">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.taxpayerIdentityNo"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="企业法人：">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.legalPerson"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="企业邮箱：">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.enMail"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="办公地址：">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.enAddress"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="联系人：">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.linkMan"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="联系电话：">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input v-model="ruleForm.telephone"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="企业简介">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-input type="textarea" v-model="ruleForm.enIntroduce"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="是否启用：">
            <el-col :lg="10" :xs="20" :md="10" :sm="12">
            <el-radio-group v-model="ruleForm.status">
                <el-radio label="是" value="1"></el-radio>
                <el-radio label="否" value="0"></el-radio>
            </el-radio-group>
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
        enName: "",
        enCode: "",
        provinceId: "",
        whCode: "",
        taxpayerIdentityNo: "",
        legalPerson: "",
        enMail: "",
        enAddress: "",
        linkMan: "",
        telephone: "",
        enIntroduce: "",
        status: ""
      },
      rules: {
        enName: [
          {
            required: true,
            message: "请输入企业名称",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          }
        ],
        enCode: [
          {
            required: true,
            message: "请输入企业编码",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          }
        ],
        provinceId: [
          {
            required: true,
            message: "请选择活动区域",
            trigger: "change"
          }
        ]
      },
        cityOptions: [
          {
                value: "Shanghai",
                label: "上海"
              },
              {
                value: "Beijing",
                label: "北京"
              },
         
        ]
    };
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);

         // this.$http.post('api/basics/enterPrise/addTransnet',this.ruleForm).then(res => {

      // });
      var res= {
    "status": 200,
    "message":"操作成功"
  }
  if(res.status == 200){
      this.$router.push('/business/laboratory/company')
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
