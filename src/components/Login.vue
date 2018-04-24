<template>
	<el-container class="login">		
		<el-header>
			<h1>金银岛煤炭网业务管理系统</h1>
		</el-header>
		<el-col :xs="{span:14,offset:5}" :sm="{span:8,offset:8}" :md="{span:8,offset:8}" :lg="{span:8,offset:8}" :xl="{span:4,offset:10}">
			<el-main>
				<el-form :model="loginForm" :rules="formRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
				    <el-form-item prop="account">
				      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
				    </el-form-item>
				    <el-form-item prop="password">
				      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
				    </el-form-item>
				    <el-form-item style="width:100%;">
				      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
				      <!--<el-button @click.native.prevent="handleReset">重置</el-button>-->
				    </el-form-item>
				  </el-form>
			</el-main>
		</el-col>
	</el-container>
</template>
<script>
	import { requestLogin } from './../api/api'
	export default {
		data() {
		  return {
		    logining: false,
		    loginForm: {
				account: 'adminzhilin',
				password: '123456'
		    },
		    formRules: {
		      account: [
		        { required: true, message: '请输入账号', trigger: 'blur' },
		      ],
		      password: [
		        { required: true, message: '请输入密码', trigger: 'blur' },
		      ]
		    }
		  };
		},
		methods: {
			handleReset() {
				this.$refs.loginForm.resetFields();
			},
			handleSubmit(ev) {
				var _this = this;
				this.$refs.loginForm.validate((valid) => {
					console.log(valid);
					if (valid) {
						this.logining = true;
						var loginParams = { username: this.loginForm.account, password: this.loginForm.password };
						console.log(loginParams);

						this.$axios.post('/users.json', loginParams)
									.then(res => this.$router.push({name: 'homeLink'}))
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>
<style>	
	body{
		background:url(./../assets/img/nb-login-bj.png) no-repeat center top;
	}
</style>
<style lang="scss" scoped>
	@import './../assets/css/login_view.css';
	
	.el-header{
		height: 100px;
		h1{
			font-size: 26px;
			color: #FFF;
			text-align: center;
			line-height: 100px;
		}
	}
	.login-container {
		/*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
		-webkit-border-radius: 5px;
		border-radius: 5px;
		-moz-border-radius: 5px;
		background-clip: padding-box;
		margin: 100px auto;
		// width: 350px;
		padding: 35px 35px 15px 35px;
		background: #fff;
		border: 1px solid #eaeaea;
		box-shadow: 0 0 25px #cac6c6;
		h1{
			font-size: 26px;
			color: #FFF;
		}
		.remember {
			margin: 0px 0px 35px 0px;
		}
	}
@media only screen and (max-width: 768px){
    .el-col-xs-14 {
    width: 90.33333%;
    }
    .el-col-xs-offset-5 {
    margin-left: 5.83333%;
    }
    .el-header h1{
	font-size:22px;
    }
}
</style>