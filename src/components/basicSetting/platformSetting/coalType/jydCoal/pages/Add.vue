<template>
  <div>
        <!-- <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}"> -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline-message="true"  label-width="100px" :label-position="$store.getters.isPc==true?'right':'top'">
            <div class="tableTile">品类信息</div>
            <el-form-item label="归属频道：">
                煤炭
            </el-form-item>
            <el-form-item prop="catCode"  label="归属品类：">
              <el-select v-model.trim="ruleForm.catCode" size="small" @change="getAddListChange">
                <el-option v-for="item in catCodeOptions" :key="item.catCode" :label="item.catName" :value="item.catCode"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="brandCode" label="选择品牌：">
              <el-select v-model.trim="ruleForm.brandCode" size="small">
                <el-option v-for="item in brandCodeOptions" :key="item.brandCode" :label="item.brandName" :value="item.brandCode"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="className" label="品种名称：">
                <el-col :xs="{span:24}" :sm="{span:24}" :md="{span:10}" :lg="{span:10}" :xl="{span:8}">
                  <el-input v-model.trim="ruleForm.className" size="small"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="产地：">
              <el-col :xs="{span:24}" :sm="{span:24}" :md="{span:10}" :lg="{span:10}" :xl="{span:8}">
                <el-input v-model.trim="ruleForm.productionPlace" size="small"></el-input>
              </el-col>
            </el-form-item>
            <div class="tableTile">技术参数信息</div>
            <el-form-item :prop="'classTelParamsVals.'+index+'.valueCode'" :label="item.paramName+'：'" v-for="(item,index) in classList" :key="item.paramCode"
             :rules="{
                required: true, message: '技术参数信息不能为空', trigger: 'change'
              }">    
                <el-select class="telParamValue" v-model="ruleForm.classTelParamsVals[index].valueCode" size="small">
                  <el-option v-for="(paramItem, paramIndex) in item.classTelParamsVals" :key="paramItem.valueCode" :label="paramItem.valueRes" :value="paramItem.valueCode"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="详细说明：" prop="classDesc">
                <el-col :xs="{span:24}" :sm="{span:24}" :md="{span:10}" :lg="{span:10}" :xl="{span:8}">
                  <el-input
                    type="textarea"
                    :rows="4"
                    resize="none"
                    v-model.trim="ruleForm.classDesc">
                  </el-input>
                </el-col>
            </el-form-item>
            <el-form-item>
              <!-- <el-col class="sfooter"> -->
                 <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                 <el-button @click="$router.go(-1);">取消</el-button>
              <!-- </el-col> -->
            </el-form-item>
        </el-form>
        <!-- </el-col> -->
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
          ],
          classDesc: [
            { min: 0,max:200,message: '长度在 0 到 200 个字符', trigger: 'blur' }
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
          if (valid) {
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
       // telParamValueValidator(){
       //    let flag = true;
       //    $('.telParamValue').each((i,v)=>{
       //        if($(v).find('input').val() == ''){
       //          $(v).find('input').addClass('validaterColor').removeClass('validaterColorError');
       //          flag = false;
       //        }else{
       //          $(v).find('input').addClass('validaterColorError').removeClass('validaterColor');
       //        }
       //    });
       //    return flag;
       // },
       // paramValidator(index){
       //    $('.telParamValue').eq(index).find('input').removeClass('validaterColor').addClass("validaterColorError");
       // }
    }
  }
</script>
<style scoped>
  .el-form-item{
    padding: 0 15px;
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
  /*  border-top: 1px solid #ebeef5;
    border-left: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5;*/
    padding:15px;
    background-color: #e5e5e5;
    color:#000;
     margin-bottom: 10px;
    /*text-align: center;*/
  }

  .el-form-item {
    /*margin-bottom: 0;*/
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