<template>
  <div>
    <el-form :model="ruleForm" label-width="80px" :rules="rules" status-icon ref="ruleForm" :label-position="$store.getters.isPc==true?'right':'top'"  :inline-message="true">
      <el-form-item label="标题" prop="noticeTitle">
        <el-col :xs="{span:14,}" :sm="{span:8}" :md="{span:8}" :lg="{span:8}" :xl="{span:4}">
          <el-input v-model.trim="ruleForm.noticeTitle" size="small"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="公告内容" prop="noticeContext">
        <div v-loading="quillUpdateImg"  style="display:inline-block;">
            <quill-editor
              v-model.trim="ruleForm.noticeContext"
              ref="myQuillEditor"
              :options="editorOption"
              @focus="onEditorFocus($event,'myQuillEditor')"
            >
            </quill-editor>
        </div>
       </el-form-item>
      <el-form-item label="默认内容">
        <div v-loading="quillUpdateImg"  style="display:inline-block;">
            <quill-editor
              v-model.trim="ruleForm.defContent"
              ref="myQuillEditorDef"
              @focus="onEditorFocus($event,'myQuillEditorDef')"
              :options="editorOption"
            >
            </quill-editor>
        </div>
       </el-form-item>
  </el-form>
    <el-col class="sfooter">
       <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
       <el-button @click="$router.go(-1);">取消</el-button>
    </el-col>
    <el-upload
          class="avatar-uploader"
          action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :before-upload="beforeUpload">
  </el-upload>
  </div>
</template>
<script>
    import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'
  export default {
    components: {quillEditor},
    data() {
      var container =[
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{'header': 1}, {'header': 2}],               // custom button values
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
      [{'direction': 'rtl'}],                         // text direction

      [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
      [{'header': [1, 2, 3, 4, 5, 6, false]}],

      [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      [{'font': []}],
      [{'align': []}],
      ['link', 'image'],
      ['clean']                                         // remove formatting button
    ]
      return {
        quillEditor:'',
        ruleForm:{
          noticeTitle:'',
          noticeId:'',
          noticeContext:'',
          defContent:''
        },
        rules:{
          noticeTitle:[
            { required: true,message: '请填写标题', trigger: 'blur' }
          ],
          noticeContext:[
            { required: true,message: '请填写公告内容', trigger: 'blur' }
          ]
        },
       quillUpdateImg:false,
        // 富文本框参数设置
        editorOption: {  
          modules: {
            toolbar: {
              container: container,
              handlers: {
                'image': function (value) {
                  console.log(value)
                  if (value) {
                      document.querySelector('.avatar-uploader input').click()
                } else {
                      this.quill.format('image', false);
                }
                }
              }
            }
          }
        }
      }
    },
    created(){
      let noticeId = this.$route.query.noticeId;
      this.noticeId = noticeId;
      this.$http.get('/api/v1/admin/basics/notice/'+noticeId).then(res=>{
        console.log(res)
        let data = res.data;
        this.ruleForm = data.result;
      });
    },
    methods:{
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(this.ruleForm);
              let data = {
                noticeTitle:this.ruleForm.noticeTitle,
                noticeId:this.ruleForm.noticeId,
                noticeContext:this.ruleForm.noticeContext,
                defContent:this.ruleForm.defContent,
              };
              this.$http.put('/api/v1/admin/basics/notice',data).then(res=>{
                console.log(res)
                let data = res.data;
                    if(data.status == 200){
                      this.$router.push({path:'/content/noticeInfo/index'});
                    }
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
       },
      beforeUpload() {
            // 显示loading动画
            this.quillUpdateImg = true
        },
        
        uploadSuccess(res, file) {
          console.log(res)  //用的别人家的上传api~~
            // 获取富文本组件实例
            var quill = this.$refs[this.quillEditor].quill
            var length = quill.getSelection().index;

            // 如果上传成功
            if (res.state === 'SUCCESS' && res.url !== null) {
                // 获取光标所在位置
                // 插入图片  res.info为服务器返回的图片地址
                quill.insertEmbed(length, 'image', res.url)
                // 调整光标到最后
                quill.setSelection(length + 1)
            } else {
                this.$message.error('图片插入失败')
            }
            // loading动画消失
            this.quillUpdateImg = false
        },
   
        uploadError() {
            // loading动画消失
            this.quillUpdateImg = false
            this.$message.error('图片插入失败')
        },
        onEditorFocus(quill,quillEditor){
          console.log(quillEditor)
            this.quillEditor = quillEditor;  //区分图片显示那个编辑器
        }
    }
  }
</script>

<style scoped lang="scss">
 

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
.el-form{
    padding: 15px 10px;
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
    padding: 20px ;
  }
  .tableTile {
    border-top: 1px solid #ebeef5;
    border-left: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5;
    padding:15px;
    color:#000;
    text-align: center;
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
  .m20 {
    margin-top:20px;
  }
</style>
<style>
  .ql-toolbar.ql-snow {
  text-align:left;
}
 .ql-editor {
  min-height: 185px;

}
table.subTable .el-form-item__content {
    line-height:20px;
   }
</style>