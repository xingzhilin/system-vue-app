<template>
    <div class="addRole">
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
            <div :class="show?'show':'hide'">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                    <el-form-item label="企业名称：" prop="enName">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.enName" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="企业编码：" prop="enCode">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.enCode" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="省份：" prop="provinceId">
                        <el-select v-model.trim="ruleForm.provinceId" size="small">
                          <el-option-group
                            v-for="group in cityOptions"
                            :key="group.label"
                            :label="group.label">
                            <el-option
                              v-for="item in group.cityOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-option-group>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="统一社会信用代码：" prop="taxpayerIdentityNo">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.taxpayerIdentityNo" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="法定代表人：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.legalPerson" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="企业邮箱：" prop="enMall">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.enMall" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="办公地址：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.enAddress" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="办公地邮政编码：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.enPostCode" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="联系人：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.linkman" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="联系电话：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.telephone" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="企业简介：" prop="enIntroduce">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input type="textarea" v-model.trim="ruleForm.enIntroduce" rows="5" resize="none"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="是否启用：">
                      <el-radio-group v-model.trim="ruleForm.status">
                        <el-radio label="1">是</el-radio>
                        <el-radio label="0">否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="企业证件属性：">
                      <el-radio-group v-model.trim="ruleForm.isMerge">
                        <el-radio label="1">三证合一企业</el-radio>
                        <el-radio label="0">非三证合一企业</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item class="footer">
                      <el-button type="primary" @click="next('ruleForm')">下一步</el-button>
                      <el-button type="primary" @click="submitForm">保存</el-button>
                      <el-button @click="$router.go(-1);">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div :class="show?'hide':'show'">
                <el-form :model="ruleForm1" :rules="rules" ref="ruleForm1" label-width="150px" class="demo-ruleForm" >
                   <table class="subTable">
                      <col width="30%" />
                      <col width="70%" />
                      <tbody>
                        <tr v-if="secondShow">
                          <td>营业执照</td>
                          <td>
                            <div class="uploadBox">
                                <el-upload
                                  action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                                  list-type="picture-card"
                                  :on-success="handleAvatarSuccess"
                                  :on-change="handleChange8"
                                  :on-remove="handleRemove"
                                  :before-upload="beforeAvatarUpload">
                                  <i class="el-icon-plus"></i>
                                </el-upload>
                            </div>  
                          </td>
                        </tr>
                        <tr v-if="secondShow">
                          <td>税务登记证</td>
                          <td>
                            <div class="uploadBox">
                              <el-upload
                                action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                                list-type="picture-card"
                                :on-success="handleAvatarSuccess"
                                :on-change="handleChange9"
                                :on-remove="handleRemove"
                                :before-upload="beforeAvatarUpload">
                                <i class="el-icon-plus"></i>
                              </el-upload>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>社会统一信用代码证</td>
                          <td>
                            <div class="uploadBox">
                              <el-upload
                                action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                                list-type="picture-card"
                                :on-success="handleAvatarSuccess"
                                :on-change="handleChange1"
                                :on-remove="handleRemove"
                                :before-upload="beforeAvatarUpload">
                                <i class="el-icon-plus"></i>
                              </el-upload>
                            </div>
                            <!-- <el-upload
                              class="avatar-uploader"
                              action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :on-change="handleChange1"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="ruleForm1.taxpayerIdentityNoFilePath" :src="ruleForm1.taxpayerIdentityNoFilePath" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload> -->
                          </td>
                        </tr>
                        <tr>
                          <td>开户许可证</td>
                          <td>
                            <div class="uploadBox">
                              <el-upload
                                action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                                list-type="picture-card"
                                :on-success="handleAvatarSuccess"
                                :on-change="handleChange2"
                                :on-remove="handleRemove"
                                :before-upload="beforeAvatarUpload">
                                <i class="el-icon-plus"></i>
                              </el-upload>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>盖章文件</td>
                          <td>
                            <div class="uploadBox">
                              <el-upload
                                action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                                list-type="picture-card"
                                :on-success="handleAvatarSuccess"
                                :on-change="handleChange3"
                                :on-remove="handleRemove"
                                :before-upload="beforeAvatarUpload">
                                <i class="el-icon-plus"></i>
                              </el-upload>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><span class="red">*</span> 签章扫描件</td>
                          <td>
                            <div class="uploadBox">
                              <el-upload
                                action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                                list-type="picture-card"
                                :on-success="handleAvatarSuccess"
                                :on-change="handleChange4"
                                :on-remove="handleRemove"
                                :before-upload="beforeAvatarUpload">
                                <i class="el-icon-plus"></i>
                              </el-upload>
                            </div>
                            <el-form-item class="mg0"  prop="signatureScanDocumentFilePath" :inline-message="true">
                               <input type="hidden" v-model="ruleForm1.signatureScanDocumentFilePath">
                            </el-form-item>
                          </td>
                        </tr>
                        <tr>
                          <td>委托签章协议</td>
                          <td>
                            <div class="uploadBox">
                              <el-upload
                                action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                                list-type="picture-card"
                                :on-success="handleAvatarSuccess"
                                :on-change="handleChange5"
                                :on-remove="handleRemove"
                                :before-upload="beforeAvatarUpload">
                                <i class="el-icon-plus"></i>
                              </el-upload>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>数字申请证书</td>
                          <td>
                            <div class="uploadBox">
                              <el-upload
                                action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                                list-type="picture-card"
                                :on-success="handleAvatarSuccess"
                                :on-change="handleChange6"
                                :on-remove="handleRemove"
                                :before-upload="beforeAvatarUpload">
                                <i class="el-icon-plus"></i>
                              </el-upload>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>经办人身份证</td>
                          <td>
                            <div class="uploadBox">
                              <el-upload
                                action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                                list-type="picture-card"
                                :on-success="handleAvatarSuccess"
                                :on-change="handleChange7"
                                :on-remove="handleRemove"
                                :before-upload="beforeAvatarUpload">
                                <i class="el-icon-plus"></i>
                              </el-upload>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                   </table>
                   <el-form-item class="footer">
                      <el-button type="primary" @click="show = true;">上一步</el-button>
                      <el-button type="primary" @click="submitForm">保存</el-button>
                      <el-button @click="$router.go(-1);">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </div>
