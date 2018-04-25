<template>
	<div>
        <el-col :lg="{span:18,offset:3}" :xs="{span:22,offset:1}" :md="{span:20,offset:2}" :sm="{span:22,offset:1}">
    		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" :inline-message="true">
    		  	<table class="subTable">
    		  		<tbody>
    		  			<tr>
    			  			<td><span class="red">*</span> 数据来源</td>
    			  			<td>
    			  				<el-form-item  prop="value">
    								<el-col :span="10" :offset="7">
    									<el-input v-model="ruleForm.name" size="small"></el-input>
    								</el-col>
    							 </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 场地</td>
    			  			<td>
    			  				<el-form-item  prop="value">
    								<el-col :span="10" :offset="7">
    									<el-input v-model="ruleForm.name" size="small"></el-input>
    								</el-col>
    							 </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 煤种</td>
    			  			<td>
    			  				<el-form-item  prop="value">
    			  					<el-col :span="10" :offset="7">
	    								<el-select size="small" v-model="ruleForm.value" placeholder="请选择" >
	    								    <el-option
	    								      v-for="item in options"
	    								      :key="item.value"
	    								      :label="item.label"
	    								      :value="item.value">
	    								    </el-option>
	    								 </el-select>
    								 </el-col>
    							 </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 发热量</td>
    			  			<td>
    			  				<el-form-item  prop="value">
    								<el-col :span="10" :offset="7">
    									<el-input v-model="ruleForm.name" size="small"></el-input>
    								</el-col>
    							 </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 价格</td>
    			  			<td>
    			  				<el-form-item  prop="value">
    								<el-col :span="10" :offset="7">
    									<el-input v-model="ruleForm.name" size="small"></el-input>
    								</el-col>
    							 </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 涨跌额</td>
    			  			<td>
    			  				<el-form-item  prop="value">
    								<el-col :span="10" :offset="7">
    									<el-input v-model="ruleForm.name" size="small"></el-input>
    								</el-col>
    							 </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 涨跌幅</td>
    			  			<td>
    			  				<el-form-item  prop="value">
    								<el-col :span="10" :offset="7">
    									<el-input v-model="ruleForm.name" size="small"></el-input>
    								</el-col>
    							 </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td><span class="red">*</span> 发布时间</td>
    			  			<td>
    			  				<el-form-item  prop="value">
    								<el-col :span="10" :offset="7">
    									<el-date-picker type="datetime" v-model="ruleForm.time" placeholder="选择日期"></el-date-picker>
    								</el-col>
    							 </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td>停/启用状态</td>
    			  			<td>
    			  				<el-form-item>
    								<el-col :span="10" :offset="7">
    									<el-input v-model="ruleForm.name" size="small"></el-input>
    								</el-col>
    							 </el-form-item>
    			  			</td>
    			  		</tr>
    			  		<tr>
    			  			<td>备注</td>
    			  			<td>
    			  				<el-form-item  prop="desc">
    								<el-col :span="10" :offset="7">
    									<el-input 
    									type="textarea" 
    									:rows="4" 
    									placeholder="请输入内容"
      									resize="none"
    									v-model="ruleForm.desc">
    									</el-input>
    								</el-col>
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
          value:'',
          name:'',
          radio:'1',
          desc:'场地坑口价',
        },
        rules: {
          value: [
            { required: true,message: '请输入事件名称', trigger: 'blur' }
          ],
          name: [
            { required: true,message: '请输入事件简称', trigger: 'blur' },
            { min: 1, max: 4, message: '长度在 1 到 4 个字符', trigger: 'blur' }
          ],
          desc:[
          	{ min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur' }
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
		padding: 5px ;
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
</style>
