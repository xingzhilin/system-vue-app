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
		   v-model="whAuthUsers"
		   :titles="['未设置人员', '已设置人员']"
		   :data="allWhAuthUsers" 
		   :right-default-checked="whAuthUsers"></el-transfer>

		  <el-form-item>
		    <el-button type="primary" @click="handleSubmitForm()" size="small" :disabled="isDisabled">保存</el-button>
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
				props: {},
				isDisabled: false,
				sParams:{},
				allWhAuthUsers: [],
				whAuthUsers: []
			}
		},
		mounted(){
			this.initList();
		},
		methods:{
			handleSubmitForm(formName) {
				this.isDisabled = true;
				let sParams = {
					adminIds: this.whAuthUsers,
					whCode: this.$route.query.whCode
				}
		        this.$axios.post('http://192.168.11.98:9001/admin/whauth/', sParams, {
		        	headers:{ "Content-Type": "application/json"}
		        })
		        .then( res => {
		        	console.log(res);
		        	if(res.data.status == 200){
						this.$message({
				          showClose: true,
				          message: '恭喜您已经成功提交！',
				          type: 'success',
				          duration: 2000,
				          onClose: () => {
				        	this.$router.push({name:'warehousePowerIndexLink'});

							this.isDisabled = false;
				          }
				        });
					}
		        })
				.catch(function (error) {
					console.log(error);
				})
		    },
		    handleGoBack(fromName){
		    	this.$router.go(-1);
		    },		    
			initList(){
				this.$axios.get('http://192.168.11.98:9001/admin/getAllWhAuthUsers/'+ this.$route.query.whCode , {
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
						console.log(res)
						if(res.data.status == 200){							
							this.isLoading = false;
							let data = res.data.result;
							const jsonData = data.map( (item, index) => {
								return {
									key: item.adminId,
									label: item.realName,
									disabled: false
								}
							})
							const adminIds = data.filter( (item, index) => {
								if( item.whAuthType == 1){
									return item.adminId
								}
							}).map( item => {
								return item.adminId
							})
							this.allWhAuthUsers = jsonData;
							this.whAuthUsers = adminIds;
						}
					})
					.catch(function (error) {
						console.log(error);
					})
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
	}	
	.el-form-item{
		margin-bottom:10px;
	}
	
	.infoShow{
		padding:0 30px;
	}
</style>