<template>
 <div>
    <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="" class="demo-ruleForm">
      <table class="subTable">
      <col width="20%" />
      <col width="80%" />
      <tbody>
        <tr>
          <td><span class="red">*</span>云采购商补交保证金比例设置：</td>
          <td>
          	<el-form-item prop="buyerAmountRatio" :inline-message="true">
              <el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:2,offset:0}" :xl="{span:4,offset:0}">
	            	  <el-input v-model.trim="ruleForm.buyerAmountRatio" size="small">{{ruleForm.buyerAmountRatio}}</el-input>
                </el-col>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:2,offset:0}" :xl="{span:4,offset:0}">
	            	  <div class="f-lh">%</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:24,offset:0}" :xl="{span:4,offset:0}">
                  <span>说明：当煤炭价格下跌，采购商点价但是未付清货款的，该部分货值小于原货值的上述比例时，甲方需向乙方补充保证金，金额为已点价但为付清全款部分货物的下跌货值。</span>
                </el-col>
              </el-row>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td><span class="red">*</span>云采购（中间商）补交保证金比例设置（点价未付清全款）：</td>
          <td>
          	<el-form-item prop="buyerUnpaidRatio" :inline-message="true">
              <el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:2,offset:0}" :xl="{span:4,offset:0}">
	            	  <el-input v-model.trim="ruleForm.buyerUnpaidRatio" size="small">{{ruleForm.buyerUnpaidRatio}}</el-input>
                </el-col>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:2,offset:0}" :xl="{span:4,offset:0}">
	            	  <div class="f-lh">%</div>
                </el-col>
                </el-row>
                <el-row>
                  <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:24,offset:0}" :xl="{span:4,offset:0}">
                    <span>说明：乙方点价后，乙方享有点价部分货物价格上涨的收益并承担下跌的风险，若乙方点价后未付清全款的，该部分货值每下跌5%时，乙方需向甲方补充保证金，金额为已点价但未付清全款部分货物的下跌货值。</span>
            	    </el-col>
                </el-row>
            </el-form-item>
          </td>
        </tr>
         <tr>
          <td><span class="red">*</span>云采购（中间商）补交保证金比例设置（已出库但未点价）：</td>
          <td>
          	<el-form-item prop="buyerNonpriceRatio" :inline-message="true">
	          	<el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:2,offset:0}" :xl="{span:4,offset:0}">
	            	  <el-input v-model.trim="ruleForm.buyerNonpriceRatio" size="small">{{ruleForm.buyerNonpriceRatio}}</el-input>
                </el-col>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:2,offset:0}" :xl="{span:4,offset:0}">
	            	  <div class="f-lh">%</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:24,offset:0}" :xl="{span:4,offset:0}">
                  <span>说明：乙方已出库但未点价部分货物，甲方根据货物价格的上涨5%，要求乙方补足上涨部分的全额货款。</span>
            	  </el-col>
              </el-row>
            </el-form-item>
          </td>
        </tr>
         <tr>
          <td><span class="red">*</span>云供应商补交保证金比例设置：</td>
          <td>
          	<el-form-item prop="supplierAmountRatio" :inline-message="true">
	          	<el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:2,offset:0}" :xl="{span:4,offset:0}">
	            	  <el-input v-model.trim="ruleForm.supplierAmountRatio" size="small">{{ruleForm.supplierAmountRatio}}</el-input>
                </el-col>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:2,offset:0}" :xl="{span:4,offset:0}">
	            	  <div class="f-lh">%</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:24,offset:0}" :xl="{span:4,offset:0}">
                  <span>说明：当煤炭价格下跌，供应商供应的未点价煤炭当前总价值小于当前货值的上述比例时，触发甲方向乙方发起补充保证金通知。</span>
            	  </el-col>
              </el-row>
            </el-form-item>
          </td>
        </tr>
         <tr>
          <td><span class="red">*</span>云采购商可点价初始值（天）：</td>
          <td>
          	<el-form-item prop="buyerInitDay" :inline-message="true">
              <el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:2,offset:0}" :xl="{span:4,offset:0}">
	            	  <el-input v-model.trim="ruleForm.buyerInitDay" size="small">{{ruleForm.buyerInitDay}}</el-input>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:24,offset:0}" :xl="{span:4,offset:0}">
                  <span>说明：云采购商具有点价资格后，默认点价时长为上述天数。</span>
            	  </el-col>
              </el-row>
            </el-form-item>
          </td>
        </tr>
         <tr>
          <td><span class="red">*</span>云供应商可点价初始值（天）：</td>
          <td>
          	<el-form-item prop="supplierInitDay" :inline-message="true">
	          	<el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:2,offset:0}" :xl="{span:4,offset:0}">
	            	  <el-input v-model.trim="ruleForm.supplierInitDay" size="small">{{ruleForm.supplierInitDay}}</el-input>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="{span:14,offset:0}" :sm="{span:8,offset:0}" :md="{span:8,offset:0}" :lg="{span:24,offset:0}" :xl="{span:4,offset:0}">
                  <span>说明：云供应商具有点价资格后，默认点价时长为上述天数。</span>
            	  </el-col>
              </el-row>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="text-align:center;">
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
              <el-button @click="handleReset('ruleForm')">取消</el-button>
             </el-form-item>
          </td>
        </tr>
        </tbody>
        </table>
    </el-form>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        buyerAmountRatio: "95",
        buyerUnpaidRatio: "95",
        buyerNonpriceRatio: "95",
        supplierAmountRatio: "90",
        buyerInitDay: "40",
        supplierInitDay: "40"
      },
      rules: {
        buyerAmountRatio: [
          {
            required: true,
            message: "请输入0-100",
            trigger: "blur"
          },
          {
            min: 1,
            max: 4,
            message: "长度在 1 到 4 个字符",
            trigger: "blur"
          }
        ],
        buyerUnpaidRatio: [
          {
            required: true,
            message: "请输入0-100",
            trigger: "blur"
          },
          {
            min: 1,
            max: 4,
            message: "长度在 1 到 4个字符",
            trigger: "blur"
          }
        ],
        buyerNonpriceRatio: [
          {
            required: true,
            message: "请输入0-100",
            trigger: "blur"
          },
          {
            min: 1,
            max: 4,
            message: "长度在 1 到 4 个字符",
            trigger: "blur"
          }
        ],
        supplierAmountRatio: [
          {
            required: true,
            message: "请输入整数",
            trigger: "blur"
          },
          {
            min: 1,
            max: 4,
            message: "长度在 1 到 4 个字符",
            trigger: "blur"
          }
        ],
        buyerInitDay: [
          {
            required: true,
            message: "请输入整数",
            trigger: "blur"
          },
          {
            min: 1,
            max: 4,
            message: "长度在 1 到 4 个字符",
            trigger: "blur"
          }
        ],
        supplierInitDay: [
          {
            required: true,
            message: "请输入整数",
            trigger: "blur"
          },
          {
            min: 1,
            max: 4,
            message: "长度在 1 到 4 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);

          // this.$http.post('api/user/register',this.ruleForm).then(res => {

          // });
          var res = {
            status: 200,
            message: "操作成功",
            result: {
              buyerAmountRatio: "95",
              buyerUnpaidRatio: "95",
              buyerNonpriceRatio: "95",
              supplierAmountRatio: "90",
              buyerInitDay: "40",
              supplierInitDay: "40"
            }
          };
          if (res.status == 200) {
            this.$router.push("/platform/baseInfo/standard/Index");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleReset() {
      this.ruleForm = {
        buyerAmountRatio: "95",
        buyerUnpaidRatio: "95",
        buyerNonpriceRatio: "95",
        supplierAmountRatio: "90",
        buyerInitDay: "40",
        supplierInitDay: "40"
      };
    }
  }
};
</script>
<style scoped lang="scss">
.f-lh {
  line-height: 32px;
  height: 32px;
}

.limit {
  height: 30px;
  border: 1px solid #ccc;
  line-height: 30px;
  text-align: right;

  span {
    color: #ee2a7b;
  }
}

.ql-snow .ql-editor img {
  max-width: 480px;
}

.ql-editor .ql-video {
  max-width: 480px;
}
.el-form {
  padding: 15px 20px;
}
.line {
  text-align: center;
}
table.subTable {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: #909399;
  text-align: center;
}
table.subTable th,
table.subTable td {
  border: 1px solid #ebeef5;
  padding: 15px;
  text-align: left;
}
.tableTile {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  border-right: 1px solid #ebeef5;
  padding: 15px;
  color: #000;
  text-align: center;
}

.el-form-item {
  margin-bottom: 0;
}
.red {
  color: #f56c6c;
}
.sfooter {
  text-align: center;
  margin-top: 20px;
}
.message {
  margin-bottom: 10px;
}
</style>
<style>
.ql-toolbar.ql-snow {
  text-align: left;
}
.ql-editor {
  min-height: 185px;
}
.el-form-item .el-form-item__content {
  margin-left: 20px;
}
table.subTable .el-form-item__content {
  line-height: 20px;
  margin-left: 20px;
}
</style>