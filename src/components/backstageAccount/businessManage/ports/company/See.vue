<template>
    <div class="roleAuthority">
        <el-tabs>
            <el-tab-pane>
                <span slot="label">
                    <el-button type="primary" plain autofocus>基本信息</el-button>
                </span>
                <el-col>
                    <el-form :model="ruleForm" ref="ruleForm" label-width="140px" class="demo-ruleForm">
                        <el-form-item label="企业名称：">
                            {{ruleForm.enName}}
                        </el-form-item>
                        <el-form-item label="企业编码：">
                            {{ruleForm.enCode}}
                        </el-form-item>
                        <el-form-item label="省份：">
                            {{ruleForm.provinceId}}
                        </el-form-item>
                        <el-form-item label="交割库：">
                            {{ruleForm.whCode}}
                        </el-form-item>
                        <el-form-item label="统一社会信用代码：">
                            {{ruleForm.taxpayerIdentityNo}}
                        </el-form-item>
                        <el-form-item label="企业法人：">
                            {{ruleForm.legalPerson}}
                        </el-form-item>
                        <el-form-item label="企业邮箱：">
                            {{ruleForm.enMail}}
                        </el-form-item>
                        <el-form-item label="办公地址：">
                            {{ruleForm.enAddress}}
                        </el-form-item>
                        <el-form-item label="联系人：">
                            {{ruleForm.linkMan}}
                        </el-form-item>
                        <el-form-item label="联系电话：">
                            {{ruleForm.telephone}}
                        </el-form-item>
                        <el-form-item label="企业简介：">
                            {{ruleForm.enIntroduce}}
                        </el-form-item>
                        <el-form-item label="是否启用：">
                            <el-radio-group v-model="ruleForm.status">
                                <el-radio label="是" value="1"></el-radio>
                                <el-radio label="否" value="0"></el-radio>
                            </el-radio-group>
                        </el-form-item>
    
    
                    </el-form>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="消息中心">
                <span slot="label">
                                <el-button type="primary" plain>银行信息</el-button>
                              </span>
                <el-col>
                    <el-table :data="tableData" border size="small">
    
                        <el-table-column align="center" prop="bankName" label="开户行"></el-table-column>
                        <el-table-column align="center" prop="bankCardNo" label="银行账号"></el-table-column>
                        <el-table-column align="center" prop="telephone" label="联系电话"></el-table-column>
                        <el-table-column align="center" prop="createTime" label="添加时间"></el-table-column>
                        <el-table-column align="center" prop="status" label="账号状态">
                            <template slot-scope="scope">
                                {{scope.row.status =='1'?'启用':'停用'}} 
                            </template>
                        </el-table-column>
                        <el-table-column align="center" prop="isDefault" label="是否为默认项">
                            <template slot-scope="scope">
                                {{scope.row.status =='1'?'是':'否'}} 
                            </template>
                        </el-table-column>
    
                    </el-table>
                </el-col>
            </el-tab-pane>
        </el-tabs>
        <el-col>
            <el-button @click="$router.go(-1);">返回</el-button>
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
      provinceIdOptions: [],
      tableData: []
    };
  },
  created() {
    this.dataSubmit();
  },
  methods: {
    dataSubmit() {
      // this.$http.post('api/basics/enterPrise/transnetDetail{enId}).then(res => {
      // });
      // this.$http.post('api/basics/bank/findBanks{enId}).then(res => {
      // });
      var data = {
        status: 200,
        message: "操作成功",
        list: {
          enName: "北京XXX公司",
          enCode: "1000002",
          provinceId: "010",
          provinceName: "北京市",
          provinceCode: "010",
          whCode: "1001",
          whName: "曹妃甸",
          taxpayerIdentityNo: "10000222",
          legalPerson: "刘",
          enMail: "11@qq.com",
          enAddress: "北京三元桥",
          linkMan: "黎明",
          telephone: "19812009877",
          enIntroduce: "煤炭供应链",
          status: "0"
        }
      };
      this.ruleForm = data.list;
      var data1 = {
        status: 200,
        message: "操作成功",
        list: [
          {
            bankName: "中国工商银行",
            bankCardNo: "121545451562215",
            telephone: "1351234678",
            createTime: "2018-5-1 12:00:00",
            status: "1",
            isDefault: "0"
          }
        ]
      };
      this.tableData = data1.list;
    }
  }
};
</script>

<style scoped>
.roleAuthority {
  padding: 30px;
}

.el-tree {
  margin: 20px 0 50px 0;
}

.el-tabs .el-tabs__nav-wrap::after {
  display: none;
}
</style>