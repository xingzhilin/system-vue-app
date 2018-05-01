<template>
	<div>
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" :inline-message="true">
    		  	<table class="subTable">
    		  		<tbody>
    		  			<tr>
    			  			<td>归属频道</td>
    			  			<td>
    			  				 煤炭
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 品牌名称</td>
    			  			<td>
    			  				<el-form-item  prop="brandName">
    								<el-col :span="10" :offset="7">
    									<el-input v-model="ruleForm.brandName" size="small"></el-input>
    								</el-col>
    							 </el-form-item>
    			  			</td>
    			  		</tr>
                <tr>
                  <td>品牌介绍</td>
                  <td>
                    <el-form-item  prop="brandDesc">
                    <el-col :span="10" :offset="7">
                      <el-input 
                      type="textarea" 
                      :rows="4" 
                      resize="none"
                      v-model="ruleForm.brandDesc">
                      </el-input>
                    </el-col>
                   </el-form-item>
                  </td>
                </tr>
                <tr>
                  <td>是否启用</td>
                  <td>
                    <el-form-item>
                    <el-radio-group v-model="ruleForm.status">
                          <el-radio label="1">启用</el-radio>
                          <el-radio label="0">停用</el-radio>
                        </el-radio-group>
                   </el-form-item>
                  </td>
                </tr>
                <tr>
                  <td>推荐设置</td>
                  <td>
                    <el-form-item>
                    <el-radio-group v-model="ruleForm.recommend">
                          <el-radio label="1">推荐</el-radio>
                          <el-radio label="0">不推荐</el-radio>
                        </el-radio-group>
                   </el-form-item>
                  </td>
                </tr>
    			  		<tr>
                  <td><span class="red">*</span> 品牌logo</td>
                  <td>
                      <div class="uploadBox">
                        <el-upload
                          action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                          list-type="picture-card"
                          :file-list="ruleForm.brandLogos"
                          :on-success="handleAvatarSuccess"
                          :on-change="handleChange"
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove"
                          :before-upload="beforeAvatarUpload">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                      </div>
                      <el-form-item class="mg0"  prop="brandLogos" :inline-message="true">
                         <input type="hidden" v-model="ruleForm.brandLogos">
                      </el-form-item>
                  </td>
                </tr>
                <tr>
    			  			<td><span class="red">*</span> 品牌图片</td>
    			  			<td>
    			  					<div class="uploadBox">
                        <el-upload
                          action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
                          list-type="picture-card"
                          :file-list="ruleForm.brandImgs"
                          :on-success="handleAvatarSuccess"
                          :on-change="handleChange1"
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove"
                          :before-upload="beforeAvatarUpload">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                      </div>
                      <el-form-item class="mg0"  prop="brandImgs" :inline-message="true">
                         <input type="hidden" v-model="ruleForm.brandImgs">
                      </el-form-item>
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
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
	</div>
</template>
<script scoped>
  export default {
    data() {
      var uploadImg = (rule, value, callback) => {
        if(value == ''){  // [] == ''
          callback(new Error('请上传图片'))   
        }
        callback();
      };
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        ruleForm: {
          brandName:'',
          brandLogos:[],
          brandImgs:[],
          brandDesc:'',
          status:'1',
          industryCode:'',
          recommend:'1'
        },
        rules: {
          brandLogos:[
            {validator: uploadImg, trigger: 'blur' }
          ],
          brandImgs:[
            {validator: uploadImg, trigger: 'blur' }
          ],
          brandName: [
            { required: true,message: '请输入品牌名称', trigger: 'blur' },
          ],
          brandDesc:[
          	{ min: 0, max: 200, message: '长度在 0 到 200 个字符', trigger: 'blur' }
          ]
        },
      };
    },
    created(){
        let brandCode = this.$route.query.brandCode; 
        if(brandCode){  //判断新增还是编辑状态
        // this.$http.get('/api/basics/brands',{params:{brandCode:brandCode}}).then(res=>{
            // res.resultData.brandLogos[0].attachName = res.resultData.brandLogos[0].attachName;
            // res.resultData.brandLogos[0].attachUrl = res.resultData.brandLogos[0].attachUrl;
            // res.resultData.brandImgs[0].attachName = res.resultData.brandLogos[0].attachName;
            // res.resultData.brandImgs[0].attachUrl = res.resultData.brandLogos[0].attachUrl;
            // this.ruleForm = res.resultData;
        // })
            var data= {
              "status": 200,
              "message": "操作成功",
              "resultData": {
                "brandCode": "20",
                "industryCode": "1",
                "brandName": "brand1",
                "brandDesc": null,
                "status": '1',
                "recommend": '1',
                "brandLogos": [
                  {
                    "name": "mybatis学习",
                    "url": "c:/mybatis"
                  }
                ],
                "brandImgs": [
                   {
                    "name": "hibernategogo",
                    "url": "d:/hibernate"
                  }
                ]
              }
            };
            this.ruleForm = data.resultData;
        }
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
         file.brand = 'brandLogos';
      },
      handleChange1(file, fileList) {    
         file.brand = 'brandImgs';
      },
      handleRemove(file, fileList){
         console.log(fileList)
      },
       handleAvatarSuccess(res, file) {
        console.log(res)
        this.ruleForm[file.brand]=[{
          name:file.name,   //文件名和url有待字段需要更改，值有待考究
          url:URL.createObjectURL(file.raw)
        }];  
        this.$refs.ruleForm.validateField(file.brand); 
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 20;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 jpg 或 png 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 20MB!');
        }
        return isJPG && isLt2M;
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
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
   .uploadBox {
      width: 148px;
      height: 148px;
      overflow: hidden;
      margin: 0 auto;
    }
    
</style>
