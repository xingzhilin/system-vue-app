<template>
	<div class="edit">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
            <el-form-item label="合同名称：">
                {{form.name}}
            </el-form-item>
            <el-form-item label="合同别名：">
                {{form.name}}
            </el-form-item>
            <el-form-item label="合同使用类型：">
                {{form.name}}
            </el-form-item>
            <el-form-item label="对应业务类型：">
                {{form.name}}
            </el-form-item>
            <el-form-item label="合同简介：">
                {{form.name}}
            </el-form-item>
            <el-form-item label="上传附件：">
                {{form.name}}
            </el-form-item>
            <el-form-item label="使用范围设置：">
                {{form.name}}
            </el-form-item>
            <el-form-item label="指定交割库：">
                {{form.name}}
            </el-form-item>
            <el-form-item label="停/启用状态：">
                {{form.name}}
            </el-form-item>              
        </el-form>
		<el-footer>
		    <el-button @click="handleGoBack()" size="small">返回</el-button>
		</el-footer>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg: '合同模板查看',
				form: {
					name: 1
				},
			}
		},
		methods:{
			handleGoBack(){
				this.$router.push({name:'contractOperateListLink'});
			}
		}
	}
</script>
<style lang="scss">	
	@import './../../../../../assets/css/table_view.css';
	.edit{
		.zl_required{
			color: gray;
		}
		.add_table{
			width: 80%;
			margin: 30px auto;
			font-size:12px;
			td{
				border: 1px solid #ebeef5;
				padding: 10px;
				text-align: left;
			}
			.td_label{
				width: 160px;
				text-align:right;
				vertical-align: top;
   				line-height: 40px;
			}
			.el-input{
				width: 260px;
			}
			.td_button{
				text-align: center;
			}
		}
		.el-footer{
			text-align: center;
		}		
		.el-transfer{
			width: 600px;
			margin: 15px auto;
			.el-transfer-panel{
				width:245px;
			}
		}
	}
</style>