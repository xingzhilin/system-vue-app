<template>
	<nav class="navbar navbar-default">	  
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo">
				金银岛煤炭网业务管理系统
			</el-col>
			<el-col :span="14" class="userinfo">
				退出登录
			</el-col>
		</el-col>
	</nav>
</template>
<script>
	export default {
		name: 'Header',
		data(){
			return {

			}
		},
		created(){
			console.log('created');
		}
	}
</script>
<style>

</style>