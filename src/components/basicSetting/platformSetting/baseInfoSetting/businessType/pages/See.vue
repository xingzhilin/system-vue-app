<template>
 <div class="addRole">
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    <el-form :model="ruleForm" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="业务类型：" >
             {{ruleForm.bizType}}
        </el-form-item>
        <el-form-item label="所属业务种类：">
           {{ruleForm.masterBizName}}
        </el-form-item>
        <el-form-item label="起停用状态：">
            {{ruleForm.status =='1'?'启用':'停用'}}
        </el-form-item>
        <el-form-item label="缩写码：">
            {{ruleForm.acroCode}}
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
        bizType: "",
        masterBizName: "",
        status: "",
        acroCode: ""
      },
      tableData: [],
      
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
        list: 
              {
                id: "1",
                bizType: "煤炭商城",
                bizTypeCode: "1",
                acroCode: "MTSC",
                masterBizName: "销售",
                masterBizCode: "1",
                status: "1"
              }
          
      };
      this.ruleForm = data.list;
    }
  }
};
</script>