</template>
<script>
  export default {
    data() {
      var uploadImg = (rule, value, callback) => {
        console.log(value)
        if(value == ''){
          callback(new Error('请上传图片'))   
        }
        callback();
      };
      var enNameValidate = (rule, value, callback) => {
        console.log(value)  //企业名称重复校验等接口
        if(value == ''){
          callback(new Error('企业名称不可重复'))   
        }
        callback();
      };
      return {
        show:true,
        secondShow:false,
        ruleForm: {
          enName: '',
          enId: '',
          enCode: '',
          provinceId: '',
          taxpayerIdentityNo: '',
          legalPerson: '',
          enMall: '',
          status: '1',
          enAddress: '',
          enPostCode:'',
          linkman:'',
          telephone:'',
          enIntroduce:'',
          isMerge:'1'
        },
        ruleForm1: {
           taxpayerIdentityNoFilePath:'',  //三合一第一个
           AccountOpeningPermitFilePath:'',
           stampDocumentFilePath:'',
           signatureScanDocumentFilePath:'',
           entrustmentSignatureAgreementFilePath:'',
           digitalCertificateFilePath:'',
           agentIDCardFilePath:'',
           businessLicenseFilePath:'', //非三合一第一个
           taxRegistrationCertificateFilePath:'', //非三合一第二个
        },
        rules: {
          enName: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
            { validator: enNameValidate, trigger: 'blur' },
          ],
          enCode: [
            { required: true, message: '请输入企业编码', trigger: 'blur' },
          ],
          provinceId: [
            { required: true, message: '请选择省份', trigger: 'blur' },
          ],
          taxpayerIdentityNo: [
            { required: true, message: '请输入统一社会信用代码', trigger: 'blur' },
          ],
          status: [
            { required: true, message: '', trigger: 'change' }
          ],
          isMerge: [
            { required: true, message: '', trigger: 'change' }
          ],
          enIntroduce: [
            { min: 0,max:200, message: '长度在 0 到 200 个字符', trigger: 'blur' }
          ],
          signatureScanDocumentFilePath:[
            {validator: uploadImg, trigger: 'blur' }
          ],
          enMall:[
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]
        },
        cityOptions: [{
          label: 'A',
          cityOptions: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: 'B',
          cityOptions: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
      };
    },
    created(){
      let enId = this.$route.query.enId;
      this.getEnDetail(enId);
    },
    methods: {
      submitForm() {
        if(this.show){
            var form = 'ruleForm';
        }else{
            var form = 'ruleForm1';
        }
        this.$refs[form].validate((valid) => {
          if (valid) {
            let data = $.extend(this.ruleForm,this.ruleForm1);
            // this.$http.post('/api/basics/enterprise',data).then(res=>{
            //     if(res.status == 200){
            //       this.$route.push('/business/users/list/add');
            //     }
            // });
            this.$router.push('/business/users/list/index');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleChange1(file, fileList) {    
         file.imageUrl = 'taxpayerIdentityNoFilePath';
      },handleChange2(file, fileList) {    
         file.imageUrl = 'AccountOpeningPermitFilePath';
      },handleChange3(file, fileList) {    
         file.imageUrl = 'stampDocumentFilePath';
      },handleChange4(file, fileList) {    
         file.imageUrl = 'signatureScanDocumentFilePath';
      },handleChange5(file, fileList) {    
         file.imageUrl = 'entrustmentSignatureAgreementFilePath';
      },handleChange6(file, fileList) {    
         file.imageUrl = 'digitalCertificateFilePath';
      },handleChange7(file, fileList) {    
         file.imageUrl = 'agentIDCardFilePath';
      },handleChange8(file, fileList) {    
         file.imageUrl = 'businessLicenseFilePath';
      },handleChange9(file, fileList) {    
         file.imageUrl = 'taxRegistrationCertificateFilePath';
      },
      handleRemove(file, fileList){
         this.ruleForm1[file.imageUrl] = '';  
      },
       handleAvatarSuccess(res, file) {
        this.ruleForm1[file.imageUrl] = URL.createObjectURL(file.raw);  
        if(file.imageUrl == 'signatureScanDocumentFilePath') {
          this.$refs.ruleForm1.validateField('signatureScanDocumentFilePath'); // 上传成功后单独校验，以取消之前的必填项提示

        }
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 jpg 或 png 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      next(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
            this.show = false;
            if(this.ruleForm.isMerge == '1'){
              this.secondShow = false;
            }else{
              this.secondShow = true;
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getEnDetail(enId){
          // this.$http.get('/api/basics/enterpriseInfo/basic',{params:{enId}}).then(res=>{

          // });
          var res = {
              "status": 200,
              "message": "操作成功",
              "enName": "测试企业",
              "enCode": "xee123",
              "enId": "1111",
              "province": "山东省",
              "taxpayerIdentityNo":"10002222",
              "legalPerson":"zhangsan",
              "enMall": "123123@123.com",
              "enAddress":"北京三元桥",
              "linkman":"lisi",
              "telephone":"13723221123",
              "enIntroduce":"Lorem ipsum dolor sit ",
              "status": "1",
              "isMerge":"1",
              "files":{
                    "taxpayerIdentityNoFilePath":"",
                    "AccountOpeningPermitFilePath":"",
                    "stampDocumentFilePath":"",
                    "signatureScanDocumentFilePath":"",
                    "entrustmentSignatureAgreementFilePath":"",
                    "digitalCertificateFilePath":"",
                    "agentIDCardFilePath":"",
                    "businessLicenseFilePath":"",
                    "taxRegistrationCertificateFilePath":""
              }
          };
          this.ruleForm = {
            enName: res.enName,
            enId: res.enId,
            enCode: res.enCode,
            provinceId: res.provinceId,
            taxpayerIdentityNo: res.taxpayerIdentityNo,
            legalPerson: res.legalPerson,
            enMall: res.enMall,
            status: res.status,
            enAddress: res.enAddress,
            enPostCode:res.enPostCode,
            linkman:res.linkman,
            telephone:res.telephone,
            enIntroduce:res.enIntroduce,
            isMerge:res.isMerge
          };
      }
    }
  }
</script>
<style scoped>
    .addRole {
        padding: 30px 15px;
    }
    .show {
      display: block;
    }
    .hide {
      display: none;
    }
    
    .footer {
      margin: 30px 0;
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
      padding: 5px ;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 78px;
      height: 78px;
      line-height: 78px;
      text-align: center;
    }
  .avatar {
      width: 78px;
      height: 78px;
      display: block;
    }
    .red {
      color:#f56c6c;
    }
    .uploadBox {
      width: 148px;
      height: 148px;
      overflow: hidden;
      margin: 0 auto;
    }
</style>
<style>
  .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .mg0 .el-form-item__content{
      margin: 0 !important;
    }
</style>