<template>
    <div class="addRole">
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
            <div :class="show?'show':'hide'">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                    <el-form-item label="企业名称：" prop="name">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.name" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="企业编码：" prop="region">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.region" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="省份：" prop="date1">
                      <el-select v-model.trim="ruleForm.date1" size="small">
                          <el-option
                            v-for="item in cityOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="统一社会信用代码：" prop="date2">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.date2" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="法定代表人：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.name" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="企业邮箱：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.name" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="办公地址：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.name" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="办公地邮政编码：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.name" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="联系人：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.name" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="联系电话：">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input v-model.trim="ruleForm.name" size="small"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="企业简介：" prop="desc">
                      <el-col :lg="10" :xs="20" :md="10" :sm="12">
                          <el-input type="textarea" v-model.trim="ruleForm.desc" rows="5" resize="none"></el-input>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="是否启用：">
                      <el-radio-group v-model.trim="ruleForm.resource">
                        <el-radio label="yes">是</el-radio>
                        <el-radio label="no">否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="企业证件属性：">
                      <el-radio-group v-model.trim="ruleForm.resource">
                        <el-radio label="yes">三证合一企业</el-radio>
                        <el-radio label="no">非三证合一企业</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item class="footer">
                      <el-button type="primary" @click="next('ruleForm')">下一步</el-button>
                      <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
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
                            <el-upload
                              class="avatar-uploader"
                              action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :on-change="handleChange8"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="ruleForm1.imageUrl8" :src="ruleForm1.imageUrl8" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </td>
                        </tr>
                        <tr v-if="secondShow">
                          <td>税务登记证</td>
                          <td>
                            <el-upload
                              class="avatar-uploader"
                              action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :on-change="handleChange9"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="ruleForm1.imageUrl9" :src="ruleForm1.imageUrl9" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </td>
                        </tr>
                        <tr>
                          <td>社会统一信用代码证</td>
                          <td>
                            <el-upload
                              class="avatar-uploader"
                              action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :on-change="handleChange1"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="ruleForm1.imageUrl1" :src="ruleForm1.imageUrl1" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </td>
                        </tr>
                        <tr>
                          <td>开户许可证</td>
                          <td>
                            <el-upload
                              class="avatar-uploader"
                              action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :on-change="handleChange2"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="ruleForm1.imageUrl2" :src="ruleForm1.imageUrl2" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </td>
                        </tr>
                        <tr>
                          <td>盖章文件</td>
                          <td>
                            <el-upload
                              class="avatar-uploader"
                              action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :on-change="handleChange3"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="ruleForm1.imageUrl3" :src="ruleForm1.imageUrl3" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </td>
                        </tr>
                        <tr>
                          <td><span class="red">*</span> 签章扫描件</td>
                          <td>
                            <el-upload
                              class="avatar-uploader"
                              action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :on-change="handleChange4"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="ruleForm1.imageUrl4" :src="ruleForm1.imageUrl4" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <el-form-item class="mg0"  prop="img" :inline-message="true">
                               <input type="hidden" v-model="ruleForm1.imageUrl4">
                            </el-form-item>
                          </td>
                        </tr>
                        <tr>
                          <td>委托签章协议</td>
                          <td>
                            <el-upload
                              class="avatar-uploader"
                              action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :on-change="handleChange5"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="ruleForm1.imageUrl5" :src="ruleForm1.imageUrl5" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </td>
                        </tr>
                        <tr>
                          <td>数字申请证书</td>
                          <td>
                            <el-upload
                              class="avatar-uploader"
                              action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :on-change="handleChange6"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="ruleForm1.imageUrl6" :src="ruleForm1.imageUrl6" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </td>
                        </tr>
                        <tr>
                          <td>经办人身份证</td>
                          <td>
                            <el-upload
                              class="avatar-uploader"
                              action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :on-change="handleChange7"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="ruleForm1.imageUrl7" :src="ruleForm1.imageUrl7" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </td>
                        </tr>
                      </tbody>
                   </table>
                   <el-form-item class="footer">
                      <el-button type="primary" @click="show = true;">上一步</el-button>
                      <el-button type="primary" @click="submitForm('ruleForm1')">保存</el-button>
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
      return {
        show:true,
        secondShow:false,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: 'yes',
          desc: '',
          cityOption:'',
         
        },
        ruleForm1: {
          img:'',
           imageUrl1:'',  //三合一第一个
           imageUrl2:'',
           imageUrl3:'',
           imageUrl4:'',
           imageUrl5:'',
           imageUrl6:'',
           imageUrl7:'',
           imageUrl8:'', //非三合一第一个
           imageUrl9:'', //非三合一第二个
        },
        rules: {
          name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请输入企业编码', trigger: 'blur' }
          ],
          date1: [
            { required: true, message: '请选择省份', trigger: 'change' }
          ],
          date2: [
            { required: true, message: '请输入统一社会信用代码', trigger: 'blur' }
          ],
          desc: [
            { min: 0,max:200, message: '长度在 0 到 200 个字符', trigger: 'blur' }
          ],
          img:[
            {validator: uploadImg, trigger: 'blur' }
          ]
        },
        cityOptions: [{
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
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm);
            console.log(this.ruleForm1);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleChange1(file, fileList) {    
         file.imageUrl = 'imageUrl1';
      },handleChange2(file, fileList) {    
         file.imageUrl = 'imageUrl2';
      },handleChange3(file, fileList) {    
         file.imageUrl = 'imageUrl3';
      },handleChange4(file, fileList) {    
         file.imageUrl = 'imageUrl4';
      },handleChange5(file, fileList) {    
         file.imageUrl = 'imageUrl5';
      },handleChange6(file, fileList) {    
         file.imageUrl = 'imageUrl6';
      },handleChange7(file, fileList) {    
         file.imageUrl = 'imageUrl7';
      },handleChange8(file, fileList) {    
         file.imageUrl = 'imageUrl8';
      },handleChange9(file, fileList) {    
         file.imageUrl = 'imageUrl9';
      },
       handleAvatarSuccess(res, file) {
        this.ruleForm1[file.imageUrl] = URL.createObjectURL(file.raw);  
        if(file.imageUrl == 'imageUrl4') {
          this.ruleForm1.img = true;  
          this.$refs.ruleForm1.validateField('img'); // 上传成功后单独校验，以取消之前的必填项提示

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
            console.log(this.ruleForm1);
            this.show = false;
            if(this.ruleForm.resource == 'yes'){
              this.secondShow = false;
            }else{
              this.secondShow = true;
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
    .el-form-item {
      margin-bottom: 0;
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