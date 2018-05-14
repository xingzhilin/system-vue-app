<template>
 <div class="addRole">
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    <el-form :model="ruleForm" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="检验标准：" >
             {{ruleForm.testStandard}}
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
        testStandard: "",
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
      var data = {
        status: 200,
        message: "操作成功",
        list: {
          id: "1",
          testStandard: "港口入库榜单或轨道衡",
          testStandardCode: "1",
          status: "1",
          remark: "1234567"
        }
      };
      this.ruleForm = data.list;
    }
  }
};
</script>
