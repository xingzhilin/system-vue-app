<template>
<div class="edit">
  <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-position="$store.getters.isPc==true?'right':'top'" :inline-message="true"  label-width="140px">
      <el-form-item label="用户名：">
        <el-col :lg="10" :xs="20" :md="10" :sm="12">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="手机号码：" prop="cellPhone">
        <el-col :lg="10" :xs="20" :md="10" :sm="12">
          <el-input v-model="ruleForm.cellPhone"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="用户状态：">
        <el-col :lg="10" :xs="20" :md="10" :sm="12">
          <el-radio-group prop="" v-model="ruleForm.status" size="small">
            <el-radio :label="1">启用</el-radio>
			      <el-radio :label="0">停用</el-radio> 
            </el-radio-group>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" size="small">保存</el-button>
        <el-button @click="$router.go(-1);" size="small">取消</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</div>
</template>

<script>
function isvalidPhone(str) {
	  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
	  return reg.test(str)
	}
	var validPhone = (rule, value,callback)=>{
		if (!value){
			callback(new Error('请输入电话号码'))
		}else  if (!isvalidPhone(value)){
			callback(new Error('请输入正确的11位手机号码'))
		}else {
			callback()
		}
	}
export default {
  data() {
    return {
      ruleForm: {
        userName: "",
        cellPhone: "",
        status: "1"
      },
      rules: {
        cellPhone: [
		          { required: true, message: '请输入手机号码', trigger: 'blur' },
      				{ required: true, trigger: 'blur', validator: validPhone }
		      ],
     }  
    }
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);

          // this.$http.post('api/v1/admin/basics/register/user',this.ruleForm).then(res => {

          // });
          var res = {
            status: 200,
            message: "操作成功"
          };
          if (res.status == 200) {
            this.$router.push("/frontAccounts/users/index");
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
<style scoped lang="scss">
	
	.edit{
		table{width:100%;text-align:center;border-collapse:collapse;border-spacing:1;border-spacing:0; }
		table td{word-break: break-all; word-wrap:break-word;border-right:1px solid #939598; border-bottom:1px solid #939598;font:500 14px Arial}
		.zl_required{
			color: red;
		}
		.add_table{
			width: 80%;
			margin: 30px auto;
			font-size:12px;
			td{
				border: 1px solid #ebeef5;
				padding: 10px;
				text-align: left;
			}
			.td_label{
				width: 160px;
				text-align:right;
				vertical-align: top;
   				line-height: 40px;
			}
			.el-input{
				width: 260px;
			}
			.td_button{
				text-align: center;
			}
		}
		.el-footer{
			text-align: center;
		}		
		.el-transfer{
			width: 600px;
			margin: 15px auto;
			.el-transfer-panel{
				width:245px;
			}
		}
		.el-form-item{
			margin-bottom: 10px;
		}
	}
</style>
