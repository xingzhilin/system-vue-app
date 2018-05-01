<template>
  <div>
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
            <div class="tableTile">品类信息</div>
            <table class="subTable">
              <col width="30%" />
              <col width="70%" />
              <tbody>
                <tr>
                  <td>归属频道</td>
                  <td>
                     煤炭
                  </td>
                </tr>
                <tr>
                  <td><span class="red">*</span> 归属品类</td>
                  <td>
                  <el-form-item prop="value">
                    <el-select v-model="ruleForm.value" size="small">
                      <el-option label="动力煤" value="qy"></el-option>
                      <el-option label="炼焦煤" value="ty"></el-option>
                      <el-option label="喷吹煤" value="ty"></el-option>
                    </el-select>
                   </el-form-item>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="tableTile">技术参数信息</div>
            <table class="subTable">
              <col width="30%" />
              <col width="70%" />
              <tbody>
                <tr>
                  <td>发热量</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare[index],'fare',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr> 
                <tr>
                  <td>全水</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare1"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare1[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare1[index],'fare1',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr>
                <tr>
                  <td>全硫</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare2"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare2[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare2[index],'fare2',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr>
                <tr>
                  <td>灰分</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare3"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare3[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare3[index],'fare3',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr>
                <tr>
                  <td>挥发分</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare4"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare4[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare4[index],'fare4',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr>
                <tr>
                  <td>焦渣特性</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare5"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare5[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare5[index],'fare5',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr>
                <tr>
                  <td>固态碳</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare6"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare6[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare6[index],'fare6',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr>
                <tr>
                  <td>灰熔点</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare7"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare7[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare7[index],'fare7',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr>
                <tr>
                  <td>粒度</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare8"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare8[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare8[index],'fare8',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr>
                <tr>
                  <td>干基灰</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare9"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare9[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare9[index],'fare9',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr>
                <tr>
                  <td>内水</td>
                  <td>
                    <el-col :span="5" :offset="1" :key="index" v-for="(item,index) in ruleForm.fare10"
>
                      <el-input
                        class="message"
                        v-model.trim="ruleForm.fare10[index]"
                        size="mini"
                        @keyup.native="addMessage(ruleForm.fare10[index],'fare10',index)"
                        clearable>
                      </el-input>
                    </el-col>
                  </td>
                </tr>
                </tbody>
            </table>
            <el-form-item>
              <el-col class="sfooter">
                 <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                 <el-button @click="$router.go(-1);">取消</el-button>
              </el-col>
            </el-form-item>
        </el-form>
        </el-col>
  </div>
</template>
<script scoped>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        ruleForm: {
          value:'qy',
          fare:['','','',''],
          fare1:['','','',''],
          fare2:['','','',''],
          fare3:['','','',''],
          fare4:['','','',''],
          fare5:['','','',''],
          fare6:['','','',''],
          fare7:['','','',''],
          fare8:['','','',''],
          fare9:['','','',''],
          fare10:['','','',''],
        },
        rules: {
          value: [
            { required: true,message: '请输入事件名称', trigger: 'keyup.native' }
          ]
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      addMessage(value,target,index){   //绑定原生keyup事件用  @keyup.native  
          let len = this.ruleForm[target].length - 1;
          if(index == len && value != "") {
              this.ruleForm[target].push('');
          }
      }
     
    }
  }
</script>
<style scoped>
  .el-form{
    padding: 15px 20px;
  }
  .line {
    text-align: center;
  }
  table.subTable {
    width: 100%;
    border-collapse:collapse;
    font-size: 14px;
    color:#909399;
    text-align:center;
  }
  table.subTable th, table.subTable td {
    border: 1px solid #ebeef5;
    padding: 15px ;
  }
  .tableTile {
    border-top: 1px solid #ebeef5;
    border-left: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5;
    padding:15px;
    color:#000;
    text-align: center;
  }

  .el-form-item {
    margin-bottom: 0;
  }
  .red {
      color:#f56c6c;
    }
   .sfooter {
    text-align: center;
    margin-top: 20px;
   }
   .message {
    margin-bottom: 10px;
   }
</style>
