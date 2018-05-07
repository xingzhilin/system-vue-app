<template>
  <div>
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline-message="true" :show-message="false">
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
                  <el-form-item prop="catCode"  >
                    <el-select v-model.trim="ruleForm.catCode" size="small" @change="getAddListChange">
                      <el-option v-for="item in catCodeOptions" :key="item.catCode" :label="item.catName" :value="item.catCode"></el-option>
                    </el-select>
                   </el-form-item>
                  </td>
                </tr> 
                <tr>
                  <td><span class="red">*</span> 选择品牌</td>
                  <td>
                  <el-form-item prop="brandCode" >
                    <el-select v-model.trim="ruleForm.brandCode" size="small">
                      <el-option v-for="item in brandCodeOptions" :key="item.brandCode" :label="item.brandName" :value="item.brandCode"></el-option>
                    </el-select>
                   </el-form-item>
                  </td>
                </tr> 
                <tr>
                  <td><span class="red">*</span> 品种名称</td>
                  <td>
                     <el-form-item prop="className">
                        <el-col :lg="{span:6,offset:9}" :xs="{span:12,offset:6}" :md="{span:10,offset:7}" :sm="{span:12,offset:6}">
                          <el-input v-model.trim="ruleForm.className" size="small"></el-input>
                        </el-col>
                     </el-form-item>
                  </td>
                </tr>
                <tr>
                  <td>产地</td>
                  <td>
                    <el-form-item>
                      <el-col :lg="{span:6,offset:9}" :xs="{span:12,offset:6}" :md="{span:10,offset:7}" :sm="{span:12,offset:6}">
                        <el-input v-model.trim="ruleForm.productionPlace" size="small"></el-input>
                      </el-col>
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
                <tr v-for="(item,index) in classList" :key="item.paramCode">
                  <td><span class="red">*</span> {{item.paramName}}</td>
                  <td>
                      <el-select class="telParamValue" v-model="ruleForm.classTelParamsVals[index].valueCode" size="small" @change="paramValidator(index)">
                        <el-option v-for="(paramItem, paramIndex) in item.classTelParamsVals" :key="paramItem.valueCode" :label="paramItem.valueRes" :value="paramItem.valueCode"></el-option>
                      </el-select>
                  </td>
                </tr> 
                <tr>
                  <td>详细说明</td>
                  <td>
                    <el-col :lg="{span:6,offset:9}" :xs="{span:12,offset:6}" :md="{span:10,offset:7}" :sm="{span:12,offset:6}">
                      <el-input
                        type="textarea"
                        :rows="4"
                        resize="none"
                        v-model.trim="ruleForm.classDesc">
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
<script>
  export default {
    data() {
      return {
        catCodeOptions: [],
        brandCodeOptions: [],
        classList:[],
        ruleForm: {
          className:'',
          industryCode:'',
          classTelParamsVals:[],
          productionPlace:'',
          classDesc:'',
          catCode:'',
          brandCode:''
        },
        rules: {
          catCode: [
            { required: true,message: '必填项', trigger: 'change' }
          ],
          brandCode: [
            { required: true,message: '必填项', trigger: 'change' }
          ],
          className: [
            { required: true,message: '必填项', trigger: 'blur' }
          ]
        },
      };
    },
    created(){
        // this.$http.get('/api/commons/categories').then(res=>{
              
        // });
        var res = {
          "status": 200,
          "message": "操作成功",
          "list": [
            {
              "catCode": "14",
              "catName": "动力煤1"
            },
             {
              "catCode": "12",
              "catName": "动力煤2"
            },
             {
              "catCode": "13",
              "catName": "动力煤"
            }]
        };
        this.catCodeOptions = res.list;
        
          res.list.forEach(v=>{    //默认显示动力煤
              if(v.catName == '动力煤'){
                  this.ruleForm.catCode = v.catCode;
                  this.getAddList(v.catCode);   //新增页列表展示  按品类代码查询
                return;
              }
          });
        
        this.getBrandCodeOptions();
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          let flag = this.telParamValueValidator();
          if (valid && flag) {
            console.log(this.ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getAddList(catCode){   
          // this.$http.get('/api/commons/catParameters',{params:{catCode}}).then(res=>{
              
          // });
          var res = {
            "status": 200,
            "message": "操作成功",
            "list": [
              {
                "paramCode": "14",
                "paramName": "全硫",
                "classTelParamsVals":[{"valueCode":"1","valueRes":">2"},{"valueCode":"2","valueRes":">12"},]
              },{
                "paramCode": "12",
                "paramName": "全1硫",
                "classTelParamsVals":[{"valueCode":"1","valueRes":">2"},{"valueCode":"2","valueRes":">12"},]
              }]
          };
          let classList=[];
          let classTelParamsVals=[];
          res.list.forEach((v,i)=>{
              classList.push({   //存展示数据
                "paramCode":v.paramCode,
                "paramName":v.paramName,
                "classTelParamsVals":v.classTelParamsVals
              });
              classTelParamsVals.push({
                  valueCode:'',
                  sulfurType:''
                });
          });
          this.classList = classList;
          this.ruleForm.classTelParamsVals = classTelParamsVals;
         
      },
      getAddListChange(catCode){   
          this.getAddList(catCode);
          this.$refs['ruleForm'].clearValidate();
          $('.telParamValue').each((i,v)=>{
            $(v).find('input').removeClass('validaterColor');
          });
         
      },
      getBrandCodeOptions(){
        // this.$http.get('/api/commons/brands').then(res=>{
               // this.brandCodeOptions = res.list;
                
            // });
            var res = {
          "status": 200,
          "message": "操作成功",
          "list": [
            {
              "brandCode": "14",
              "brandName": "金银岛一号"
            },
             {
              "brandCode": "11",
              "brandName": "金银岛二号"
            }]
        };
        this.brandCodeOptions = res.list;
       },
       telParamValueValidator(){
          let flag = true;
          $('.telParamValue').each((i,v)=>{
              if($(v).find('input').val() == ''){
                $(v).find('input').addClass('validaterColor').removeClass('validaterColorError');
                flag = false;
              }else{
                $(v).find('input').addClass('validaterColorError').removeClass('validaterColor');
              }
          });
          return flag;
       },
       paramValidator(index){
          $('.telParamValue').eq(index).find('input').removeClass('validaterColor').addClass("validaterColorError");
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
    
</style>
<style>
  .validaterColor {
      border: 1px solid #f56c6c;
    }
    .validaterColorError {
      border: 1px solid #67c23a;
    }
</style>