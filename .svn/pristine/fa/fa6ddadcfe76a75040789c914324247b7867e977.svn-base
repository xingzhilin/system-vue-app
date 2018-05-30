<template>
    <div class="update">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form :model="form" :rules="form" ref="form" label-width="100px" class="demo-ruleForm" >
            <el-form-item label="企业名称：" prop="">
                <el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
                   {{form.enName}}
                </el-col>
            </el-form-item>  
            <el-form-item label="组织机构代码：" prop="">
                <el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
                    {{form.orgCode}}
                </el-col>
            </el-form-item>
            <el-form-item label="准入协议号：" prop="accessNo">
                <el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
                    <el-input v-model="form.accessNo" size="small"></el-input>
                </el-col>
            </el-form-item>  
            <el-form-item label="准入开始时间：" prop="startTime">
                <el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
                     <el-date-picker type="datetime" v-model="form.startTime" placeholder="选择日期" style="width: 100%;" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
                </el-col>
            </el-form-item>  
            <el-form-item label="准入失效时间：" prop="endTime">
                <el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
                     <el-date-picker type="datetime" v-model="form.endTime" placeholder="选择日期" style="width: 100%;" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
                </el-col>
            </el-form-item>    
            <el-form-item label="上传廉政协议：" prop="incorruptAgreementFileUrl">
                <el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-col>
            </el-form-item>  
            <el-form-item label="上传准入协议：" prop="accessAgreementFileUrl">
                <el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-col>
            </el-form-item>         
            <el-form-item label="是否启用：" prop="status">
                <el-radio-group v-model="form.isUsed">
                    <el-radio label="启用"></el-radio>
                    <el-radio label="禁用"></el-radio>
                </el-radio-group>
            </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleSubmitForm('form')" size="small">保存</el-button>
            <el-button @click="handleGoBack()" size="small">取消</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default{
        name: 'Add',
        data(){
            return {
                msg: 'update',
                form: {
                    accessNo:'',
                    startTime:'',
                    endTime: '',
                    incorruptAgreementFileUrl: '12',
                    accessAgreementFileUrl:'12',
                    isUsed: "1"
                },
                dialogImageUrl:'',
                dialogVisible: false
            }
        },      
        computed:{
            isLogin(){
                return this.$store.getters.isLogin
            },
            getAddAccountChoice(){
                return this.$store.getters.getAddAccountChoice
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleAvatarSuccess(res, file) {
                this.form.imageUrl = URL.createObjectURL(file.raw);
                console.log(this.form.imageUrl);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handleChange(file, fileList) {

                file.imageUrl = 'imageUrl';
                file.img = 'img';
                // this.ruleForm.img = file.name;
                // this.ruleForm.imageUrl = file.url;
            },
            handleAvatarPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleAvatarSuccess(res, file) {
                this.form[file.imageUrl] = URL.createObjectURL(file.raw);  
                this.form[file.img] = true;  //改放change显示图片
                //this.$refs.ruleForm.validateField(file.img); // 上传成功后单独校验，以取消之前的必填项提示
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleSubmitForm(formName) {
                this.$refs[formName].validate((valid) => {
                  if (valid) {
                   this.form.enId = this.$route.query.enId;
                    let sParams = JSON.stringify(this.form);
                    console.log(sParams)
                    this.$axios.post('http://192.168.11.31:9001/api/v1/basics/admin/access', sParams , {
                            headers:{ "Content-Type": "application/json"}
                        })
                        .then(res =>  {
                                console.log(res);
                                if(res.data.status == 200){
                                    this.$message({
                                      showClose: true,
                                      message: '恭喜您已经成功提交！',
                                      type: 'success',
                                      duration: 2000,
                                      onClose: () => {
                                        this.$router.push({name:'BusinessManageUsersAdmittanceUpdateList'});
                                      }
                                    });
                                }
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                    
                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                })
            },
            handleGoBack(fromName){
                //this.$router.go(-1);
                this.$router.push({name: 'usersadmittanceUpdateListLink', query: {enId: this.$route.query.enId}})
            },
            init(){
                this.$axios.get('http://192.168.11.31:9001/api/v1/basics/admin/access/' + this.$route.query.accessId + '/' + this.$route.query.accessType, {
                    headers: { "Content-Type": "application/json"}
                })
                .then( res => {
                    console.log('***************res');
                    console.log(res);
                    if(res.data.status == 200){
                        this.form = res.data.result;
                    }
                });
            }
            
        }
    }
</script>
<style lang="scss" scoped>
    .el-breadcrumb{
        position: relative;
        border-bottom: 1px solid #e5e5e5;
        background-color: #f5f5f5;
        min-height: 41px;
        line-height: 40px;
        padding-left: 20px;
        display: block;
    }
    .el-form{
        padding: 15px 20px 0 15px;
        color:#606266;
    }   
    .el-form-item{
        margin-bottom:10px;
    }
    .el-upload {
        border: 1px solid #e2e2e2;
        border-radius: 50%;
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
</style>