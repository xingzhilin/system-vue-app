<template>
    <div >
        <el-col class="addRole" :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                <el-form-item label="企业名称：">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.name" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="签章名称：">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.region" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="签章编号：" prop="region">
                  <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input v-model.trim="ruleForm.region" size="small"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="签章状态：">
                  <el-radio-group v-model.trim="ruleForm.resource">
                    <el-radio label="yes">启用</el-radio>
                    <el-radio label="no">停用</el-radio>
                  </el-radio-group>
                </el-form-item>
                 <el-form-item label="签章有效期：" prop="date1">
      				    <el-col :span="8">
      				      <el-date-picker type="datetime" placeholder="选择开始日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      				    </el-col>
      				    <el-col class="line" :span="2">至</el-col>
      				    <el-col :span="8">
      				      <el-date-picker type="datetime" placeholder="选择结束日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
      				    </el-col>
      				 </el-form-item>
      				 <el-form-item label="上传签章照片：" prop="img">
      				    <el-upload
      					  action="https://jsonplaceholder.typicode.com/posts/"
      					  list-type="picture-card"
      					  :on-success="handleAvatarSuccess"
      					  :before-upload="beforeAvatarUpload"
      					  :on-remove="handleRemove">
      					  <i class="el-icon-plus"></i>
      					</el-upload>
      					<input type="hidden" v-model="ruleForm.img">
      				 </el-form-item>
  				      <el-form-item label="备注：">
  				        <el-col :lg="10" :xs="20" :md="10" :sm="12">
                      <el-input type="textarea" v-model.trim="ruleForm.desc" rows="5" resize="none"></el-input>
                  </el-col>
  				      </el-form-item>
                  <el-form-item class="footer">
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                    <el-button @click="$router.go(-1);">取消</el-button>
                  </el-form-item>
            </el-form>
            <el-table :data="tableData" border>
            	<el-table-column prop="userName" label="历史修改记录">
            		<el-table-column prop="" label="操作" width="200">                
	                     <template slot-scope="scope">
	                        <div class="line">
	                        	<el-button type="primary" size="mini">查看</el-button>
	                        </div>
	                     </template>
	                </el-table-column>
	                <el-table-column prop="userName" label="修改人"></el-table-column>
	                <el-table-column prop="reMark" label="修改时间"></el-table-column>
            	</el-table-column>
            </el-table>
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
        ruleForm: {
          region: '',
          date1: '',
          resource: 'yes',
          desc: '',
          imageUrl:'',
          img:''
        },
        rules: {
          region: [
            { required: true, message: '请输入签章编号', trigger: 'blur' }
          ],
          date1: [
            { required: true, message: '请选择签章有效期', trigger: 'blur' }
          ],
          desc: [
            { min: 0,max:200, message: '长度在 0 到 200 个字符', trigger: 'blur' }
          ],
          img:[
            {validator: uploadImg, trigger: 'blur' },
            { required: true }  //为了显示星号，必填校验是自定义的
          ]
        },
        tableData:[
        	{
	          userName: 'Lily',
	          reMark: 'Lily Li',
	          addTime:'2020',
	          roleState: '运营',
	        }
	     ]
        
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
      handleChange(file, fileList) {    
         
      },
      handleRemove(file, fileList){
      	 this.ruleForm.imageUrl = "";
      	 this.ruleForm.img = "";
      },
      handleAvatarSuccess(res, file) {
          this.ruleForm.imageUrl = URL.createObjectURL(file.raw);  
          this.ruleForm.img = true;  
          this.$refs.ruleForm.validateField('img');
        
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
      }
    }
  }
</script>
<style scoped>
    .addRole {
        padding: 30px 15px;
    }
    .footer {
      margin: 30px 0;
    }

  	.line {
  		text-align: center;
  	}
  	.red {
      color:#f56c6c;
    }
</style>
