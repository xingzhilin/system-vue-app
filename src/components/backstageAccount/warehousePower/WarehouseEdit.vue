<template>
	<div class="addAccount">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="infoShow">
			<p>交割库：天津港</p>
		</div>
		<el-form label-width="100px" class="demo-ruleForm" >		  
		  <el-transfer 
		   v-model="users"
		   :titles="['未设置人员', '已设置人员']"
		   :data="data"></el-transfer>

		  <el-form-item>
		    <el-button type="primary" @click="handleSubmitForm('users')" size="small">保存</el-button>
		    <el-button @click="handleGoBack('users')" size="small">取消</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default{
		name: 'AddAccount',
		data(){

			const generateData = _ => {
				const data = [];
				for (let i = 1; i <= 15; i++) {
					data.push({
						key: i,
						label: `备选项 ${ i }`,
						disabled: false
					});
				}
				return data;
			};
			return {
				msg: 'AddAccount',
				data: generateData(),
        		users: [],
				props: {}
			}
		},		
		computed:{
			
		},
		methods:{
			handleSubmitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            alert('submit!');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        })
		    },
		    handleGoBack(fromName){
		    	this.$router.go(-1);
		    },
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
	}	
	.el-form-item{
		margin-bottom:10px;
	}
	
	.infoShow{
		padding:0 30px;
	}
</style>