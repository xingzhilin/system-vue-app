<template>
	<div>
		<el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
			<el-form :model="ruleForm" status-icon ref="ruleForm" :inline-message="inlineMessage">
			  	<table class="subTable">
			  		<col width="30%" />
			  		<col width="70%" />
			  		<tbody>
			  			<tr>
				  			<td><span class="red">*</span> 事件名称</td>
				  			<td>
				  				{{ruleForm.eventName}}
				  			</td>
				  		</tr>
			  			<tr><td colspan="2" class="tableTile">审批</td></tr>
			  			<tr>
				  			<td><span class="red">*</span> 事件图标</td>
				  			<td class="alignCenter">
				  				<img width="120" height="120" :src="ruleForm.imageUrl" @click="preview(ruleForm.list[0].list[0].imgUrl)" alt="">
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件简称</td>
				  			<td>
								{{ruleForm.list[0].eventShortName}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件内容</td>
				  			<td>
								{{ruleForm.list[0].eventContent}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td>链接</td>
				  			<td>
								{{ruleForm.list[0].eventUrl}}
				  			</td>
				  		</tr>
			  			
			  			<tr><td colspan="2" class="tableTile">驳回</td></tr>
			  			<tr>
				  			<td><span class="red">*</span> 事件图标</td>
				  			<td class="alignCenter">
				  				<img width="120" height="120" :src="ruleForm.imageUrl1" @click="preview(ruleForm.list[1].list[1].imgUrl)" alt="">
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件简称</td>
				  			<td>
								{{ruleForm.list[1].eventShortName}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件内容</td>
				  			<td>
								{{ruleForm.list[1].eventContent}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td>链接</td>
				  			<td>
								{{ruleForm.list[1].eventUrl}}
				  			</td>
				  		</tr>
			  			
			  			<tr><td colspan="2" class="tableTile">成功</td></tr>
			  			<tr>
				  			<td><span class="red">*</span> 事件图标</td>
				  			<td class="alignCenter">
				  				<img width="120" height="120" :src="ruleForm.imageUrl2" @click="preview(ruleForm.list[2].list[2].imgUrl)" alt="">
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件简称</td>
				  			<td>
								{{ruleForm.list[2].eventShortName}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td><span class="red">*</span> 事件内容</td>
				  			<td>
								{{ruleForm.list[2].eventContent}}
				  			</td>
				  		</tr>
				  		<tr>
				  			<td>链接</td>
				  			<td>
								{{ruleForm.list[2].eventUrl}}
				  			</td>
				  		</tr>
						<tr>
    			  			<td>停/启用状态</td>
    			  			<td>
    			  				<el-radio-group v-model="ruleForm.status" disabled>
          							<el-radio v-model="ruleForm.radio" label="1">启用</el-radio>
      								<el-radio v-model="ruleForm.radio" label="0">停用</el-radio>
        						</el-radio-group>
    			  			</td>
    			  		</tr>
			  		</tbody>
			  	</table>
			  	<el-form-item>
			  		<el-col class="sfooter">
			           <el-button @click="$router.go(-1);">返回</el-button>
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
      if (value == "") {
        callback(new Error("请上传图片")); //到时候通过给ruleForm.img 赋值  上传图片的时候赋值
      }
      callback();
    };
    return {
      inlineMessage: true,
      ruleForm: {
        eventId: "1", //（主键）
        eventName: "入库结算", //(事件名称)
        status: "1", //（是否启用）
        list: [
          {
            eventType: "0", //(事件类型 审批)
            list: [
              {
                imgUrl: "c/d/aaa.jpg" //（事件图片）
              }
            ],
            eventShortName: "1", //（事件简称）
            eventContent: "1234565", //（事件内容）
            eventUrl: "1234565" //（链接）
          },
          {
            eventType: "-1", //(事件类型 驳回)
            list: [
              {
                imgUrl: "c/d/aaa.jpg" //（事件图片）
              }
            ],
            eventShortName: "1", //（事件简称）
            eventContent: "1234565", //（事件内容）
            eventUrl: "1234565" //（链接）
          },
          {
            eventType: "1", //(事件类型 成功)
            list: [
              {
                imgUrl: "c/d/aaa.jpg" //（事件图片）
              }
            ],
            eventShortName: "1", //（事件简称）
            eventContent: "1234565", //（事件内容）
            eventUrl: "1234565" //（链接）
          }
        ]
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    preview(url) {
      this.dialogImageUrl = url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style scoped>
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
  padding: 10px;
}

table.subTable td.tableTile {
  padding: 15px 0;
  color: #000;
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
tr td:nth-child(2) {
  text-align: left;
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
  border-color: #409eff;
}
</style>