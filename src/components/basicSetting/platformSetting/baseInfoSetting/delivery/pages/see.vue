<template>
 <div class="addRole">
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    <el-form :model="ruleForm" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="交货方式：" >
             {{ruleForm.deliveryType}}
        </el-form-item>
        <el-form-item label="状态：">
            {{ruleForm.status =='1'?'启用':'停用'}}
        </el-form-item>
        <el-form-item label="说明：">
            {{ruleForm.remark}}
        </el-form-item>
        <el-form-item>
            <el-button @click="$router.go(-1);">返回</el-button>
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
        id: "",
        deliveryType: "",
        status: "",
        remark: ""
      },
      tableData: []
    };
  },
  created() {
    let id = this.$route.query.id;
    this.ruleForm.id = id;
    this.dataSubmit();
  },
  methods: {
    dataSubmit(ruleForm) {
      this.$axios.get('http://192.168.15.183:9002/api/v1/basics/admin/deliveryType/query/' + this.ruleForm.id,{
						headers:{ "Content-Type": "application/json"}
          })
          .then(res =>  {
						console.log(res.data)
						if(res.status == 200){
							this.ruleForm = res.data.result;
						}
          })
          .catch(function (error) {
						console.log(error);
					})
    }
  }
};
</script>
